import React, { Component } from 'react';
import logo from './logo.svg';
import servicekitty from './servicekitty.jpg';
import './App.css';
import hamb from './Hamburg.png'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="headerLinks">
          <h1 className="App-title">SERVICES</h1>
          <h1 className="App-title">PORTFOLIO</h1>
          <h1 className="App-title">ABOUT</h1>
          <h1 className="App-title">TEAM</h1>
          <h1 className="App-title">CONTACT</h1>
          <div className="hamburgerContainer">
          <img src={hamb} className="hamburger" alt="dropdown" />
          </div>
          </div>
        </header>
        <div className="masthead">
        <h1 className="welcome">Welcome To Our Studio</h1>
        <h1 className="NTMU">ALL CAPS FOR NO REASON</h1>
        <div className="TellMMContainer">
        <p className="TellMM">MORE CAPS</p>
        </div>
        </div>
        <div className="ServicesContainer">
        <h1 className="Services">SERVICES (in caps)</h1>
        <p className="ServicesSubtitle">sampletextandstuff</p>
        <div className="ServicesBody">
          <div className="ServicesContent"><img className="ServicesIcon" src={servicekitty}></img><h1 className="ServicesST">A</h1><p className="ServicesBT">alpha</p></div>
          <div className="ServicesContent"><img className="ServicesIcon" src={servicekitty}></img><h1 className="ServicesST">B</h1><p className="ServicesBT">beta</p></div>
          <div className="ServicesContent"><img className="ServicesIcon" src={servicekitty}></img><h1 className="ServicesST">C</h1><p className="ServicesBT">gamma</p></div>
        </div>
        
        </div>
      </div>
    );
  }
}

export default App;
