import React, { Component } from 'react';
import './App.css';

import MenuBar from './components/menu-bar';
import Option1 from './components/option1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Option1 />
      </div>
    );
  }
}

export default App;
