import React from 'react';
import AnimatedButton from '../components/AnimatedButton';
import './HomePage.css'; // Import the CSS file for HomePage

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to the Training Platform</h1>
      <div className="button-group">
        <AnimatedButton text="View Courses" link="/courses" />
        <AnimatedButton text="View Students" link="/students" />
        <AnimatedButton text="Register" link="/register" />
      </div>
    </div>
  );
}

export default HomePage;
