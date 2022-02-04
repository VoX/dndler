import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/Home'
import CustomOptionsPage from './containers/CustomOptions'
import CharacterSheet from './containers/CharacterSheet';
import Clock from './containers/Clock';
import Navigation from './containers/Navigation';

const App = () =>
{
  const [curPage, setPage] = useState("Home");
  const [body, setBody] = useState(null);

  const changePage = (pageChoice) =>
  {
    setPage(pageChoice);
  }

  useEffect(() =>
  {
    switch(curPage){
      case("Custom"):
        setBody(<CustomOptionsPage/>);
        break;
      case("Character"):
        setBody(<CharacterSheet/>);
        break;
      case("Home"):
      default:
        setBody(<HomePage/>);
        break;
    }
  }, [curPage]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>THE DNDLER</h1>
      </header>
      <Navigation
        curPage={curPage}
        changePage={changePage}
      />
      <div className="App-body">
        {body}
        <Clock/>
      </div>
    </div>
  )


}

export default App;
