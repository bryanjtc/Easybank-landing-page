import React from "react";
import InviteButton from "../atoms/InviteButton.jsx";
import Logo from "../../../images/logo.svg";
import NavLink from "../molecules/NavLink.jsx";

class NavBarItems extends React.Component {
  render() {
    const { ImageSource, ImageAlt, ImageClickState, TextType, menu_type } = this.props;
    return (
      <section className="navbar_container">
        <div className="navbar">
          <div className="navbar_logo_container">
            <img src={Logo} className="navbar_logo" alt="Logo" />
            <img
              src={ImageSource}
              alt={ImageAlt}
              className="navbar_icon"
              onClick={ImageClickState}
            />
          </div>
          <div className="navbar_menu_container" id={menu_type}>
            <div className="navbar_menu">
              <NavLink LinkSource="/" TextType={TextType} TextValue="Home" />
              <NavLink LinkSource="/" TextType={TextType} TextValue="About" />
              <NavLink LinkSource="/" TextType={TextType} TextValue="Contact" />
              <NavLink LinkSource="/" TextType={TextType} TextValue="Blog" />
              <NavLink LinkSource="/" TextType={TextType} TextValue="Carrers" />
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

export default NavBarItems;
