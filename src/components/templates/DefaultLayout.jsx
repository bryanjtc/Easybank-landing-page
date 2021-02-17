import React from "react";
import NavBar from "../UI/organisms/NavBar.jsx";
import Hero from "../UI/organisms/Hero.jsx";
function DefaultLayout() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
    </React.Fragment>
  );
}

export default DefaultLayout;
