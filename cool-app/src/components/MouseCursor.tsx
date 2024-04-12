import React, { useState, useEffect } from 'react';
import '../css/MouseCursor.css'; // Import your CSS file for styling

const MouseCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);
    return () => window.removeEventListener('mousemove', setFromEvent);
  }, []);

  return (
    <div
      className="mouse-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default MouseCursor;