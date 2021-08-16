import Image from "next/image";
import Link from "next/link";
import React from "react";

class SocialMediaLink extends React.Component {
  render() {
    const { LinkSource, ImageSource, ImageAlt } = this.props.link;
    return (
      <Image src={ImageSource} className="img_social_media" alt={ImageAlt} />
    );
  }
}

export default SocialMediaLink;
