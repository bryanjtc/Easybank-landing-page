import React from "react";
import NavBar from "../../components/organisms/NavBar.jsx";
import Hero from "../../components/organisms/Hero.jsx";
import MiddleSection from "../../components/organisms/MiddleSection.jsx";
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
