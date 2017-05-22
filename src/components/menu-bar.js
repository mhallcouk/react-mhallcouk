import React, {Component} from "react";



class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
}

  handleMenuClick() {
    if (this.state.visible){
      this.setState({visible: false});
      console.log(this.state.visible);
    } else {
      this.setState({visible: true});
      console.log(this.state.visible);
    }
  }

  render() {
    var dropDown = this.state.visible ? <div id="drop-down">
      <p>Menu Option 1</p>
      <p>Menu Option 2</p>
      <p>Menu Option 3</p>
    </div> : null;

    return(
      <div id="menu-bar">
        <div id="menu-bar-container">
        <button id="menu-button" onClick={() => this.handleMenuClick()}><img id="menu-logo" src={require('../assets/menu.png')}/></button>
        {dropDown}
        </div>
      </div>
    );
  }

}


export default MenuBar;
