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
      displayOption:  <Option1 />
    }
  }

  displayScreen(option) {
    switch (option) {
      case 1:
        this.setState({displayOption:<Option1 />});
        break;
      case 2:
        this.setState({displayOption:<Option2 />});
        break;
      case 3:
        this.setState({displayOption:<Option3 />});
        break;
      default:
        this.setState({displayOption:<Option1 />});
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <MenuBar displayChange={(option) => this.displayScreen(option)} />
        {this.state.displayOption}
      </div>
    );
  }
}

export default App;
