import React from 'react';
import Card from './card';
import Button from './button';

const App = () => {
  return (
    <div style={appStyle}>
      <Card>
        <h2>Card</h2>
        <Button>Click</Button>
      </Card>
    </div>
  );
};

const appStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};

export default App;
