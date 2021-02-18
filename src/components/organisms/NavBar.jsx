import React from "react";
import "../../styles/navBar.css";
import HamburguerIcon from "../../images/icon-hamburger.svg";
import CloseIcon from "../../images/icon-close.svg";
import NavBarItems from "./NavBarItems.jsx";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }
  render() {
    if (this.state.opened) {
      return (
        <section className="navbar_container">
        <NavBarItems
          ImageSource={CloseIcon}
          ImageAlt="Close Icon"
          ImageClickState={() => this.setState({ opened: false })}
          TextType="subtitle"
          MenuType="navbar_menu_open"
        />
        </section>
      );
    }

    return (
      <section className="navbar_container">
      <NavBarItems
        ImageSource={HamburguerIcon}
        ImageAlt="Hamburguer Icon"
        ImageClickState={() => this.setState({ opened: true })}
        TextType="navlink"
        MenuType="navbar_menu_close"
      />
      </section>
    );
  }
}

export default NavBar;
