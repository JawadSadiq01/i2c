// src/components/HeroCard.tsx
import React from 'react';
import './HeroCard.css';
import { HeroCardProps } from "../../types";

const HeroCard: React.FC<HeroCardProps> = ({ data }) => {
  return (
    <div className="heroCards">
      {data.map((item, index) => (
        <div key={index} className="heroCard">
          <div className="avatar">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="detail">
            <h1>{item.name}</h1>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
      <div className="skeleton">
        
      </div>
    </div>
  );
};

export default HeroCard;
