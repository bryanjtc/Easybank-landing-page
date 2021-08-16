import SocialMediaLink from "../molecules/SocialMediaLink.jsx";
import styles from "../../styles/socialMediaList.module.css";
import React from "react";

class NavList extends React.Component {
  render() {
    return (
      <ul className={styles.social_medias}>
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
