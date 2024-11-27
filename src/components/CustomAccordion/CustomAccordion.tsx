import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './CustomAccordion.module.scss';

interface AccordionItem {
  title: string;
  content: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (index: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          disableGutters
          sx={{
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            border: 'none',
            '&:first-of-type': {
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            },
            '&:last-of-type': {
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            },
            '&.Mui-expanded': {
              margin: '0',
              borderRadius: '10px',
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={styles.title}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.content}>
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomAccordion;