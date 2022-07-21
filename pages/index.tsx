import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Tecnologies from "../components/Tecnologies";
import Wave from "../components/Wave";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>IOTech</title>
      </Head>
      <header className="bg-[#C81D25]">
        <NavBar />
        <Presentation />
      </header>
      <Wave
        fill="#C81D25"
        d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,154.7C672,139,768,85,864,85.3C960,85,1056,139,1152,144C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        viewBox="0 0 1440 192"
        id="about"
      />
      <About />
      <Wave
        viewBox="0 0 1440 320"
        fill="#087E8B"
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
      <section className="pageBody bg-[#087E8B]">
        <Proyects />
      </section>
      <Wave
        viewBox="0 0 1440 220"
        fill="#087E8B"
        d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,74.7C672,96,768,128,864,122.7C960,117,1056,75,1152,58.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <Tecnologies />
      <Wave
        viewBox="0 0 1440 320"
        fill="#0B3954"
        d="M0,96L80,101.3C160,107,320,117,480,138.7C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <Footer />
    </div>
  );
};

export default Home;
