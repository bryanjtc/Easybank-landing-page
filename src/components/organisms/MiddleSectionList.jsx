import React from "react";
import MiddleSectionItem from "../molecules/MiddleSectionItem.jsx";
import "./styles/MiddleSectionList.css";

class MiddleSectionItems extends React.Component {
  render() {
    return (
      <div className="middle_section_content">
        {this.props.MiddleSectionItems.map((item) => {
          return (
            <li key={item.ID}>
              <MiddleSectionItem item={item} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default MiddleSectionItems;
