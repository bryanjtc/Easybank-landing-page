import React from "react";
import "./styles/MobileNavBar.css";
import OpenMenuIcon from "../images/icon-hamburger.svg";
import CloseMenuIcon from "../images/icon-close.svg";
import Logo from "../images/logo.svg";
class MobileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  render() {
    if (this.state.opened) {
      return (
          <div className="mobile-container">
            <div className="topnav">
              <img src={Logo} alt="logo" class="logo" />
              <img
                src={CloseMenuIcon}
                alt="cerrar menu"
                class="icon"
                id="close-menu-icon"
                onClick={() => this.setState({ opened: false })}
              />
            </div>
            <div className="navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
          </div>

      );
    }

    return (
      <div>
        <div className="mobile-container">
          <div className="topnav">
            <img src={Logo} alt="logo" class="logo" />
            <img
              src={OpenMenuIcon}
              alt="abrir menu"
              class="icon"
              id="open-menu-icon"
              onClick={() => this.setState({ opened: true })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNavBar;
