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
    return(
      <div id="menu-bar">
        <button id="menu-button" onClick={() => this.handleMenuClick()}></button>
      </div>
    );
  }

}


export default MenuBar;
