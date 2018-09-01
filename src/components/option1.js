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
            title="Albums - React Native"
            picture1={require("../assets/albums1.png")}
            picture2={require("../assets/albums2.png")}
            text="An app showing the top albums from an albums server. Made using React Native"
            logo={require("../assets/reactnative.png")}
            link="https://github.com/mhallxyz/albums"/>
            <div className="divider"></div>
          <Showcase
            title="SecureNotes - React Native"
            picture1={require("../assets/securenotes1.jpg")}
            picture2={require("../assets/securenotes2.jpg")}
            text="Encrypted locally stored notes app with password authentication. Made with React Native."
            logo={require("../assets/google-play-badge.png")}
            link="https://play.google.com/store/apps/details?id=xyz.mhall.securenotes"/>
            <div className="divider"></div>
          <Showcase
            title="mhallxyz - Android/React.JS"
            picture1={require("../assets/mhallxyz1.png")}
            picture2={require("../assets/mhallxyz3.png")}
            text="The mhallxyz app. What's new and current, projects and new apps."
            logo={require("../assets/google-play-badge.png")}
            link="https://play.google.com/store/apps/details?id=xyz.mhall.mhallxyz"/>
            <div className="divider"></div>
          <Showcase
            title="React Video Player - React.JS"
            picture1={require("../assets/videoplayer1.png")}
            picture2={require("../assets/videoplayer2.PNG")}
            text="A React based video player that uses the YouTube API."
            logo={require("../assets/reactnative.png")}
            link="https://mhall-video-player.herokuapp.com/"/>
            <div className="divider"></div>
          <Showcase
            title="MHall.xyz - React.JS"
            picture1={require("../assets/mhallweb1.png")}
            picture2={require("../assets/mhallweb2.PNG")}
            text="This website has been made in React and hosted on Heroku using a BuildPack."
            logo={require("../assets/reactnative.png")}
            link="http://mhall.xyz/"/>
            <hr className="divider"></hr>
          <Showcase
            title="React Weather - React.JS"
            picture1={require("../assets/reactweather1.png")}
            picture2={require("../assets/reactweather2.png")}
            text="A 5 day weather trend app that uses an the OpenWeatherMap API."
            logo={require("../assets/reactnative.png")}
            link="https://mhall-weather.herokuapp.com/"/>
            <hr className="divider"></hr>
          <Showcase
            title="React Stopwatch - React.JS"
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
