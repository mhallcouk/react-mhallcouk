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
            <div className="divider"></div>
          <Showcase
            title="MHall.xyz"
            picture1={require("../assets/mhallweb1.png")}
            picture2={require("../assets/mhallweb2.PNG")}
            text="This website has been made in React and hosted on Heroku using a BuildPack."
            logo={require("../assets/reactnative.png")}
            link="http://mhall.xyz/"/>
            <hr className="divider"></hr>
            <Showcase
              title="React Weather"
              picture1={require("../assets/reactweather1.png")}
              picture2={require("../assets/reactweather2.png")}
              text="A 5 day weather trend app that uses an the OpenWeatherMap API."
              logo={require("../assets/reactnative.png")}
              link="https://mhall-weather.herokuapp.com/"/>
              <hr className="divider"></hr>

          <Showcase
            title="React Stopwatch"
            picture1={require("../assets/reactstopwatch1.png")}
            picture2={require("../assets/reactstopwatch2.png")}
            text="A React based stopwatch adapted from a React Native project."
            logo={require("../assets/reactnative.png")}
            link="https://mhall-react-stopwatch.herokuapp.com/"/>
            <hr className="divider"></hr>
        </div>
      </div>
    );
  }

}


export default Option1;
