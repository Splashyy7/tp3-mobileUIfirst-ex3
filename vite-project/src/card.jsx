import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '300px',
  margin: '20px',
};

export default Card;
