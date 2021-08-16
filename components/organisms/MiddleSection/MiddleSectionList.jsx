import MiddleSectionItem from "../../molecules/MiddleSectionItem.jsx";
import styles from "../../../styles/middleSection/middleSectionList.module.css";
import React from "react";

class MiddleSectionItems extends React.Component {
  render() {
    return (
      <ul className={styles.middle_section_content}>
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
