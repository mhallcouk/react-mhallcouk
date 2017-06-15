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
            title="React Video Player"
            picture1={require("../assets/videoplayer1.png")}
            picture2={require("../assets/videoplayer2.PNG")}
            text="A React based video player that uses the YouTube API."
            logo={require("../assets/reactnative.png")}
            link="https://mhall-video-player.herokuapp.com/"/>
            <hr></hr>
          <Showcase
            title="React Stopwatch"
            picture1={require("../assets/reactstopwatch1.png")}
            picture2={require("../assets/reactstopwatch2.png")}
            text="A React based stopwatch adapted from a React Native project."
            logo={require("../assets/reactnative.png")}
            link="https://mhall-react-stopwatch.herokuapp.com/"/>
            <hr></hr>
        </div>
      </div>
    );
  }

}


export default Option1;
