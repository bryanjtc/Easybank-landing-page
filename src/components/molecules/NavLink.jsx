import React from "react";
import Text from "../atoms/Text.jsx";
import { Link } from "react-router-dom";

class NavLink extends React.Component {
  render() {
    const { LinkSource, TextValue } = this.props.link;
    return (
      <Link to={LinkSource}>
        <Text TextType={this.props.TextType} TextValue={TextValue} />
      </Link>
    );
  }
}

export default NavLink;
