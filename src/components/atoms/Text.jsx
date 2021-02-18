import React from "react";
import "../../styles/text.css"

class Text extends React.Component {
  render() {
    const { TextType, TextValue } = this.props;
    return <p className={TextType}>{TextValue}</p>;
  }
}

export default Text;