import styles from "../../styles/text.module.css";
import React from "react";

class Text extends React.Component {
  render() {
    const { TextType, TextValue } = this.props;
    return <p className={styles[TextType]}>{TextValue}</p>;
  }
}

export default Text;
