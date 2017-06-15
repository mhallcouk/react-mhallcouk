import React, { Component } from "react";

class SectionHeader extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="col-md-12 section-header">
        {this.props.header}
      </div>
    );
  }
}

export default SectionHeader;
