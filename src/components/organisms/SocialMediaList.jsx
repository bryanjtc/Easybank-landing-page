import React from "react";
import SocialMediaLink from "../molecules/SocialMediaLink.jsx";
import "../../styles/socialMediaList.css";

class NavList extends React.Component {
  render() {
    return (
      <ul className="social_medias">
        {this.props.SocialMediaLinks.map((link) => {
          return (
            <li key={link.ID}>
              <SocialMediaLink link={link} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavList;
