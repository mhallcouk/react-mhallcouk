import React, {Component} from "react";
import SectionHeader from "./section-header";


class Option2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
}

  render() {
    return(
      <div id="con2" className="content">
        <SectionHeader header="Section 2." />
        <div className="content-container">
          <p>Option 2 Selected</p>
        </div>
      </div>
    );
  }

}


export default Option2;
