import { useState } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from '../../data/jobsData';
import './JobListings.css';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    type: ''
  });

  const jobsPerPage = 6;

  const departments = [...new Set(jobsData.map(job => job.department))];
  const locations = [...new Set(jobsData.map(job => job.location))];
  const types = [...new Set(jobsData.map(job => job.type))];

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !filters.department || job.department === filters.department;
    const matchesLocation = !filters.location || job.location === filters.location;
    const matchesType = !filters.type || job.type === filters.type;

    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="job-listings">
      <div className="jobs-hero">
        <div className="jobs-hero-content">
          <h1>Доступні вакансії</h1>
          <p>Приєднуйтесь до нашої команди та допоможіть будувати майбутнє</p>
          <div className="search-bar">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Пошук..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="jobs-content">
        <aside className="filters-panel">
          <div className="filters-header">
            <h2>Фільтри</h2>
            <button
              className="clear-filters"
              onClick={() => setFilters({ department: '', location: '', type: '' })}
            >
              Очистити
            </button>
          </div>

          <div className="filters-group">
            <label>Відділ</label>
            <select
              name="department"
              value={filters.department}
              onChange={handleFilterChange}
            >
              <option value="">Усі відділи</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="filters-group">
            <label>Локації</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            >
              <option value="">Усі локації</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="filters-group">
            <label>Зайнятість</label>
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="results-count">
            {filteredJobs.length} вакансій
          </div>
        </aside>

        <main className="jobs-results">
          {filteredJobs.length === 0 ? (
            <div className="no-results">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h2>Таких вакансій не знайдено</h2>
              <p>Спробуйте змінити умови пошуку або фільтри</p>
              <button className="btn btn-primary" onClick={() => {
                setSearchTerm('');
                setFilters({ department: '', location: '', type: '' });
                setCurrentPage(1);
              }}>
                Очистити всі фільтри
              </button>
            </div>
          ) : (
            <>
              <div className="jobs-list">
                {currentJobs.map(job => (
                  <div key={job.id} className="job-card">
                    <div className="job-card-main">
                      <div className="job-card-content">
                        <div className="job-card-header">
                          <span className={`job-type ${job.type.toLowerCase().replace('-', '')}`}>
                            {job.type}
                          </span>
                          <h2>{job.title}</h2>
                        </div>

                        <div className="job-meta">
                          <span className="job-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {job.location}
                          </span>
                          <span className="job-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            {job.department}
                          </span>
                          <span className="job-meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="1" x2="12" y2="23"></line>
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                            {job.salary}
                          </span>
                        </div>

                        <div className="job-description">
                          <p>{job.description}</p>
                        </div>
                      </div>

                      <div className="job-requirements">
                        <h3>Requirements</h3>
                        <ul>
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="job-actions">
                      <Link to={`/jobs/${job.id}/apply`} className="btn btn-primary">
                        Apply now
                      </Link>
                      <Link to={`/jobs/${job.id}`} className="btn btn-secondary">
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="pagination-arrow"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <span className="pagination-info">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="pagination-arrow"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default JobListings;
