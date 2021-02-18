import React from "react";
import NavBar from "../UI/organisms/NavBar.jsx";
import Hero from "../UI/organisms/Hero.jsx";
import MiddleSection from "../UI/organisms/MiddleSection.jsx";
function DefaultLayout() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <MiddleSection />
    </React.Fragment>
  );
}

export default DefaultLayout;
