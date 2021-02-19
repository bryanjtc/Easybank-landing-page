import React from "react";
import Header from "../../components/organisms/Header/Header.jsx";
import Hero from "../../components/organisms/Hero.jsx";
import MiddleSection from "../../components/organisms/MiddleSection/MiddleSection.jsx";
import LastSection from "../../components/organisms/LastSection/LastSection.jsx";
import Footer from "../../components/organisms/Footer.jsx";
function DefaultLayout() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <MiddleSection />
      <LastSection/>
      <Footer/>
    </React.Fragment>
  );
}

export default DefaultLayout;
