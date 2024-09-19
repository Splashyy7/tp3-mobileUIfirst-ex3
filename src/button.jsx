import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Button;
