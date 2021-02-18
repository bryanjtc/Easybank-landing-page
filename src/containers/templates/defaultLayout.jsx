import React from "react";
import Header from "../../components/organisms/Header.jsx";
import Hero from "../../components/organisms/Hero.jsx";
import MiddleSection from "../../components/organisms/MiddleSection.jsx";
import LastSection from "../../components/organisms/LastSection.jsx";
function DefaultLayout() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <MiddleSection />
      <LastSection/>
    </React.Fragment>
  );
}

export default DefaultLayout;
