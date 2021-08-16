import styles from "../../styles/hero.module.css";
import InviteButton from "../atoms/InviteButton.jsx";
import IntroDesktop from "../../public/images/bg-intro-desktop.svg";
import ImageMockups from "../../public/images/image-mockups.png";
import Text from "../atoms/Text.jsx";
import Image from "next/image";
import React from "react";
class Hero extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.hero_left_column}>
            <Text
              TextType="title"
              TextValue="Next generation digital banking"
            />
            <Text
              TextType="description"
              TextValue="Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more."
            />
            <InviteButton />
          </div>
          <div className={styles.hero_right_column}>
            <Image
              src={ImageMockups}
              alt="Mockups"
              className={styles.intro_mockup}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
