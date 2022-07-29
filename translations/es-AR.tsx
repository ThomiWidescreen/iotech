import Head from "next/head";
import Template from "../components/Template";

const textsInfos = {
  aboutTextInfo: {
    about: "Sobre nosotros",
    p1: "En nuestra sociedad moderna, todo está conectado: desde computadoras hasta automóviles, teléfonos, hogares y todos los dispositivos electrónicos existentes. Todos estos objetos separados están vinculados a través de Internet siendo capaces hacer la vida más rápida.",
    p2: "Somos una empresa enfocada en el desarrollo de aplicaciones móviles, especialmente diseñadas para emprendedores interesados en hacer crecer su negocio a través de la innovación tecnológica. Nuestra empresa busca desarrollar un software personalizado que se adapte a las necesidades de nuestros clientes y sus necesidades.",
    p3: "Proporcionamos inteligencia y visibilidad de red en tiempo real con monitoreo continuo del comportamiento del dispositivo. Trabajamos con un desarrollo de software seguro y confiable para su negocio.",
    p4: "En tercer lugar, los servicios de IOTech para sus necesidades de desarrollo de software y comenzar a vivir la experiencia de poder controlar cómodamente sus servicios comerciales de forma remota.",
  },
  footerTextInfo: {
    messageButton: "Enviar mensaje",
    message: "Mensaje",
    send: "Enviar",
    affair: "Asunto",
  },
  navBarTextInfo: {
    about: "Sobre nosotros",
    projects: "Proyectos",
    technologies: "Tecnologías",
  },
  presentationTextInfo: {
    welcomeIOTech: "Bienvenido a IOTech",
    welcomeFuture: "Bienvenido al futuro",
    seeMore: "Ver más",
    contact: "Contacto",
    slogan: "Ofrecemos soluciones de software y automatización",
  },
  proyectsTextInfo: {
    projects: "Proyectos",
    seeMore: "Ver más",
    hidrotecDescription:
      "Hidrotec Controller permite monitorear y ajustar todos los equipos de la piscina y controlarlos utilizando la aplicación",
    hidrotectFeatures: [
      "Control remoto de la temperatura y configuración de la piscina.",
      "Visualización de la temperatura meteorológica en tiempo real.",
      "Control automático o manual de la temperatura del agua.",
      "Control de la bomba desde la aplicación móvil.",
      "Control remoto de luces LED del dispositivo móvil.",
    ],
    tempControllerDescription:
      "Temp Controller es ideal para aquellas personas que deseen un salto en la calidad de su servicio y un control más preciso de la temperatura de su cámara frigorífica.",
    tempControllerFeatures: [
      "Controlador de temperatura por minuto, hora, día.",
      "Indicador de temperatura dentro de la cámara frigorífica.",
      "Automatización de la refrigeración.",
      "Indicador de consumo eléctrico y baja presión.",
      "Encienda / apague el refrigerante desde la aplicación móvil.",
      "Alarma de temperatura según su configuración.",
    ],
  },
  technologiesTextInfo: {
    techonologies: "Tecnologías",
    description: "Que usamos para desarrollar",
  },
};

const Es = () => {
  return (
    <div>
      <Head>
        <title>IOTech</title>
        <link rel="icon" type="image/x-icon" href="icon.ico" />
        <meta
          name="description"
          content="Empresa de desarrollo de software a medida."
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

export default Es;
