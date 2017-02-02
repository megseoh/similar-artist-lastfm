import React, { Component } from 'react';
import logo from './logo.png';
import ArtistContainer from './containers/similar-artists-container.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Find similar artists to the ones you love.
        </p>
        <ArtistContainer />
      </div>
    );
  }
}

export default App;
