import React from "react";
import "../../../index.css";

class Text extends React.Component {
  render() {
    return <p className={this.props.type}>{this.props.textValue}</p>;
  }
}

export default Text;
