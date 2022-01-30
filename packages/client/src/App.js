import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/Home'
import CustomOptionsPage from './containers/CustomOptions'
import CharacterSheet from './containers/CharacterSheet';
import Clock from './containers/Clock';
import Navigation from './containers/Navigation';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {pageChoice: "Home"};
    this.changePageCharacter = this.changePage.bind(this, "Character");
    this.changePageCustom = this.changePage.bind(this, "Custom");
    this.changePageHome = this.changePage.bind(this, "Home");
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>THE DNDLER</h1>
        </header>
        <div className="App-body">
          {this.returnBody()}
        </div>
      </div>
    );
  }

  changePage(pageChoice)
  {
    switch(pageChoice){
      case("Custom"):
        this.setState({pageChoice: "Custom"});
        break;
      case("Character"):
        this.setState({pageChoice: "Character"});
        break;
      case("Home"):
      default:
        this.setState({pageChoice: "Home"});
        break;
    }
  }

  returnBody()
  {
    switch(this.state.pageChoice){
      case("Custom"):
        return <CustomOptionsPage
          goHome={this.changePageHome}
          goCharacter={this.changePageCharacter}
        />;
      case("Character"):
        return <CharacterSheet
          goHome={this.changePageHome}
          goCustom={this.changePageCustom}
        />;
      case("Home"):
      default:
        return <HomePage
          goHome={this.changePageHome}
          goCharacter={this.changePageCharacter}
          goCustom={this.changePageCustom}
        />;
    }
  }
}

export default App;
