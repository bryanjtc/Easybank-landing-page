import React from "react";
import InviteButton from "../atoms/InviteButton.jsx";
import IconFacebook from "../../images/icon-facebook.svg";
import IconYoutube from "../../images/icon-youtube.svg";
import IconTwitter from "../../images/icon-twitter.svg";
import IconPinterest from "../../images/icon-pinterest.svg";
import IconInstagram from "../../images/icon-instagram.svg";
import SocialMediaList from "./SocialMediaList.jsx";
import NavList from "./NavList.jsx";
import Text from "../atoms/Text.jsx";
import LogoWhite from "../../images/logo-white.svg";
import "../../styles/footer.css";

class Footer extends React.Component {
  SocialMediaLinks = {
    data: [
      {
        ID: "6a7c7a5d-937d-4a22-8305-aacdc4be8695",
        LinkSource: "/",
        ImageSource: IconFacebook,
        ImageAlt: "Facebook",
      },
      {
        ID: "6d95f363-225a-42c9-846c-7528e3f2dbad",
        LinkSource: "/",
        ImageSource: IconYoutube,
        ImageAlt: "Youtube",
      },
      {
        ID: "fc9552f3-3202-4383-80ca-266424bf4484",
        LinkSource: "/",
        ImageSource: IconTwitter,
        ImageAlt: "Twitter",
      },
      {
        ID: "820d09cc-aff2-486e-9319-44cc634e054f",
        LinkSource: "/",
        ImageSource: IconPinterest,
        ImageAlt: "Pinterest",
      },
      {
        ID: "d02e7979-dc99-4cf1-9bf9-6c7aa4b8c864",
        LinkSource: "/",
        ImageSource: IconInstagram,
        ImageAlt: "Instagram",
      },
    ],
  };

  NavLinks1 = {
    data: [
      {
        ID: "7a53f6c9-6141-4f73-8959-00fe16c36cff",
        LinkSource: "/",
        TextValue: "About Us",
      },
      {
        ID: "dfbf07de-d002-48be-b869-854d9f759d6b",
        LinkSource: "/",
        TextValue: "Contact",
      },
      {
        ID: "e27fb468-84ff-4f3c-9aad-81991d31303f",
        LinkSource: "/",
        TextValue: "Blog",
      },
    ],
  };

  NavLinks2 = {
    data: [
      {
        ID: "0d71c681-ee7c-429e-ae6b-514182351cce",
        LinkSource: "/",
        TextValue: "Carrers",
      },
      {
        ID: "586e07ea-25b5-4f7b-ba00-1aa832a8eaa3",
        LinkSource: "/",
        TextValue: "Support",
      },
      {
        ID: "b73dedf6-5401-4d84-84d9-85ebbf7f64b7",
        LinkSource: "/",
        TextValue: "Privacy Policy",
      },
    ],
  };
  render() {
    return (
      <div className="footer">
        <div className="footer_container">
          <div className="footer_container_left">
            <div className="footer_column">
              <div className="footer_column_start">
                <img src={LogoWhite} alt="Logo_White" className="logo_white" />
                <SocialMediaList
                  SocialMediaLinks={this.SocialMediaLinks.data}
                />
              </div>
            </div>
            <div className="footer_column">
              <NavList
                MenuType="footer_options"
                NavLinks={this.NavLinks1.data}
                TextType="navlink_footer"
              />
            </div>
            <div className="footer_column">
              <NavList
                MenuType="footer_options"
                NavLinks={this.NavLinks2.data}
                TextType="navlink_footer"
              />
            </div>
          </div>
          <div className="footer_column">
            <div className="footer_column_last">
              <InviteButton />
              <Text
                TextType="description"
                TextValue="© Easybank. All Rights Reserved"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
