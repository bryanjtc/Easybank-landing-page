import React from "react";
import MiddleSectionItem from "../../molecules/MiddleSectionItem.jsx";
import "../../../styles/middleSection/middleSectionList.css";

class MiddleSectionItems extends React.Component {
  render() {
    return (
      <ul className="middle_section_content">
        {this.props.MiddleSectionItems.map((item) => {
          return (
            <li key={item.ID}>
              <MiddleSectionItem item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default MiddleSectionItems;
