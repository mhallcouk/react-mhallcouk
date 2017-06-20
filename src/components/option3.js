import React, {Component} from "react";
import SectionHeader from "./section-header";
import Social from "./social";


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
          <Social text="LinkedIn" logo={require("../assets/linkedin.png")} link="https://www.linkedin.com/in/mhallxyz/" />
          <Social text="Twitter" logo={require("../assets/twitter.svg")} link="https://twitter.com/mhallxyz" />
          <Social text="GitHub" logo={require("../assets/GitHub.png")} link="https://github.com/mhallxyz" />
        </div>
      </div>
    );
  }

}


export default Option3;
