import React from "react";
import SocialMediaLink from "../molecules/SocialMediaLink.jsx";
import "../../styles/socialMediaList.css";

class NavList extends React.Component {
  render() {
    return (
      <div className="social_medias">
        {this.props.SocialMediaLinks.map((link) => {
          return (
            <li key={link.ID}>
              <SocialMediaLink link={link} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default NavList;
