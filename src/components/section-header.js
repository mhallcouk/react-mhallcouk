import React, { Component } from "react";

class SectionHeader extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12 section-header">
          {this.props.header}
        </div>
      </div>
    );
  }
}

export default SectionHeader;
