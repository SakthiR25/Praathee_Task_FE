import React, { useState } from 'react';
import './RegistrationPage.css'; // Import the CSS file

function RegistrationPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    courseName: '',
    optIn: false,
  });
  const [registeredData, setRegisteredData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if studentName and courseName are not empty
    if (!formData.studentName.trim() || !formData.courseName.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    const newData = { ...formData };
    setRegisteredData([...registeredData, newData]);
    setFormData({
      studentName: '',
      courseName: '',
      optIn: false,
    });
  };

  const handleDelete = (index) => {
    const updatedData = [...registeredData];
    updatedData.splice(index, 1);
    setRegisteredData(updatedData);
  };

  return (
    <div className="registration-page">
      <div className="registration-form">
        <h2>Register for a Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseName">Course Name:</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              placeholder="Enter course name"
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="optIn"
              name="optIn"
              checked={formData.optIn}
              onChange={handleChange}
            />
            <label htmlFor="optIn">Opt In</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="registration-data">
        <h2>Registered Details</h2>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course Name</th>
              <th>Opt In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {registeredData.map((data, index) => (
              <tr key={index}>
                <td>{data.studentName}</td>
                <td>{data.courseName}</td>
                <td>{data.optIn ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegistrationPage;
