import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="privacy-hero-content">
          <h1>Політика конфіденційності</h1>
          <p>Останнє оновлення: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <div className="section-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <h2>Вступ</h2>
          </div>
          <p>
            Ми поважаємо вашу конфіденційність і прагнемо захистити ваші персональні дані.
            Ця політика конфіденційності інформує вас про те, як ми дбаємо про ваші персональні дані
            під час відвідування нашого веб-сайту, а також про ваші права щодо конфіденційності та як закон захищає вас.
          </p>
        </section>

        <section className="privacy-section">
          <div className="section-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <h2>Дані, які ми збираємо</h2>
          </div>
          <p>
            Ми можемо збирати, використовувати, зберігати та передавати різні види ваших персональних даних, які ми згрупували наступним чином:
          </p>
          <ul>
            <li>
              <strong>Ідентифікаційні дані</strong> - включають ім'я, прізвище, ім'я користувача або подібний ідентифікатор
            </li>
            <li>
              <strong>Контактні дані</strong> - включають електронну адресу та номери телефонів
            </li>
            <li>
              <strong>Технічні дані</strong> - включають IP-адресу, тип та версію браузера,
              налаштування часового поясу та місцезнаходження, операційну систему та платформу
            </li>
            <li>
              <strong>Дані про використання</strong> - включають інформацію про те, як ви використовуєте наш веб-сайт та послуги
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <div className="section-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <h2>Як ми використовуємо ваші дані</h2>
          </div>
          <p>
            Ми будемо використовувати ваші персональні дані лише тоді, коли це дозволено законом. Найчастіше ми використовуємо ваші персональні дані в таких випадках:
          </p>
          <ul>
            <li>Для надання та підтримки наших послуг</li>
            <li>Для повідомлення про зміни в наших послугах</li>
            <li>Для надання підтримки клієнтам</li>
            <li>Для збору аналітики та цінної інформації для покращення наших послуг</li>
            <li>Для виявлення, запобігання та вирішення технічних проблем</li>
          </ul>
        </section>

        <section className="privacy-section">
          <div className="section-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <h2>Безпека даних</h2>
          </div>
          <p>
            Ми впровадили відповідні заходи безпеки для запобігання випадковій втраті,
            несанкціонованому використанню або доступу, зміні або розкриттю ваших персональних даних.
            Крім того, ми обмежуємо доступ до ваших персональних даних тим співробітникам,
            агентам, підрядникам та іншим третім сторонам, які мають обґрунтовану потребу в бізнесі.
          </p>
        </section>

        <section className="privacy-section">
          <div className="section-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11a9 9 0 0 1 9 9"></path>
              <path d="M4 4a16 16 0 0 1 16 16"></path>
              <circle cx="5" cy="19" r="2"></circle>
            </svg>
            <h2>Ваші права</h2>
          </div>
          <p>
            За певних обставин ви маєте права щодо ваших персональних даних відповідно до законів про захист даних, включаючи право:
          </p>
          <ul>
            <li>Запитувати доступ до ваших персональних даних</li>
            <li>Запитувати виправлення ваших персональних даних</li>
            <li>Запитувати видалення ваших персональних даних</li>
            <li>Заперечувати проти обробки ваших персональних даних</li>
            <li>Запитувати обмеження обробки ваших персональних даних</li>
            <li>Запитувати передачу ваших персональних даних</li>
            <li>Право відкликати згоду</li>
          </ul>
        </section>

        <section className="privacy-section">
          <div className="section-header">
            <svg xmlns="http://www.w3.org/2000/svg" className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h2>Зв'яжіться з нами</h2>
          </div>
          <p>
            Якщо у вас є питання щодо цієї політики конфіденційності або наших практик конфіденційності,
            будь ласка, зв'яжіться з нами:
          </p>
          <div className="contact-info">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Електронна пошта: hr@company.com
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Телефон: +1 (555) 123-4567
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Адреса: Першотравневий проспект, 24
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
