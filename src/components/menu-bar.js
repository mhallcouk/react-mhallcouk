import React, {Component} from "react";


class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      displayOption: 2
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

  handleOptionClick(option) {
    this.setState({displayOption: option});
    console.log(this.state.displayOption);
  }

  render() {
    var dropDown = this.state.visible ? <div id="drop-down">
      <div className="menu-option top" onClick={() => this.props.displayChange(1) & this.handleMenuClick()}>Showcase</div>
      <div className="menu-option" onClick={() => this.props.displayChange(2) & this.handleMenuClick()}>Projects</div>
      <div className="menu-option bottom" onClick={() => this.props.displayChange(3) & this.handleMenuClick()}>Contact</div>
    </div> : null;

    return(
      <div id="menu-bar">
        <div id="menu-bar-container">
        <button id="menu-button" onClick={() => this.handleMenuClick()}><img id="menu-logo" src={require('../assets/menuwhite.png')}/></button>
        {dropDown}
        </div>
      </div>
    );
  }

}


export default MenuBar;
