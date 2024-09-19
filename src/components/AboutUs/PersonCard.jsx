import React, { useState } from 'react';
import './PersonCard.css';

const PersonCard = ({ image, name, surname, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`person-card${hovered ? " hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={`${name} ${surname}`} className="person-image" />
      {hovered && (
        <div className="person-info">
          <h3>{name} {surname}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default PersonCard;