import LastSectionItem from "../../molecules/LastSectionItem.jsx";
import styles from "../../../styles/lastSection/lastSectionList.module.css";
import React from "react";

class LastSectionList extends React.Component {
  render() {
    return (
      <ul className={styles.last_section_articles}>
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
