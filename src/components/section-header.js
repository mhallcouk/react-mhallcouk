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
          <hr className="divider" id="section-divider"></hr>
        </div>
      </div>
    );
  }
}

export default SectionHeader;
