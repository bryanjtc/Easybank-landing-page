import Text from "../atoms/Text.jsx";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/middleSection/middleSectionItem.module.css";
import React from "react";

class MiddleSection extends React.Component {
  render() {
    const {
      ImageSource,
      LinkSource,
      ImageAlt,
      TextValueTitle,
      TextValueDescription,
    } = this.props.item;
    return (
      <div className={styles.middle_section_content_item}>
        <Image
          src={ImageSource}
          alt={ImageAlt}
          className={styles.middle_section_content_item_image}
        />
        <Text TextType="subtitle" TextValue={TextValueTitle} />
        <Text TextType="description" TextValue={TextValueDescription} />
      </div>
    );
  }
}
export default MiddleSection;
