import { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_ombeal8',
        'template_nqam4ee',
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
        },
        'epqIv7BjIk-jbBP8h'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Повідомлення успішно надіслано!'
      });
      setFormData({
        title: '',
        name: '',
        message: '',
        email: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Помилка при відправці повідомлення. Спробуйте пізніше.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Зв'язатися з нами</h1>
          <p>Маєте питання чи пропозиції? Ми завжди на зв'язку та готові допомогти!</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info-container">
          <div className="contact-info">
            <h2>Контактна інформація</h2>
            <div className="contact-details">
              <div className="contact-detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="contact-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3>Адреса</h3>
                  <p>вул. Соборності, 45, Полтава, 36000, Україна</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="contact-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3>Телефон</h3>
                  <p>+380 (532) 56-78-90</p>
                  <p>+380 (67) 123-45-67</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="contact-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3>Email</h3>
                  <p>info@jobify.ua</p>
                  <p>support@jobify.ua</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="contact-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3>Години роботи</h3>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб: 10:00 - 15:00</p>
                  <p>Нд: Вихідний</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Напишіть нам</h2>
            {submitStatus.message && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ім'я</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше ім'я"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Ваш email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Тема</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Тема повідомлення"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Повідомлення</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ваше повідомлення"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Відправка...' : 'Надіслати повідомлення'}
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <h2>Наше розташування</h2>

          <div className="map-iframe-container">
            <iframe
              title="Полтава на карте"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.3489474291575!2d34.55969891571607!3d49.57861797936492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d825dddcf44bbd%3A0x7ff2ccfddeae6036!2z0J_QvtC70YLQsNCy0LAg0J_RgNC40LLQtdGA0YHQuNC5LCAyNCwg0J_QvtC00YHQtdC70YzQvdCw0Y8sINCe0LrQu9C40L3RgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMzYwMDA!5e0!3m2!1suk!2sua!4v1718790582719!5m2!1suk!2sua"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: 10}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
