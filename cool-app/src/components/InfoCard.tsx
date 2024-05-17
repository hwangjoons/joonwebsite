// src/components/InfoCard.tsx
import React from 'react';
import '../css/InfoCard.css';

interface InfoCardProps {
  title: string;
  desc: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, desc }) => {
  return (
    <div className="infoCard">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default InfoCard;