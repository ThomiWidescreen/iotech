import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Tecnologies from "../components/Tecnologies";
import Wave from "../components/Wave";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>IOTech</title>
        <meta name="description" content="Software development business" />
        <meta name="keywords" content="Development, Web Design, Aplication" />
        <meta name="author" content="IOTech Team" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <header className="bg-[#C81D25]">
        <NavBar />
        <Presentation />
      </header>
      <div className="parallaxBackground">
        <Waves color="#C81D25" inverted={true} />

        <About />
        <Waves color="#087E8B" />
      </div>
      <section className="pageBody bg-[#087E8B]">
        <Proyects />
      </section>
      <Waves color="#087E8B" inverted={true} />
      <Tecnologies />
      <Waves color="#0B3954" />
      <Footer />
    </div>
  );
};

export default Home;
