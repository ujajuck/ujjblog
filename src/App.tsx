import React from 'react';
//import logo from './logo.svg';
import Greetings from './Greetings';
//import './App.css';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="UJJ" onClick={onClick} />;
};

export default App;
