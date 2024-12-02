import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import styles from './CustomAccordion.module.scss';

interface AccordionItem {
  title: string;
  content: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: '4px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  border: '1px solid white',
  backgroundColor: 'transparent',
  color: 'white',
  '&.Mui-expanded': {
    backgroundColor: 'black',
    color: 'black',
    border: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: 'white',
  '&.Mui-expanded': {
    backgroundColor: 'black',
    color: 'white',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  paddingTop: '16px',
}));

const CustomExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: 'white',
}));

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number[]>([]);

  const handleChange = (index: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded((prev) =>
      isExpanded ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded.includes(index)}
          onChange={handleChange(index)}
          style={{ margin: 0 }}
        >
          <StyledAccordionSummary expandIcon={<CustomExpandMoreIcon />}>
            <Typography style={{ fontWeight: 600 }}>{item.title}</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>{item.content}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
};

export default CustomAccordion;
