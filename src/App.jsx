import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import JobListings from './components/pages/JobListings';
import EmployeePortal from './components/pages/EmployeePortal';
import AdminDashboard from './components/pages/AdminDashboard';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import FAQ from './components/pages/FAQ';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Apply from './components/pages/Apply';
import { ApplicationProvider } from './context/ApplicationContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import { VacancyProvider } from './context/VacancyContext';

// Separate component for routes to use auth context
const AppRoutes = () => {
  const { isAuthenticated, userRole, logout } = useAuth();

  return (
    <div className="app">
      <Navbar isAuthenticated={isAuthenticated} userRole={userRole} onLogout={logout} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/jobs/:id/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/employee/*"
            element={
              isAuthenticated && (userRole === 'employee' || userRole === 'admin')
                ? <EmployeePortal />
                : <Login />
            }
          />
          <Route
            path="/admin/*"
            element={
              isAuthenticated && userRole === 'admin'
                ? <AdminDashboard />
                : <Login />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <VacancyProvider>
        <AuthProvider>
          <ApplicationProvider>
            <AppRoutes />
          </ApplicationProvider>
        </AuthProvider>
      </VacancyProvider>
    </Router>
  );
}

export default App;
