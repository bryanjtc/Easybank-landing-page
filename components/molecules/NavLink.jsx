import Text from "../atoms/Text.jsx";
import Link from "next/link";
import React from "react";

class NavLink extends React.Component {
  render() {
    const { LinkSource, TextValue } = this.props.link;
    return (
      <Link href={LinkSource} passHref>
        <Text TextType={this.props.TextType} TextValue={TextValue} />
      </Link>
    );
  }
}

export default NavLink;
