import React, { Component } from "react";
import ToggleSwitch from "./ToggleSwitch";

class TogglesMain extends Component {
    render() {
      return (
        <React.Fragment>

          <ToggleSwitch label="theme" />
        </React.Fragment>
      );
    }
  }
  export default TogglesMain;