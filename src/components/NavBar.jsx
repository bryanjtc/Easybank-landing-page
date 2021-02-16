import React from "react";
import "./styles/NavBar.css";
import MobileNavBar from "./MobileNavBar.jsx";
import Logo from "../images/logo.svg";
import IconHamburger from "../images/icon-hamburger.svg";
class NavBar extends React.Component {

    render() { 
        return(
            <section class="navbar">
              <MobileNavBar/>
              <nav>
                <div class="easypageimages">
                  <img src={Logo} alt="Logo" />
                </div>
                <label for="toggle"
                  ><img src={IconHamburger} alt="Hamburger Menu"
                /></label>
                <input type="checkbox" id="toggle" />
        
                <div class="menu">
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
                  <a href="/">Blog</a>
                  <a href="/">Carrers</a>
                </div>
        
                <input type="button" class="button" value="Request Invite" />
              </nav>
            </section>);
    }
}

export default NavBar;