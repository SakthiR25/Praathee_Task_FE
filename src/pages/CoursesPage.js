import React, { useState } from 'react';
import './CoursesPage.css'; // Make sure to import the CSS file

function CoursesPage() {
  const [courses, setCourses] = useState(['MERN Stack', 'React.js']);
  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = () => {
    if (newCourse.trim() !== '') {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const handleEditCourse = (index, newName) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = newName;
    setCourses(updatedCourses);
  };

  return (
    <div className="courses-page">
      <h2>Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => handleEditCourse(index, prompt('Enter new course name:'))}>
              Edit
            </button>
            <button onClick={() => handleDeleteCourse(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Add new course"
        />
        <button onClick={handleAddCourse}>Add Course</button>
      </div>
    </div>
  );
}

export default CoursesPage;
