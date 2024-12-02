'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '@/src/components/Button/Button';
import styles from './Contact.module.scss';
import { useTranslation } from '@/src/hooks/useTranslation';
import axios from 'axios';
import * as Yup from 'yup';

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
  const { t, locale } = useTranslation<ContactTranslations>('homePage', 'contact');

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

  if (!t || !t.placeholders || !t.errors || !t.messages) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorsState((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = async (): Promise<boolean> => {
    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, t.errors.name)
        .min(3, t.errors.name)
        .required(t.errors.name),
      email: Yup.string().email(t.errors.email).required(t.errors.email),
      phone: Yup.string()
        .matches(/^[0-9+\s()-]+$/, t.errors.phone)
        .required(t.errors.phone),
      message: Yup.string().min(10, t.errors.message).required(t.errors.message),
    });

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrorsState({ name: '', email: '', phone: '', message: '', captcha: '' });
      return true;
    } catch (err) {
      const newErrors = { name: '', email: '', phone: '', message: '', captcha: '' };
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof typeof newErrors] = error.message;
          }
        });
      }
      setErrorsState(newErrors);
      return false;
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    setErrorsState((prev) => ({
      ...prev,
      captcha: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const isValid = await validateForm();

    if (!isValid) {
      setLoading(false);
      return;
    }

    if (!captchaToken) {
      setErrorsState((prev) => ({
        ...prev,
        captcha: t.errors.captcha,
      }));
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'your_service_id',
        template_id: 'your_template_id',
        user_id: 'your_user_id',
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
      setErrorsState((prev) => ({
        ...prev,
        captcha: t.errors.general,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>{t.title}</h2>
        <form className={styles.inputs} onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder={t.placeholders.name}
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
                placeholder={t.placeholders.email}
                value={formData.email}
                onChange={handleChange}
              />
              {errorsState.email && <p className={styles.error}>{errorsState.email}</p>}
            </div>
            <div className={styles.contactField}>
              <input
                type="text"
                name="phone"
                placeholder={t.placeholders.phone}
                value={formData.phone}
                onChange={handleChange}
              />
              {errorsState.phone && <p className={styles.error}>{errorsState.phone}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder={t.placeholders.message}
              value={formData.message}
              onChange={handleChange}
            />
            {errorsState.message && <p className={styles.error}>{errorsState.message}</p>}
          </div>
          <div className={styles.captchaContainer}>
            <ReCAPTCHA
              className={styles.captcha}
              sitekey="6Lc9I1cqAAAAAH6ojKJq8mclozs2RaBgVgG4220F"
              hl={locale}
              onChange={handleCaptchaChange}
            />
            {errorsState.captcha && <p className={styles.error}>{errorsState.captcha}</p>}
          </div>
          <Button
            text={loading ? t.messages.sending : t.messages.send}
            type="submit"
            className={styles.button}
          />
        </form>
        {success && <p className={styles.success}>{t.messages.success}</p>}
      </div>
    </section>
  );
};

export default Contact;
