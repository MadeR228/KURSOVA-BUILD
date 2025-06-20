import { useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useApplications } from '../../context/ApplicationContext';
import './AdminDashboard.css';

const INITIAL_FORM_STATE = {
  name: '',
  position: '',
  department: '',
  email: '',
  status: 'active'
};

const EmployeeForm = ({
                        isEdit,
                        initialData = INITIAL_FORM_STATE,
                        onSubmit,
                        onClose
                      }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const departments = ['Engineering', 'Human Resources', 'Marketing', 'Sales', 'Product', 'Design'];

  return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h3>{isEdit ? 'Edit Employee' : 'Add New Employee'}</h3>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                  id="position"
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="onleave">On Leave</option>
              </select>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {isEdit ? 'Save Changes' : 'Add Employee'}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const { applications, updateApplicationStatus, deleteApplication } = useApplications();

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      email: 'john.doe@company.com',
      status: 'active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'HR Manager',
      department: 'Human Resources',
      email: 'jane.smith@company.com',
      status: 'active'
    }
  ]);

  const nmbrofEmployees = employees.length;

  const [stats, setStats] = useState({
    totalEmployees: nmbrofEmployees,
    openPositions: 8,
    pendingApplications: applications.filter(app => app.status === 'pending').length,
    upcomingInterviews: applications.filter(app => app.status === 'interview').length
  });

  const [recentApplications, setRecentApplications] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Frontend Developer',
      date: '2024-03-18',
      email: 'sarah.j@email.com',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      date: '2024-03-17',
      email: 'michael.c@email.com',
      status: 'interview'
    }
  ]);

  const handleAddEmployee = (formData) => {
    const newEmployee = {
      id: employees.length + 1,
      ...formData
    };
    setEmployees(prev => [...prev, newEmployee]);
    setStats(prev => ({ ...prev, totalEmployees: prev.totalEmployees + 1 }));
    setShowModal(false);
  };

  const handleEditEmployee = (formData) => {
    setEmployees(prev => prev.map(emp =>
        emp.id === selectedEmployee.id ? { ...emp, ...formData } : emp
    ));
    setShowModal(false);
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(prev => prev.filter(emp => emp.id !== id));
      setStats(prev => ({ ...prev, totalEmployees: prev.totalEmployees - 1 }));
    }
  };

  const handleApplicationStatusChange = (id, newStatus) => {
    updateApplicationStatus(id, newStatus);

    // Update stats
    setStats(prev => {
      const newStats = { ...prev };

      if (newStatus === 'accepted') {
        newStats.pendingApplications = applications.filter(app => app.status === 'pending').length - 1;
        newStats.openPositions = prev.openPositions - 1;
      } else if (newStatus === 'interview') {
        newStats.upcomingInterviews = applications.filter(app => app.status === 'interview').length + 1;
      }

      return newStats;
    });
  };

  const handleDeleteApplication = (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      deleteApplication(id);
    }
  };

  // Filter applications based on search and status
  const filteredApplications = useMemo(() => {
    return applications.filter(app => {
      const matchesSearch = searchTerm === '' ||
          app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === '' || app.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, searchTerm, statusFilter]);

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setModalType('viewApplication');
    setShowModal(true);
  };

  const handleDownloadResume = (resume) => {
    // Create a URL for the file
    const fileURL = URL.createObjectURL(resume);

    // Create a temporary link element
    const downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = `${selectedApplication.name}_resume${getFileExtension(resume.name)}`;

    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Clean up the URL object
    URL.revokeObjectURL(fileURL);
  };

  const getFileExtension = (filename) => {
    return filename.substring(filename.lastIndexOf('.'));
  };

  const ApplicationModal = () => (
      <div className="modal-overlay">
        <div className="modal application-details-modal">
          <div className="modal-header">
            <h3>Application Details</h3>
            <button className="close-button" onClick={() => {
              setShowModal(false);
              setSelectedApplication(null);
            }}>×</button>
          </div>
          <div className="modal-content">
            <div className="application-detail">
              <h4>Personal Information</h4>
              <div className="detail-group">
                <label>Full Name:</label>
                <p>{selectedApplication.name}</p>
              </div>
              <div className="detail-group">
                <label>Email:</label>
                <p>{selectedApplication.email}</p>
              </div>
              <div className="detail-group">
                <label>Phone:</label>
                <p>{selectedApplication.phone || 'Not provided'}</p>
              </div>
            </div>

            <div className="application-detail">
              <h4>Position Details</h4>
              <div className="detail-group">
                <label>Applied Position:</label>
                <p>{selectedApplication.position}</p>
              </div>
              <div className="detail-group">
                <label>Current Status:</label>
                <select
                    value={selectedApplication.status}
                    onChange={(e) => handleApplicationStatusChange(selectedApplication.id, e.target.value)}
                    className="status-select"
                >
                  <option value="pending">Pending</option>
                  <option value="interview">Interview</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div className="application-detail">
              <h4>Additional Information</h4>
              <div className="detail-group">
                <label>LinkedIn Profile:</label>
                <p>
                  {selectedApplication.linkedin ? (
                      <a href={selectedApplication.linkedin} target="_blank" rel="noopener noreferrer">
                        View Profile
                      </a>
                  ) : 'Not provided'}
                </p>
              </div>
              <div className="detail-group">
                <label>Cover Letter:</label>
                <p className="cover-letter">{selectedApplication.coverLetter || 'Not provided'}</p>
              </div>
            </div>

            <div className="application-detail">
              <h4>Resume/CV</h4>
              <div className="detail-group">
                <button
                    className="btn btn-primary download-resume"
                    onClick={() => handleDownloadResume(selectedApplication.resume)}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setModalType('edit');
    setShowModal(true);
  };

  const Modal = () => {
    if (modalType === 'viewApplication') {
      return <ApplicationModal />;
    }

    const isEdit = modalType === 'edit';
    const initialData = isEdit ? selectedEmployee : INITIAL_FORM_STATE;

    return (
        <EmployeeForm
            isEdit={isEdit}
            initialData={initialData}
            onSubmit={isEdit ? handleEditEmployee : handleAddEmployee}
            onClose={() => {
              setShowModal(false);
              setSelectedEmployee(null);
            }}
        />
    );
  };

  return (
      <div className="admin-dashboard">
        {showModal && <Modal />}

        <div className="admin-sidebar">
          <h2>HR Admin Panel</h2>
          <nav className="admin-nav">
            <button
                className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('dashboard');
                  navigate('');
                }}
            >
              Управління
            </button>
            <button
                className={`nav-item ${activeTab === 'employees' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('employees');
                  navigate('employees');
                }}
            >
              Працівники
            </button>
            <button
                className={`nav-item ${activeTab === 'applications' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('applications');
                  navigate('applications');
                }}
            >
              Заявки
            </button>
            <button
                className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('reports');
                  navigate('reports');
                }}
            >
              Звіти
            </button>
          </nav>
        </div>

        <div className="admin-content">
          <Routes>
            <Route path="" element={
              <div className="admin-overview">
                <h2>Dashboard Overview</h2>

                <div className="stats-grid">
                  <div className="stat-card">
                    <h3>Total Employees</h3>
                    <div className="stat-value">{stats.totalEmployees}</div>
                  </div>
                  <div className="stat-card">
                    <h3>Open Positions</h3>
                    <div className="stat-value">{stats.openPositions}</div>
                  </div>
                  <div className="stat-card">
                    <h3>Pending Applications</h3>
                    <div className="stat-value">{stats.pendingApplications}</div>
                  </div>
                  <div className="stat-card">
                    <h3>Upcoming Interviews</h3>
                    <div className="stat-value">{stats.upcomingInterviews}</div>
                  </div>
                </div>

                <div className="recent-applications">
                  <h3>Recent Applications</h3>
                  <div className="applications-list">
                    {applications.slice(0, 5).map(app => (
                        <div key={app.id} className="application-item">
                          <div className="application-info">
                            <h4>{app.name}</h4>
                            <p>{app.position}</p>
                            <span className="application-date">
                          {new Date(app.date).toLocaleDateString()}
                        </span>
                          </div>
                          <div className="application-actions">
                        <span className={`status-badge ${app.status}`}>
                          {app.status}
                        </span>
                            <select
                                value={app.status}
                                onChange={(e) => handleApplicationStatusChange(app.id, e.target.value)}
                                className="status-select"
                            >
                              <option value="pending">Pending</option>
                              <option value="interview">Interview</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            } />

            <Route path="employees" element={
              <div className="employees-management">
                <div className="section-header">
                  <h2>Employees Management</h2>
                  <button
                      className="button"
                      onClick={() => {
                        setModalType('add');
                        setShowModal(true);
                      }}
                  >
                    Add Employee
                  </button>
                </div>

                <div className="employees-table">
                  <table>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Department</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                          <td>{employee.name}</td>
                          <td>{employee.position}</td>
                          <td>{employee.department}</td>
                          <td>{employee.email}</td>
                          <td>
                          <span className={`status-badge ${employee.status}`}>
                            {employee.status}
                          </span>
                          </td>
                          <td>
                            <div className="table-actions">
                              <button
                                  className="btn btn-secondary btn-sm"
                                  onClick={() => handleEditClick(employee)}
                              >
                                Edit
                              </button>
                              <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDeleteEmployee(employee.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            } />

            <Route path="applications" element={
              <div className="applications-management">
                <h2>Applications Management</h2>

                <div className="applications-filters">
                  <input
                      type="text"
                      placeholder="Search applications..."
                      className="search-input"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <select
                      className="filter-select"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">Всі статуси</option>
                    <option value="pending">Очікує</option>
                    <option value="interview">Інтерв'ю</option>
                    <option value="accepted">Прийнято</option>
                    <option value="rejected">Відхилено</option>
                  </select>
                </div>

                <div className="applications-grid">
                  {filteredApplications.map(app => (
                      <div key={app.id} className="application-card">
                        <div className="application-header">
                          <h3>{app.name}</h3>
                          <span className={`status-badge ${app.status}`}>
                        {app.status}
                      </span>
                        </div>
                        <div className="application-body">
                          <p><strong>Position:</strong> {app.position}</p>
                          <p><strong>Applied:</strong> {new Date(app.date).toLocaleDateString()}</p>
                          <p><strong>Email:</strong> {app.email}</p>
                        </div>
                        <div className="application-actions">
                          <div className="action-buttons">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleViewApplication(app)}
                            >
                              View Details
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => handleDownloadResume(app.resume)}
                            >
                              Download Resume
                            </button>
                          </div>
                          <div className="status-actions">
                            <select
                                value={app.status}
                                onChange={(e) => handleApplicationStatusChange(app.id, e.target.value)}
                                className="status-select"
                            >
                              <option value="pending">Pending</option>
                              <option value="interview">Interview</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteApplication(app.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            } />

            <Route path="reports" element={
              <div className="reports">
                <h2>HR Reports</h2>

                <div className="reports-grid">
                  <div className="report-card">
                    <h3>Hiring Statistics</h3>
                    <div className="report-content">
                      <p>Total Hires (2024): 45</p>
                      <p>Average Time to Hire: 25 days</p>
                      <p>Acceptance Rate: 68%</p>
                    </div>
                    <div className="report-actions">
                      <button className="btn btn-primary">Export PDF</button>
                    </div>
                  </div>

                  <div className="report-card">
                    <h3>Employee Turnover</h3>
                    <div className="report-content">
                      <p>Turnover Rate: 12%</p>
                      <p>Voluntary Leaves: 8</p>
                      <p>Involuntary Leaves: 3</p>
                    </div>
                    <div className="report-actions">
                      <button className="btn btn-primary">Export PDF</button>
                    </div>
                  </div>

                  <div className="report-card">
                    <h3>Department Analytics</h3>
                    <div className="report-content">
                      <p>Largest Department: Engineering (45)</p>
                      <p>Fastest Growing: Product (↑15%)</p>
                      <p>Open Positions by Dept: 8</p>
                    </div>
                    <div className="report-actions">
                      <button className="btn btn-primary">Export PDF</button>
                    </div>
                  </div>

                  <div className="report-card">
                    <h3>Training Completion</h3>
                    <div className="report-content">
                      <p>Completed Training: 92%</p>
                      <p>In Progress: 5%</p>
                      <p>Not Started: 3%</p>
                    </div>
                    <div className="report-actions">
                      <button className="btn btn-primary">Export PDF</button>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
  );
};

export default AdminDashboard;
