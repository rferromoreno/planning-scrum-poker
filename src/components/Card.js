import React from 'react';

const Card = ({ value = '', onClick }) => (
  <div className="card" onClick={onClick}>
    {value}
  </div>
);

export default Card;
