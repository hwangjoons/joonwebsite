import React from 'react';
import { useSpring, animated } from 'react-spring';
import Draggable from 'react-draggable';

const DraggablePoster = ({ children }) => {
  const [props, set] = useSpring(() => ({
    transform: 'rotate(0deg)',
    config: { tension: 300, friction: 30 }
  }));

  const handleDrag = (e, { deltaX }) => {
    set({ transform: `rotate(${deltaX / 10}deg)` });
  };

  return (
    <Draggable axis="x" onDrag={handleDrag}>
      <animated.div style={props} className="poster">
        {children}
      </animated.div>
    </Draggable>
  );
};

const ComponentGallery = () => {
  return (
    <div className="gallery">
      {[...Array(5)].map((_, i) => (
        <DraggablePoster key={i}>Poster {i + 1}</DraggablePoster>
      ))}
    </div>
  );
};

export default ComponentGallery;