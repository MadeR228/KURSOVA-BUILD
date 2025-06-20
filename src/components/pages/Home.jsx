import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {CompanyLogos} from "../../data/CompanyLogos";
import {CompanyLogos2} from "../../data/CompanyLogos";
import {CompanyLogos3} from "../../data/CompanyLogos";
import { jobsData } from '../../data/jobsData';

const Home = () => {
  const sliderRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const featuredJobs = jobsData.filter(job => job.featured);

  useEffect(() => {
    // Показывать кнопки навигации только если карточек больше 3
    setShowNavButtons(featuredJobs.length > 3);

    const checkScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px погрешность
      }
    };

    // Проверить при первой загрузке
    checkScroll();

    // Добавить слушатель события прокрутки
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll);
      return () => slider.removeEventListener('scroll', checkScroll);
    }
  }, [featuredJobs.length]);

  const scrollToLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollToRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Функции для перетаскивания (drag)
  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.classList.add('dragging');
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('dragging');
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (sliderRef.current) {
        sliderRef.current.classList.remove('dragging');
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walkX = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walkX;
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
            <h1>HR Portal</h1>
          <p>Ваш шлях до кар’єрних можливостей та ресурсів для працівників.</p>
        </div>
      </section>

      <section className="featured-positions">
        <div className="container">
          <h2>Рекомендовані вакансії</h2>
          <div className="slider-container">
            {showNavButtons && (
              <button
                className={`slider-button prev ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={scrollToLeft}
                disabled={!canScrollLeft}
                aria-label="Предыдущий слайд"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <div
              className="positions-slider"
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {featuredJobs.map(job => (
                <div key={job.id} className="position-card">
                  <h3>{job.title}</h3>
                  <div className="position-info">
                    <span>{job.department}</span> • <span>{job.location}</span> • <span>{job.type}</span>
                  </div>
                  <Link to={`/jobs#${job.id}`} className="apply-btn">Детальніше</Link>
                </div>
              ))}
            </div>

            {showNavButtons && (
              <button
                className={`slider-button next ${!canScrollRight ? 'disabled' : ''}`}
                onClick={scrollToRight}
                disabled={!canScrollRight}
                aria-label="Следующий слайд"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="company-info">
        <div className="container_company">
          <h2>Чому варто приєднатися до нас?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Можливості для зростання</h3>
              <p>Програми безперервного навчання та професійного розвитку</p>
            </div>
            <div className="benefit-card">
              <h3>Баланс між роботою та особистим життям</h3>
              <p>Гнучкий графік роботи та можливість працювати віддалено</p>
            </div>
            <div className="benefit-card">
              <h3>Конкурентні переваги</h3>
              <p>Повне медичне страхування та пенсійні плани</p>
            </div>
            <div className="benefit-card">
              <h3>Інклюзивна культура</h3>
              <p>Різноманітне та привітне робоче середовище</p>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-section">
        <div className="container_slider">
          <h2>Наші партнери</h2>
          <div className="partners-container">
            <div className="partners-slider">
              <div className="partners-track">
                {CompanyLogos.map((src, i) => (
                    <div className="partner-logo" key={16}>
                      <img src={src} alt={`Logo ${i}`} />
                    </div>
                ))}
              </div>
              <div className="partners-track">
                {CompanyLogos2.map((src, i) => (
                    <div className="partner-logo" key={16}>
                      <img src={src} alt={`Logo ${i}`} />
                    </div>
                ))}
              </div>
              <div className="partners-track">
                {CompanyLogos3.map((src, i) => (
                    <div className="partner-logo" key={16}>
                      <img src={src} alt={`Logo ${i}`} />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
