import React from 'react';

const Card = ({ title }) => {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default  Card
