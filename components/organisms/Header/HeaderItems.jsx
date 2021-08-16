import InviteButton from "../../atoms/InviteButton.jsx";
import Logo from "../../../public/images/logo.svg";
import NavList from "../NavList.jsx";
import Image from "next/image";
import styles from "../../../styles/header/headerItems.module.css";
import React from "react";

class headerItems extends React.Component {
  NavLinks = {
    data: [
      {
        ID: "3ce93005-941b-4603-884e-21ea250ccc79",
        LinkSource: "/",
        TextValue: "Home",
      },
      {
        ID: "13dd7285-ec91-4ddb-891d-68955513e459",
        LinkSource: "/",
        TextValue: "About",
      },
      {
        ID: "bedea17f-c62d-427d-81ce-7b0e733ac621",
        LinkSource: "/",
        TextValue: "Contact",
      },
      {
        ID: "b9f0b727-5f56-4c3f-bc15-a08a09652273",
        LinkSource: "/",
        TextValue: "Blog",
      },
      {
        ID: "b46d05d3-52e1-40d6-aaad-a46572d15b3d",
        LinkSource: "/",
        TextValue: "Carrers",
      },
    ],
  };
  render() {
    const { ImageSource, ImageAlt, ImageClickState, TextType, MenuType } =
      this.props;
    return (
      <div className={styles.header_items}>
        <div className={styles.header_logo_container}>
          <Image src={Logo} className={styles.header_logo} alt="Logo" />
          <div className={styles.header_icon_container}>
            <Image
              src={ImageSource}
              alt={ImageAlt}
              className={styles.header_icon}
              onClick={ImageClickState}
            />
          </div>
        </div>
        <div className={styles[MenuType]}>
          <NavList
            MenuType={styles.header_menu}
            NavLinks={this.NavLinks.data}
            TextType={TextType}
          />
        </div>
        <div className={styles.header_invite_button}>
          <InviteButton />
        </div>
      </div>
    );
  }
}

export default headerItems;
