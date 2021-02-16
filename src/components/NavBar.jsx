import React from "react";
import "./styles/NavBar.css";
import InviteButton from "./InviteButton.jsx";
import Logo from "../images/logo.svg";
import OpenMenuIcon from "../images/icon-hamburger.svg";
import CloseMenuIcon from "../images/icon-close.svg";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }
  render() {
    if (this.state.opened) {
      return (
        <section class="navbar_container">
          <div class="navbar">
            <div class="navbar_logo_container">
              <img class="navbar_logo" src={Logo} alt="Logo" />
              <img
                src={CloseMenuIcon}
                alt="cerrar menu"
                class="navbar_icon"
                id="close-menu-icon"
                onClick={() => this.setState({ opened: false })}
              />
            </div>
            <div class="navbar_menu">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Blog</a>
              <a href="/">Carrers</a>
            </div>
            <div class="navbar_invite_button">
              <InviteButton />
            </div>
          </div>
        </section>
      );
    }

    return (
      <section class="navbar_container">
        <div class="navbar">
          <div class="navbar_logo_container">
            <img class="navbar_logo" src={Logo} alt="Logo" />
            <img
              src={OpenMenuIcon}
              alt="abrir menu"
              class="navbar_icon"
              id="open-menu-icon"
              onClick={() => this.setState({ opened: true })}
            />
          </div>
          <div class="navbar_menu_container">
            <div class="navbar_menu">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Blog</a>
              <a href="/">Carrers</a>
            </div>
          </div>
          <div class="navbar_invite_button">
            <InviteButton />
          </div>
        </div>
      </section>
    );
  }
}

export default NavBar;
