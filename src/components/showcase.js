import React, { Component } from "react";

class Showcase extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <div className="row showcase showcase-title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="row showcase">
          <div className="left-div col-sm-6">
            <a href={this.props.link}><img src={this.props.picture1} /></a>
          </div>
          <div className="right-div col-sm-6">
            <a href={this.props.link}><img src={this.props.picture2} /></a>
          </div>
        </div>
        <div className="row showcase">
          <div className="left-div col-sm-6 second-row">
            <p>{this.props.text}</p>
          </div>
          <div className="right-div col-sm-6 second-row">
            <a href={this.props.link}><img src={this.props.logo} /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
