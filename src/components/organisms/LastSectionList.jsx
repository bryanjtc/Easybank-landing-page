import React from "react";
import LastSectionItem from "../molecules/LastSectionItem.jsx";
import "../../styles/lastSectionList.css";

class LastSectionList extends React.Component {
  render() {
    return (
      <div className="last_section_articles">
        {this.props.LastSectionItems.map((item) => {
          return (
            <li key={item.ID}>
              <LastSectionItem item={item} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default LastSectionList;
