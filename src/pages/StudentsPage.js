import React, { useState } from 'react';
import './StudentsPage.css'; // Import the CSS file

function StudentsPage() {
  const [students, setStudents] = useState(['Student 1']);
  const [newStudentName, setNewStudentName] = useState('');

  const addStudent = () => {
    if (newStudentName.trim() !== '') {
      setStudents([...students, newStudentName]);
      setNewStudentName('');
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const updateStudent = (index, newName) => {
    const updatedStudents = [...students];
    updatedStudents[index] = newName;
    setStudents(updatedStudents);
  };

  return (
    <div className="students-page">
      <h2>Students</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <input
              type="text"
              value={student}
              onChange={(e) => updateStudent(index, e.target.value)}
            />
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsPage;
