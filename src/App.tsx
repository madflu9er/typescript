import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImplementButton from "./components/ImplementButton";
import SendString from "./components/SendString";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <ImplementButton text="I SEND JSON"></ImplementButton>
          <SendString text="I SEND STRING" />
        </div>
      </header>
    </div>
  );
};

export default App;
