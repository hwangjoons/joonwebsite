// src/components/Card.tsx
import React from 'react';
import '../css/Card.css';

interface CardProps {
  suit: string;
  rank: string;
}

const Card: React.FC<CardProps> = ({ suit, rank }) => {
  return (
    <div className="card">
      <div className="rank">{rank}</div>
      <div className="suit">{suit}</div>
    </div>
  );
};

export default Card;