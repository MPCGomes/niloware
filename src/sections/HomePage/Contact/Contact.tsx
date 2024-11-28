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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (formData.name.length < 3) {
      setError(errors.name);
      setLoading(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError(errors.email);
      setLoading(false);
      return;
    }
    if (!/^\d{10,}$/.test(formData.phone)) {
      setError(errors.phone);
      setLoading(false);
      return;
    }
    if (formData.message.length < 10) {
      setError(errors.message);
      setLoading(false);
      return;
    }
    if (!captchaToken) {
      setError(errors.captcha);
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
      setError(errors.general);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <form className={styles.inputs} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={placeholders.name}
            value={formData.name}
            onChange={handleChange}
            minLength={3}
            required
          />
          <div className={styles.contacts}>
            <input
              type="email"
              name="email"
              placeholder={placeholders.email}
              value={formData.email}
              onChange={handleChange}
              pattern="^\S+@\S+\.\S+$"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder={placeholders.phone}
              value={formData.phone}
              onChange={handleChange}
              pattern="^\d{10,}$"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder={placeholders.message}
            value={formData.message}
            onChange={handleChange}
            minLength={10}
            required
          />
          <ReCAPTCHA
            className={styles.captcha}
            sitekey="6Lc9I1cqAAAAAH6ojKJq8mclozs2RaBgVgG4220F"
            onChange={handleCaptchaChange}
          />
          <Button
            text={loading ? messages.sending : messages.send}
            type="submit"
            className={styles.button}
          />
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{messages.success}</p>}
      </div>
    </section>
  );
};

export default Contact;
