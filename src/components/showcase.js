import React, { Component } from "react";

class Showcase extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="row showcase">
        <div className="left-div col-md-6">
          Left
        </div>
        <div className="right-div col-md-6">
          Right
        </div>
      </div>
    );
  }
}

export default Showcase;
