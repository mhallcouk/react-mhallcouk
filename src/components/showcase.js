import React, { Component } from "react";

class Showcase extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <div className="row showcase">
          <div className="left-div col-md-6">
            {this.props.picture1}
          </div>
          <div className="right-div col-md-6">
            {this.props.picture2}
          </div>
        </div>
        <div className="row showcase">
          <div className="left-div col-md-6">
            {this.props.text}
          </div>
          <div className="right-div col-md-6">
            {this.props.link}
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
