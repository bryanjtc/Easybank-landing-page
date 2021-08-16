import Head from "next/head";
import Header from "../components/organisms/Header/Header.jsx";
import Hero from "../components/organisms/Hero.jsx";
import MiddleSection from "../components/organisms/MiddleSection/MiddleSection.jsx";
import LastSection from "../components/organisms/LastSection/LastSection.jsx";
import Footer from "../components/organisms/Footer.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easybank</title>
        <meta
          name="description"
          content="Easybank landing page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <MiddleSection />
      <LastSection />
      <Footer />
    </>
  );
}
