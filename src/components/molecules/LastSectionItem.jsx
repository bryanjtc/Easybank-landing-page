import React from "react";
import Text from "../atoms/Text.jsx";
import { Link } from "react-router-dom";
import "../../styles/lastSectionItem.css";

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
      <section className="last_section_article">
        <Link to={LinkSource}>
          <img
            src={ImageSource}
            alt={ImageAlt}
            className="last_section_image"
          />
        </Link>
        <section className="last_section_article_info">
          <Text TextType="author" TextValue={TextValueAuthor} />
          <Link to={LinkSource}>
            <Text TextType="subtitle" TextValue={TextValueTitle} />
          </Link>
          <Text TextType="description" TextValue={TextValueDescription} />
        </section>
      </section>
    );
  }
}
export default MiddleSection;
