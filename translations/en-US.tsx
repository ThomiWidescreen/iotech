import Head from "next/head";
import Template from "../components/Template";

const textsInfos = {
  aboutTextInfo: {
    about: "About",
    p1: "In our modern society, everything is connected: from computers to cars, phones, homes, and all existing electronic devices. All these separate objects are linked through the Internet being able to make life faster.",
    p2: "We are a company focused on the development of mobile applications, specially designed for entrepreneurs interested in growing their business through technological innovation. Our company seeks to develop a customized software that adapts to the needs of our customers and their needs.",
    p3: "We provide real-time network intelligence and visibility with continuous monitoring of device behavior. We work with a secure and reliable software development for your business.",
    p4: "Third, IOTech services for your software development needs and start living the experience of being able to comfortably control your business services remotely.",
  },
  footerTextInfo: {
    messageButton: "Send message",
    message: "Message",
    send: "Send",
    affair: "Affair",
  },
  navBarTextInfo: {
    about: "About us",
    projects: "Proyects",
    technologies: "Technologies",
  },
  presentationTextInfo: {
    welcomeIOTech: "Welcome to IOTech",
    welcomeFuture: "Welcome to future",
    seeMore: "See more",
    contact: "Contact",
    slogan: "We offer tailor-made software and automation solutions.",
  },
  proyectsTextInfo: {
    projects: "Proyects",
    seeMore: "See more",
    hidrotecDescription:
      "Hidrotec Controller allows you to monitor and adjust all the equipment in the pool and control them using the App",
    hidrotectFeatures: [
      "Remote control of the temperature and configuration of the pool.",
      "Visualization of the weather temperature in real time.",
      "Automatic or manual control of water temperature.",
      "Pump control from the mobile application.",
      "Remote control of LED lights of the mobile device.",
    ],
    tempControllerDescription:
      "Temp Controller is ideal for those who want a leap in the quality of their service and a more precise control of the temperature of their cold room.",
    tempControllerFeatures: [
      "Temperature controller per minute, hour, day.",
      "Temperature indicator inside the cold room.",
      "Refrigeration automation.",
      "Indicator of electricity consumption and low pressure.",
      "Turn on/off the coolant from the mobile app.",
      "Temperature alarm according to your settings.",
    ],
  },
  technologiesTextInfo: {
    techonologies: "Technologies",
    description: "That we use to develop",
  },
};

const En = () => {
  return (
    <div>
      <Head>
        <title>IOTech</title>
        <link rel="icon" type="image/x-icon" href="icon.ico" />
        <meta
          name="description"
          content="Empresa de desenvolvimento de software."
        />
        <meta name="keywords" content="Development, Web Design, Aplication" />
        <meta name="author" content="IOTech Team" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Template textsInfos={textsInfos} />
    </div>
  );
};

export default En;
