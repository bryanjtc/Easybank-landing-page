import styles from "../../../styles/header/header.module.css";
import HamburguerIcon from "../../../public/images/icon-hamburger.svg";
import CloseIcon from "../../../public/images/icon-close.svg";
import NavBarItems from "./HeaderItems.jsx";
import React from "react";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }
  render() {
    if (this.state.opened) {
      return (
        <div className={styles.header}>
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
      <div className={styles.header}>
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
