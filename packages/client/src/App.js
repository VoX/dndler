import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomOptionsPage from './containers/CustomOptions'

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>THE DNDLER</h1>
      </header>
      <CustomOptionsPage/>
    </div>
  );
}

export default App;
