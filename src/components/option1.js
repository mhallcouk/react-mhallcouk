import React, {Component} from "react";
import SectionHeader from "./section-header";
import Showcase from "./showcase";


class Option1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
}

  render() {
    return(
      <div className="content">
        <SectionHeader header="Showcase." />
        <div className="container">
          <Showcase
            picture1={require("../assets/reactstopwatch1.png")}
            picture2={require("../assets/reactstopwatch2.png")}
            text="This is a React based stopwatch adapted from a React Native project."
            logo={require("../assets/reactnative.png")}
            link="https://mhall-react-stopwatch.herokuapp.com/"/>
        </div>
      </div>
    );
  }

}


export default Option1;
