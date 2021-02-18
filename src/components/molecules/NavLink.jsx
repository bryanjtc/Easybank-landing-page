import React from "react";
import "./styles/NavLink.css";
import Text from "../../atoms/Text.jsx";
import { Link } from "react-router-dom";

class NavLink extends React.Component {
  render() {
    const { LinkSource, TextType, TextValue } = this.props;
    return (
      <Link to={LinkSource}>
        <Text TextType={TextType} TextValue={TextValue} />
      </Link>
    );
  }
}

export default NavLink;
