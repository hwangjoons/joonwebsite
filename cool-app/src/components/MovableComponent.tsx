// src/components/MovableComponent.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/ComponentGallery.css';

const MovableComponent: React.FC = () => {
  const [position, setPosition] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setPosition((prev) => prev + 100);
    } else if (event.key === 'ArrowLeft') {
      setPosition((prev) => prev - 100);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: position }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#3498db',
        borderRadius: '10px',
      }}
    />
  );
};

export default MovableComponent;