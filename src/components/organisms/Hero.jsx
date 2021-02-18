import React from "react";
import "../../styles/hero.css";
import InviteButton from "../atoms/InviteButton.jsx";
import IntroDesktop from "../../images/bg-intro-desktop.svg";
import ImageMockups from "../../images/image-mockups.png";
import Text from "../atoms/Text.jsx";
class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero_container">
          <div className="hero_left_column">
            <Text TextType="title" TextValue="Next generation digital banking" />
            <Text
              TextType="description"
              TextValue="Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more."
            />
            <InviteButton />
          </div>
          <div className="hero_right_column">
            <img src={IntroDesktop} alt="intro_desktop" className="intro_desktop" />
            <img src={ImageMockups} alt="Mockups" className="intro_mockup" />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
