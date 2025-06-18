import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Про нашу компанію</h1>
          <p>Ми створюємо можливості для професійного розвитку та зростання</p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section mission">
          <div className="section-content">
            <h2>Наша місія</h2>
            <p>
              Ми прагнемо створити середовище, де талановиті професіонали можуть 
              розкрити свій потенціал, працюючи над інноваційними проектами, що 
              змінюють світ на краще.
            </p>
          </div>
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </section>

        <section className="about-section values">
          <h2>Наші цінності</h2>
          <div className="values-grid">
            <div className="value-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3>Командна робота</h3>
              <p>Ми віримо в силу співпраці та взаємної підтримки</p>
            </div>
            <div className="value-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <h3>Інновації</h3>
              <p>Постійно шукаємо нові шляхи для вдосконалення</p>
            </div>
            <div className="value-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
              <h3>Навчання</h3>
              <p>Підтримуємо постійний професійний розвиток</p>
            </div>
            <div className="value-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Якість</h3>
              <p>Прагнемо до досконалості у всьому, що робимо</p>
            </div>
          </div>
        </section>

        <section className="about-section achievements">
          <h2>Наші досягнення</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">500+</div>
              <div className="achievement-text">Успішних проектів</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">200+</div>
              <div className="achievement-text">Професіоналів у команді</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">50+</div>
              <div className="achievement-text">Міжнародних клієнтів</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">10+</div>
              <div className="achievement-text">Років на ринку</div>
            </div>
          </div>
        </section>

        <section className="about-section team">
          <div className="section-content">
            <h2>Приєднуйтесь до нашої команди</h2>
            <p>
              Ми завжди шукаємо талановитих та мотивованих професіоналів. 
              Переглянути актуальні вакансії та подати заявку можна на сторінці вакансій.
            </p>
            <a href="/jobs" className="cta-button">Переглянути вакансії</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 