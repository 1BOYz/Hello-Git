import React from 'react';
import logo from './pic/pic-1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Hello GitHub. | 
          <a href="https://github.com/1FOXz" className="App-link">
            @1FOXz
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
