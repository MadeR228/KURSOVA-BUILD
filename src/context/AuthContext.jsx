import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  const [userRole, setUserRole] = useState(() => {
    const savedRole = localStorage.getItem('userRole');
    return savedRole || 'guest';
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(isAuthenticated));
    localStorage.setItem('userRole', userRole);
  }, [isAuthenticated, userRole]);

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole('guest');
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      userRole,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}; 