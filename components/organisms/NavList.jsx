import NavLink from "../molecules/NavLink.jsx";
import React from "react";

class NavList extends React.Component {
  render() {
    return (
      <ul className={this.props.MenuType}>
        {this.props.NavLinks.map((link) => {
          return (
            <li key={link.ID}>
              <NavLink TextType={this.props.TextType} link={link} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavList;
