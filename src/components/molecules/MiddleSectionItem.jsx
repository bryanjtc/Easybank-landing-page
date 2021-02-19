import React from "react";
import Text from "../atoms/Text.jsx";
import { Link } from "react-router-dom";
import "../../styles/middleSection/middleSectionItem.css"

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
      <section className="middle_section_content_item">
        <Link to={LinkSource}>
          <img src={ImageSource} alt={ImageAlt} />
        </Link>
        <Text TextType="subtitle" TextValue={TextValueTitle} />
        <Text TextType="description" TextValue={TextValueDescription} />
      </section>
    );
  }
}
export default MiddleSection;
