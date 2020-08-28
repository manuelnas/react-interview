import React from 'react';
import Body from './Components/Body'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <img src={logo} alt="react" className="logo"/> React Interview - Giphy
      </div>
      <Body/>
    </>
  );
}

export default App;
