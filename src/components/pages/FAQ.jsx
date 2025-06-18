import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      category: "Загальні питання",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      ),
      questions: [
        {
          id: "q1",
          question: "Як подати заявку на вакансію?",
          answer: "Щоб подати заявку на вакансію, перейдіть на сторінку вакансій, виберіть бажану позицію та натисніть кнопку 'Подати заявку'. Заповніть необхідну форму та додайте своє резюме."
        },
        {
          id: "q2",
          question: "Скільки часу займає процес розгляду заявки?",
          answer: "Зазвичай ми розглядаємо заявки протягом 5-7 робочих днів. Якщо ваша кандидатура нас зацікавить, ми зв'яжемося з вами для проведення співбесіди."
        },
        {
          id: "q3",
          question: "Чи можна подати заявку на декілька вакансій?",
          answer: "Так, ви можете подати заявку на будь-яку кількість вакансій, які відповідають вашій кваліфікації та інтересам."
        }
      ]
    },
    {
      id: 2,
      category: "Процес найму",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      questions: [
        {
          id: "q4",
          question: "З яких етапів складається процес найму?",
          answer: "Процес найму зазвичай включає: 1) Розгляд резюме, 2) Телефонна співбесіда, 3) Технічна співбесіда (якщо потрібно), 4) Співбесіда з HR та керівником, 5) Пропозиція про роботу."
        },
        {
          id: "q5",
          question: "Як підготуватися до співбесіди?",
          answer: "Рекомендуємо ознайомитися з інформацією про компанію, переглянути вимоги вакансії, підготувати приклади з вашого досвіду та питання до роботодавця."
        }
      ]
    },
    {
      id: 3,
      category: "Умови роботи",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      questions: [
        {
          id: "q6",
          question: "Які умови віддаленої роботи?",
          answer: "Для віддалених позицій ми забезпечуємо необхідне обладнання, гнучкий графік та регулярні онлайн-зустрічі з командою."
        },
        {
          id: "q7",
          question: "Які бенефіти надає компанія?",
          answer: "Ми пропонуємо медичне страхування, компенсацію спортзалу, курси підвищення кваліфікації, корпоративні події та інші бонуси."
        },
        {
          id: "q8",
          question: "Чи є можливість професійного росту?",
          answer: "Так, ми активно підтримуємо професійний розвиток співробітників через менторство, внутрішні тренінги та можливості кар'єрного росту."
        }
      ]
    },
    {
      id: 4,
      category: "Технічна підтримка",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      questions: [
        {
          id: "q9",
          question: "Що робити, якщо виникли технічні проблеми при подачі заявки?",
          answer: "У разі технічних проблем, будь ласка, зробіть скріншот помилки та надішліть його на support@company.com разом з описом проблеми."
        },
        {
          id: "q10",
          question: "Як відновити доступ до особистого кабінету?",
          answer: "Натисніть 'Забули пароль' на сторінці входу та слідуйте інструкціям, які будуть надіслані на вашу електронну пошту."
        }
      ]
    }
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const selectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setOpenQuestion(null); // Reset open question when changing category
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="faq-hero-content">
          <h1>Часті запитання</h1>
          <p>Знайдіть відповіді на найпоширеніші запитання про роботу в нашій компанії</p>
        </div>
      </div>

      <div className="faq-content">
        <div className="faq-categories">
          {faqData.map(category => (
            <div 
              key={category.id} 
              className={`faq-category ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => selectCategory(category.id)}
            >
              <div className="category-header">
                {category.icon}
                <h2>{category.category}</h2>
              </div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="questions-section">
            <div className="questions-list">
              {faqData.find(cat => cat.id === selectedCategory)?.questions.map(item => (
                <div key={item.id} className="faq-item">
                  <button
                    className={`faq-question ${openQuestion === item.id ? 'active' : ''}`}
                    onClick={() => toggleQuestion(item.id)}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`arrow-icon ${openQuestion === item.id ? 'open' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className={`faq-answer ${openQuestion === item.id ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ; 