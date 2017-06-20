import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <div className="row showcase social-row">
          <div className="col-sm-6 social" >
            <a href={this.props.link}><p>{this.props.text}</p></a>
          </div>
          <div className="col-sm-6 social" >
            <a href={this.props.link}><img className="social-logo" src={this.props.logo} /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
