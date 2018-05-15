import React, {Component} from "react";
import SectionHeader from "./section-header";
import Project from "./project";
import { isNull } from "util";


class Option2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
}

  render() {
    return(
      <div id="con2" className="content">
        <SectionHeader header="Projects." />
        <div className="container">
          <Project
            title="German Language"
            picture1={require("../assets/tor.jpg")}
            picture2={require("../assets/architecture-berlin-buildings.jpg")}
            text="A second language is something I have always dreamed of. I am determined to become fluent in a language other than English."
            logo={require("../assets/german-flag-medium.png")}
            />
            <div className="divider"></div>
        </div>
      </div>
    );
  }

}


export default Option2;
