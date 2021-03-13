import React from "react";
import NavLink from "../molecules/NavLink.jsx";

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
