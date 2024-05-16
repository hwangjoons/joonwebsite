import React from 'react';
import Draggable from 'react-draggable';
import '../css/SliderComponent.css';

const SliderComponent: React.FC = () => {
  const numPosters = 8;
  const radius = 200; // Radius of the circular path
  const arcAngle = Math.PI / 3; // Angle of the arc (60 degrees in radians)
  const arcRadius = 150; // Radius of the arc
  const sliderWidth = 500; // Width of the circular slider

  const posters = Array.from({ length: numPosters }, (_, i) => {
    const angle = ((i / (numPosters - 1)) * arcAngle) - (arcAngle / 2); // Distribute posters evenly along the arc
    const x = arcRadius * Math.cos(angle);
    const y = arcRadius * Math.sin(angle);
    const position: [number, number] = [x, y];
    return (
      <Draggable
        key={i}
        axis="x" // Allow horizontal dragging
        bounds={{ left: -sliderWidth / 2, right: sliderWidth / 2 }}
      >
        <div
          className="poster"
          style={{ transform: `translate(${position[0]}px, ${position[1]}px)` }}
        >
          Poster {i + 1}
        </div>
      </Draggable>
    );
  });

  return (
    <Draggable>
      <div className="slider">
        {posters}
      </div>
    </Draggable>
  );
};

export default SliderComponent;