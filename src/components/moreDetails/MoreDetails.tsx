// src/components/HeroCard.tsx
import React from 'react';
import './MoreDetails.css';
import { MoreDetailProps } from "../../types";

const HeroCard: React.FC<MoreDetailProps> = ({ data }) => {
  return (
    <div className="moreDetails">
      {data.map((item, index) => (
        <div key={index} className="moreDetail">
          <div className="DetailIcon">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="detail">
            <h1>{item.name}</h1>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
