import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { jobsData } from '../../data/jobsData';
import { useApplications } from '../../context/ApplicationContext';
import './Apply.css';

const Apply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find(job => job.id === parseInt(id));
  const [showToast, setShowToast] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const { addApplication } = useApplications();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    linkedin: ''
  });

  const [fileName, setFileName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setFileName(file.name);
    }
  };

  const handleRemoveFile = () => {
    setFormData(prev => ({
      ...prev,
      resume: null
    }));
    setFileName('');
    // Reset the file input
    const fileInput = document.getElementById('resume');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create application object
    const application = {
      name: `${formData.firstName} ${formData.lastName}`,
      position: job.title,
      email: formData.email,
      phone: formData.phone,
      resume: formData.resume,
      coverLetter: formData.coverLetter,
      linkedin: formData.linkedin
    };

    // Add application to context
    addApplication(application);

    // Show toast notification
    setShowToast(true);

  };

  if (!job) {
    return (
      <div className="apply-page not-found">
        <h1>Job Not Found</h1>
        <p>The job posting you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/jobs')} className="btn btn-primary">
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="apply-page">
      {showToast && (
        <div className={`toast-notification ${showToast ? 'show' : ''} ${isHiding ? 'hide' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Application submitted successfully!
        </div>
      )}

      <div className="apply-header">
        <h1>Apply for {job.title}</h1>
        <p>{job.department} • {job.location}</p>
      </div>

      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Ім'я *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Прізвище *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Резюме/CV *</label>
          <div className="custom-file-upload">
            <label htmlFor="resume" className="file-upload-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span className="file-upload-text">Choose a file</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
            />
            <div className={`file-name-display ${!fileName ? 'hidden' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              {fileName}
              <button type="button" className="remove-file" onClick={handleRemoveFile}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <small>Формати: PDF, DOC, DOCX</small>
        </div>

        <div className="form-group">
          <label htmlFor="coverLetter"><b>Супровідний лист</b></label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows="6"
            placeholder="Напишіть, чому вас зацікавила ця посада..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">Профіль LinkedIn(необов’язково)</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="https://linkedin.com/in/your-profile"
          />
          <small>Додайте посилання на ваш профіль LinkedIn, якщо хочете, щоб ми ознайомилися з вашим професійним досвідом.</small>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/jobs')}>
            Назад
          </button>
          <button type="submit" className="btn btn-primary">
            <b>Надіслати заявку</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
