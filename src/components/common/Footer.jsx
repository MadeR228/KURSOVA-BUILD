import './Footer.css';
import nuppLogo from '../../assets/images/nupp_logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <a href="https://nupp.edu.ua" target="_blank" rel="noopener noreferrer" className="nupp-logo">
          <img src={nuppLogo} alt="NUPP Logo" />
      </a>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Зв'язок</h3>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p>Email: <a href={'mailto:hr@company.com'}>hr@company.com</a></p>
          </div>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p>Телефон: +1 (555) 123-4567</p>
          </div>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>Адреса: Першотравневий проспект, 24</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Швидкі посилання</h3>
          <ul>
            <li><a href="/jobs">Вакансії</a></li>
            <li><a href="/about">Про нас</a></li>
            <li><a href="/contact">Контакти</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Ресурси</h3>
          <ul>
            <li><a href="/employee">Портал працівника</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy">Конфіденційність</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HR Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
