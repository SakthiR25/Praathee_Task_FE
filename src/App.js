import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import StudentsPage from './pages/StudentsPage';
import RegistrationPage from './pages/RegistrationPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
