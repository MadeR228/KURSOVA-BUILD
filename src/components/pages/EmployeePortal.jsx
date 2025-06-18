import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './EmployeePortal.css';

const EmployeePortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const employeeData = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
    joinDate: '2023-01-15',
    manager: 'Jane Smith',
    leaveBalance: 15
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Team Meeting',
      date: '2024-03-20',
      time: '10:00 AM'
    },
    {
      id: 2,
      title: 'Performance Review',
      date: '2024-03-25',
      time: '2:00 PM'
    }
  ];

  const documents = [
    {
      id: 1,
      name: 'Employee Handbook',
      type: 'PDF',
      size: '2.5 MB'
    },
    {
      id: 2,
      name: 'Benefits Guide',
      type: 'PDF',
      size: '1.8 MB'
    }
  ];

  const handleLeaveRequest = (e) => {
    e.preventDefault();
    // Handle leave request submission
    alert('Leave request submitted successfully!');
  };

  return (
    <div className="employee-portal">
      <div className="portal-sidebar">
        <div className="employee-info">
          <div className="avatar">
            {employeeData.name.charAt(0)}
          </div>
          <h3>{employeeData.name}</h3>
          <p>{employeeData.position}</p>
        </div>

        <nav className="portal-nav">
          <button
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('dashboard');
              navigate('');
            }}
          >
            Dashboard
          </button>
          <button
            className={`nav-item ${activeTab === 'leave' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('leave');
              navigate('leave');
            }}
          >
            Leave Management
          </button>
          <button
            className={`nav-item ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('documents');
              navigate('documents');
            }}
          >
            Documents
          </button>
          <button
            className={`nav-item ${activeTab === 'training' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('training');
              navigate('training');
            }}
          >
            Training
          </button>
        </nav>
      </div>

      <div className="portal-content">
        <Routes>
          <Route path="" element={
            <div className="dashboard">
              <h2>Welcome Back, {employeeData.name}!</h2>

              <div className="dashboard-grid">
                <div className="dashboard-card">
                  <h3>Employee Details</h3>
                  <div className="details-list">
                    <div className="detail-item">
                      <span>Department:</span>
                      <span>{employeeData.department}</span>
                    </div>
                    <div className="detail-item">
                      <span>Join Date:</span>
                      <span>{employeeData.joinDate}</span>
                    </div>
                    <div className="detail-item">
                      <span>Manager:</span>
                      <span>{employeeData.manager}</span>
                    </div>
                    <div className="detail-item">
                      <span>Leave Balance:</span>
                      <span>{employeeData.leaveBalance} days</span>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card">
                  <h3>Upcoming Events</h3>
                  <div className="events-list">
                    {upcomingEvents.map(event => (
                      <div key={event.id} className="event-item">
                        <div className="event-date">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="event-title">{event.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          } />

          <Route path="leave" element={
            <div className="leave-management">
              <h2>Leave Management</h2>

              <div className="leave-balance-card">
                <h3>Leave Balance</h3>
                <div className="leave-balance">
                  <span>{employeeData.leaveBalance}</span>
                  <span>days</span>
                </div>
              </div>

              <div className="leave-request-form">
                <h3>Request Leave</h3>
                <form onSubmit={handleLeaveRequest}>
                  <div className="form-group">
                    <label>Leave Type</label>
                    <select required>
                      <option value="">Select Leave Type</option>
                      <option value="annual">Annual Leave</option>
                      <option value="sick">Sick Leave</option>
                      <option value="personal">Personal Leave</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Start Date</label>
                    <input type="date" required />
                  </div>

                  <div className="form-group">
                    <label>End Date</label>
                    <input type="date" required />
                  </div>

                  <div className="form-group">
                    <label>Reason</label>
                    <textarea required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit Request</button>
                </form>
              </div>
            </div>
          } />

          <Route path="documents" element={
            <div className="documents">
              <h2>Documents</h2>

              <div className="documents-grid">
                {documents.map(doc => (
                  <div key={doc.id} className="document-card">
                    <div className="document-icon">{doc.type}</div>
                    <div className="document-info">
                      <h3>{doc.name}</h3>
                      <p>{doc.size}</p>
                    </div>
                    <button className="btn btn-secondary">Download</button>
                  </div>
                ))}
              </div>
            </div>
          } />

          <Route path="training" element={
            <div className="training">
              <h2>Training & Development</h2>

              <div className="training-courses">
                <div className="course-card">
                  <h3>Available Courses</h3>
                  <ul>
                    <li>
                      <span>Leadership Skills 101</span>
                      <button className="button">Enroll</button>
                    </li>
                    <li>
                      <span>Communication Workshop</span>
                      <button className="button">Enroll</button>
                    </li>
                    <li>
                      <span>Project Management Basics</span>
                      <button className="button">Enroll</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default EmployeePortal;
