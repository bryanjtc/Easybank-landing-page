import React from "react";
import "../../../styles/header/header.css";
import HamburguerIcon from "../../../images/icon-hamburger.svg";
import CloseIcon from "../../../images/icon-close.svg";
import NavBarItems from "./HeaderItems.jsx";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }
  render() {
    if (this.state.opened) {
      return (
        <div className="header">
        <NavBarItems
          ImageSource={CloseIcon}
          ImageAlt="Close Icon"
          ImageClickState={() => this.setState({ opened: false })}
          TextType="subtitle"
          MenuType="header_menu_open"
        />
        </div>
      );
    }

    return (
      <div className="header">
      <NavBarItems
        ImageSource={HamburguerIcon}
        ImageAlt="Hamburguer Icon"
        ImageClickState={() => this.setState({ opened: true })}
        TextType="navlink_header"
        MenuType="header_menu_close"
      />
      </div>
    );
  }
}

export default NavBar;
