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
            picture1=""
            picture2=""
            text=""
            logo=""
            link=""/>
        </div>
      </div>
    );
  }

}


export default Option1;
