import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '@/src/components/Button/Button';
import styles from './Contact.module.scss';
import { useTranslation } from '@/src/hooks/useTranslation';
import axios from 'axios';

interface ContactTranslations {
  title: string;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  errors: {
    name: string;
    email: string;
    phone: string;
    message: string;
    captcha: string;
    general: string;
  };
  messages: {
    success: string;
    sending: string;
    send: string;
  };
}

const Contact: React.FC = () => {
  const translations = useTranslation<ContactTranslations>('homePage', 'contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errorsState, setErrorsState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  if (!translations || !translations.placeholders) {
    return (
      <section className={styles.contact}>
        <div className={styles.container}>
          <p>Loading translations...</p>
        </div>
      </section>
    );
  }

  const { title, placeholders, errors, messages } = translations;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorsState({
      ...errorsState,
      [name]: '', // Clear error for the field as the user types
    });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', message: '', captcha: '' };

    if (formData.name.length < 3) {
      newErrors.name = errors.name;
      valid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = errors.email;
      valid = false;
    }
    if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = errors.phone;
      valid = false;
    }
    if (formData.message.length < 10) {
      newErrors.message = errors.message;
      valid = false;
    }
    if (!captchaToken) {
      newErrors.captcha = errors.captcha;
      valid = false;
    }

    setErrorsState(newErrors);
    return valid;
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    setErrorsState({
      ...errorsState,
      captcha: '', // Clear CAPTCHA error when valid token is set
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_yyvleds',
        template_id: 'template_w8h6p1f',
        user_id: 'TV0egaxYnT67PB2Ez',
        template_params: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setCaptchaToken(null);
    } catch (err) {
      setErrorsState({
        ...errorsState,
        captcha: errors.general,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <form className={styles.inputs} onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder={placeholders.name}
              value={formData.name}
              onChange={handleChange}
            />
            {errorsState.name && <p className={styles.error}>{errorsState.name}</p>}
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactField}>
              <input
                type="text"
                name="email"
                placeholder={placeholders.email}
                value={formData.email}
                onChange={handleChange}
              />
              {errorsState.email && <p className={styles.error}>{errorsState.email}</p>}
            </div>
            <div className={styles.contactField}>
              <input
                type="text"
                name="phone"
                placeholder={placeholders.phone}
                value={formData.phone}
                onChange={handleChange}
              />
              {errorsState.phone && <p className={styles.error}>{errorsState.phone}</p>}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder={placeholders.message}
              value={formData.message}
              onChange={handleChange}
            />
            {errorsState.message && <p className={styles.error}>{errorsState.message}</p>}
          </div>
          <ReCAPTCHA
            className={styles.captcha}
            sitekey="6Lc9I1cqAAAAAH6ojKJq8mclozs2RaBgVgG4220F"
            onChange={handleCaptchaChange}
          />
          {errorsState.captcha && <p className={styles.error}>{errorsState.captcha}</p>}
          <Button
            text={loading ? messages.sending : messages.send}
            type="submit"
            className={styles.button}
          />
        </form>
        {success && <p className={styles.success}>{messages.success}</p>}
      </div>
    </section>
  );
};

export default Contact;
