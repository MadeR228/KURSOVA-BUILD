import { createContext, useContext, useState, useEffect } from 'react';

const VacancyContext = createContext();

export const useVacancies = () => {
  return useContext(VacancyContext);
};

export const VacancyProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVacancies = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/vacancies');
      if (!response.ok) {
        throw new Error('Failed to fetch vacancies');
      }
      const data = await response.json();
      setVacancies(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addVacancy = async (newVacancy) => {
    try {
      const response = await fetch('http://localhost:3000/api/vacancies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVacancy),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add vacancy');
      }
      
      const savedVacancy = await response.json();
      setVacancies(prev => [...prev, savedVacancy]);
      return savedVacancy;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  const value = {
    vacancies,
    loading,
    error,
    fetchVacancies,
    addVacancy
  };

  return (
    <VacancyContext.Provider value={value}>
      {children}
    </VacancyContext.Provider>
  );
};