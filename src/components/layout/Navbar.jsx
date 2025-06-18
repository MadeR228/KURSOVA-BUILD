import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Jobify
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              Вакансии
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Контакты
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Мой кабинет
            </Link>
          </li>
        </ul>
        
        <div className="nav-auth">
          <Link to="/login" className="nav-link">
            Войти
          </Link>
          <Link to="/register" className="btn btn-primary">
            Регистрация
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
