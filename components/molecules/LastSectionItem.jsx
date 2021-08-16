import Text from "../atoms/Text.jsx";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/lastSection/lastSectionItem.module.css";
import React from "react";

class MiddleSection extends React.Component {
  render() {
    const {
      ImageSource,
      LinkSource,
      ImageAlt,
      TextValueAuthor,
      TextValueTitle,
      TextValueDescription,
    } = this.props.item;
    return (
      <div className={styles.last_section_article}>
          <Image
            src={ImageSource}
            alt={ImageAlt}
            className={styles.last_section_image}
          />
        <div className={styles.last_section_article_info}>
          <Text TextType="author" TextValue={TextValueAuthor} />
            <Text TextType="subtitle" TextValue={TextValueTitle} />
          <Text TextType="description" TextValue={TextValueDescription} />
        </div>
      </div>
    );
  }
}
export default MiddleSection;
