import React from 'react';

const Service = ({ service }) => {
  const { thumbnail, name, description } = service || {};
  return (
    <div className="service">
      <div className="service-thumbnail">
        <img
          style={{ height: '282px' }}
          src={thumbnail}
          alt={name}
        />
      </div>
      <div className="service-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
