import React, {Component} from "react";



class Option1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
}

  render() {
    var dropDown = this.state.visible ? <div id="drop-down">
      <p onClick={() => this.handleOptionClick(1)}>Menu Option 1</p>
      <p onClick={() => this.handleOptionClick(2)}>Menu Option 2</p>
      <p onClick={() => this.handleOptionClick(3)}>Menu Option 3</p>
    </div> : null;

    return(
      <div id="content">
        <div id="content-container">
          <p>Option 1 Selected</p>
        </div>
      </div>
    );
  }

}


export default Option1;
