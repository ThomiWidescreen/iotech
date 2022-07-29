import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Presentation from "./Presentation";
import About from "./About";
import Proyects from "./Proyects";
import Tecnologies from "./Tecnologies";
import Waves from "./Waves";
import Footer from "./Footer";

const Template = ({
  textsInfos,
}: {
  textsInfos: {
    aboutTextInfo: {
      about: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
    };
    footerTextInfo: {
      messageButton: string;
      message: string;
      send: string;
      affair: string;
    };
    navBarTextInfo: {
      about: string;
      projects: string;
      technologies: string;
    };
    presentationTextInfo: {
      welcomeIOTech: string;
      welcomeFuture: string;
      seeMore: string;
      contact: string;
      slogan: string;
    };
    proyectsTextInfo: {
      projects: string;
      seeMore: string;
      hidrotecDescription: string;
      hidrotectFeatures: string[];
      tempControllerDescription: string;
      tempControllerFeatures: string[];
    };
    technologiesTextInfo: {
      techonologies: string;
      description: string;
    };
  };
}) => {
  return (
    <div>
      <header className="bg-[#C81D25]">
        <NavBar textInfo={textsInfos.navBarTextInfo} />
        <Presentation textInfo={textsInfos.presentationTextInfo} />
      </header>
      <div className="parallaxBackground">
        <Waves id="about" color="#C81D25" inverted={true} />

        <About textInfo={textsInfos.aboutTextInfo} />
        <Waves color="#087E8B" />
      </div>
      <section className="pageBody bg-[#087E8B]">
        <Proyects textInfo={textsInfos.proyectsTextInfo} />
      </section>
      <Waves id="technologies" color="#087E8B" inverted={true} />
      <Tecnologies textInfo={textsInfos.technologiesTextInfo} />
      <Waves id="contact" color="#0B3954" />
      <Footer textInfo={textsInfos.footerTextInfo} />
    </div>
  );
};

export default Template;
