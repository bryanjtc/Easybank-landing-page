import React from "react";
import LastSectionItem from "../../molecules/LastSectionItem.jsx";
import "../../../styles/lastSection/lastSectionList.css";

class LastSectionList extends React.Component {
  render() {
    return (
      <ul className="last_section_articles">
        {this.props.LastSectionItems.map((item) => {
          return (
            <li key={item.ID}>
              <LastSectionItem item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LastSectionList;
