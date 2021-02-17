import React from "react";
import "./styles/NavBar.css";
import InviteButton from "../atoms/InviteButton.jsx";
import Logo from "../../../images/logo.svg";
import HamburguerIcon from "../../../images/icon-hamburger.svg";
import CloseIcon from "../../../images/icon-close.svg";
import Text from "../atoms/Text.jsx";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }
  render() {
    if (this.state.opened) {
      return (
        <section className="navbar_container">
          <div className="navbar">
            <div className="navbar_logo_container">
              <img src={Logo} className="navbar_logo" alt="Logo" />
              <img
                img
                src={CloseIcon}
                alt="cerrar menu"
                className="navbar_icon"
                onClick={() => this.setState({ opened: false })}
              />
            </div>
            <div className="navbar_menu">
              <a href="/">
                <Text type="subtitle" textValue="Home" />
              </a>
              <a href="/">
                <Text type="subtitle" textValue="About" />
              </a>
              <a href="/">
                <Text type="subtitle" textValue="Contact" />
              </a>
              <a href="/">
                <Text type="subtitle" textValue="Blog" />
              </a>
              <a href="/">
                <Text type="subtitle" textValue="Carrers" />
              </a>
            </div>
            <div className="navbar_invite_button">
              <InviteButton />
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="navbar_container">
        <div className="navbar">
          <div className="navbar_logo_container">
            <img img src={Logo} className="navbar_logo" alt="Logo" />
            <img
              img
              src={HamburguerIcon}
              alt="abrir menu"
              className="navbar_icon"
              onClick={() => this.setState({ opened: true })}
            />
          </div>
          <div className="navbar_menu_container">
            <div className="navbar_menu">
              <a href="/"><Text type="description" textValue="Home" /></a>
              <a href="/"><Text type="description" textValue="About" /></a>
              <a href="/"><Text type="description" textValue="Contact" /></a>
              <a href="/"><Text type="description" textValue="Blog" /></a>
              <a href="/"><Text type="description" textValue="Carrers" /></a>
            </div>
          </div>
          <div className="navbar_invite_button">
            <InviteButton />
          </div>
        </div>
      </section>
    );
  }
}

export default NavBar;
