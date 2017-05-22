import React, { Component } from 'react';
import './App.css';

import MenuBar from './components/menu-bar';
import Option1 from './components/option1';
import Option2 from './components/option2';
import Option3 from './components/option3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOption:  1
    }
  }

  render() {
    var display = 2;
    switch (this.state.displayOption) {
      case 1:
        display = <Option1 />;
        break;
      case 2:
        display = <Option2 />;
        break;
      case 3:
        display = <Option3 />;
        break;
      default:
        display = <Option1 />;
        break;
    }
    return (
      <div className="App">
        <MenuBar />
        {display}
      </div>
    );
  }
}

export default App;
