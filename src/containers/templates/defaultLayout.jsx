import React from "react";
import NavBar from "../../components/organisms/NavBar.jsx";
import Hero from "../../components/organisms/Hero.jsx";
import MiddleSection from "../../components/organisms/MiddleSection.jsx";
import LastSection from "../../components/organisms/LastSection.jsx";
function DefaultLayout() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <MiddleSection />
      <LastSection/>
    </React.Fragment>
  );
}

export default DefaultLayout;
