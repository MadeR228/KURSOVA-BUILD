import { createContext, useState, useContext, useEffect } from 'react';

const ApplicationContext = createContext();

export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplications must be used within an ApplicationProvider');
  }
  return context;
};

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState(() => {
    const savedApplications = localStorage.getItem('applications');
    return savedApplications ? JSON.parse(savedApplications) : [
      {
        id: 1,
        name: 'Sarah Johnson',
        position: 'Frontend Developer',
        date: '2024-03-18',
        email: 'sarah.j@email.com',
        status: 'pending',
        resume: null,
        coverLetter: '',
        linkedin: ''
      },
      {
        id: 2,
        name: 'Michael Chen',
        position: 'Product Manager',
        date: '2024-03-17',
        email: 'michael.c@email.com',
        status: 'interview',
        resume: null,
        coverLetter: '',
        linkedin: ''
      }
    ];
  });

  // Save applications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  const addApplication = (newApplication) => {
    const newId = applications.length > 0 
      ? Math.max(...applications.map(app => app.id)) + 1 
      : 1;

    setApplications(prev => [
      {
        id: newId,
        date: new Date().toISOString().split('T')[0],
        status: 'pending',
        ...newApplication
      },
      ...prev
    ]);

    return newId; // Return the new ID for confirmation
  };

  const updateApplicationStatus = (id, newStatus) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const deleteApplication = (id) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  return (
    <ApplicationContext.Provider value={{
      applications,
      addApplication,
      updateApplicationStatus,
      deleteApplication
    }}>
      {children}
    </ApplicationContext.Provider>
  );
}; 