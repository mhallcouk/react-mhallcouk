import React, {Component} from "react";
import SectionHeader from "./section-header";


class Option3 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
}

  render() {
    return(
      <div id="con3" className="content">
        <SectionHeader header="Contact." />
        <div className="content-container">
          <p>Option 3 Selected</p>
        </div>
      </div>
    );
  }

}


export default Option3;
