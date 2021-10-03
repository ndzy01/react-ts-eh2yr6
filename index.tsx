import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Button from './src/components/button';

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

render(<App />, document.getElementById('root'));
