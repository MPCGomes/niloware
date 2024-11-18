import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Button from '@/app/components/Button/Button';
import { useParams } from 'next/navigation';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from '../../../hooks/useTranslation';

const Contact: React.FC = () => {
  const { contact } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const params = useParams();
  const locale = params?.locale || 'en-us';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
      setError(contact?.errors.name || 'Name must be at least 3 characters.');
      setLoading(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError(contact?.errors.email || 'Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (!/^\d{10,}$/.test(formData.phone)) {
      setError(contact?.errors.phone || 'Phone number must be at least 10 digits.');
      setLoading(false);
      return;
    }
    if (formData.message.length < 10) {
      setError(contact?.errors.message || 'Message must be at least 10 characters.');
      setLoading(false);
      return;
    }
    if (!captchaToken) {
      setError(contact?.errors.captcha || 'Please complete the CAPTCHA.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`/api/contact`, {
        ...formData,
        captchaToken,
        locale,
      });

      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setCaptchaToken(null);
      }
    } catch (err) {
      setError(contact?.errors.general || 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>
          {contact?.title}
        </h2>
        <form
          className={styles.inputs}
          onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={contact?.placeholders.name}
            value={formData.name}
            onChange={handleChange}
            minLength={3}
            required
          />
          <div className={styles.contacts}>
            <input
              type="email"
              name="email"
              placeholder={contact?.placeholders.email}
              value={formData.email}
              onChange={handleChange}
              pattern="^\S+@\S+\.\S+$"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder={contact?.placeholders.phone}
              value={formData.phone}
              onChange={handleChange}
              pattern="^\d{10,}$"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder={contact?.placeholders.message}
            value={formData.message}
            onChange={handleChange}
            minLength={10}
            required
          />
          <ReCAPTCHA
            className={styles.captcha}
            sitekey={siteKey || ''}
            onChange={handleCaptchaChange}
          />
          <Button
            text={loading ? contact?.messages.sending : contact?.messages.send}
            type="submit" className={styles.button}
          />
        </form>
        {error && <p className={styles.error}>
          {error}
        </p>}
        {success && <p className={styles.success}>
          {contact?.messages.success}
        </p>}
      </div>
    </section>
  );
};

export default Contact;
