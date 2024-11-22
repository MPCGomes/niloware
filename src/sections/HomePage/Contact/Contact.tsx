import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '@/src/components/Button/Button';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
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
      setError('Name must be at least 3 characters.');
      setLoading(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (!/^\d{10,}$/.test(formData.phone)) {
      setError('Phone number must be at least 10 digits.');
      setLoading(false);
      return;
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters.');
      setLoading(false);
      return;
    }
    if (!captchaToken) {
      setError('Please complete the CAPTCHA.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_yyvleds',
          template_id: 'template_w8h6p1f',
          user_id: 'TV0egaxYnT67PB2Ez',
          template_params: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setCaptchaToken(null);
      } else {
        throw new Error('Failed to send the message. Please try again later.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form className={styles.inputs} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            minLength={3}
            required
          />
          <div className={styles.contacts}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              pattern="^\S+@\S+\.\S+$"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="^\d{10,}$"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
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
            text={loading ? 'Sending...' : 'Send Message'}
            type="submit"
            className={styles.button}
          />
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>Your message was sent successfully!</p>}
      </div>
    </section>
  );
};

export default Contact;
