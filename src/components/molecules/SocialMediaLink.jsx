import React from "react";
import { Link } from "react-router-dom";

class SocialMediaLink extends React.Component {
  render() {
    const { LinkSource, ImageSource, ImageAlt } = this.props.link;
    return (
      <Link to={LinkSource}>
        <img src={ImageSource} className="img_social_media" alt={ImageAlt}/>
      </Link>
    );
  }
}

export default SocialMediaLink;
