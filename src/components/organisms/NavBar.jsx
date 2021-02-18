import React from "react";
import "./styles/NavBar.css";
import HamburguerIcon from "../../../images/icon-hamburger.svg";
import CloseIcon from "../../../images/icon-close.svg";
import NavBarItems from "./NavBarItems.jsx"
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }
  render() {
    if (this.state.opened) {
      return (
        <NavBarItems ImageSource={CloseIcon} ImageAlt="Close Icon" ImageClickState={() => this.setState({ opened: false })} TextType="subtitle" menu_type="navbar_menu_open"/>
      );
    }

    return (
      <NavBarItems ImageSource={HamburguerIcon} ImageAlt="Hamburguer Icon" ImageClickState={() => this.setState({ opened: true })} TextType="navlink" menu_type="navbar_menu_close"/>
    );
  }
}

export default NavBar;