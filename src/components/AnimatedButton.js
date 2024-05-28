import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AnimatedButton({ text, link }) {
  return (
    <Link to={link}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="animated-button"
      >
        {text}
      </motion.button>
    </Link>
  );
}

export default AnimatedButton;
