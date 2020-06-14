import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const subject = props.subject

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I wanna be a front-end developer by learning {subject}
        </p>    
      </header>
    </div>
  );
}

export default App;
