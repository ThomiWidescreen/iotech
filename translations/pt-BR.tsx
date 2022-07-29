import Head from "next/head";
import Template from "../components/Template";

const textsInfos = {
  aboutTextInfo: {
    about: "Sobre nós",
    p1: "Em nossa sociedade moderna, tudo está conectado: de computadores a carros, telefones, casas e todos os dispositivos eletrônicos existentes. Todos esses objetos separados estão vinculados por meio da Internet através de uma tecnologia mais inteligente capaz de tornar a vida mais rápida.",
    p2: "Somos uma empresa focada no desenvolvimento de aplicações móveis, especialmente pensadas para os empreendedores interessados ​​em fazer crescer o seu negócio através da inovação tecnológica. A nossa empresa procura desenvolver um software personalizado que se adapte às necessidades dos nossos clientes e as suas necessidades.",
    p3: "Fornecemos inteligência e visibilidade de rede, em tempo real, com monitoramento contínuo do comportamento do dispositivo. Trabalhamos com desenvolvimento de software seguro e confiável para o seu negócio.",
    p4: "Terceirize os serviços da IOTech para suas necessidades de desenvolvimento de software e comece a viver a experiência de poder controlar confortavelmente seus serviços de negócios remotamente.",
  },
  footerTextInfo: {
    messageButton: "Enviar mesajem",
    message: "Mesajem",
    send: "Enviar",
    affair: "Tema",
  },
  navBarTextInfo: {
    about: "Sobre nós",
    projects: "Proyetos",
    technologies: "Tecnologias",
  },
  presentationTextInfo: {
    welcomeIOTech: "Bem vindo ao IOTech",
    welcomeFuture: "Bem vindo ao futuro",
    seeMore: "Ver mais",
    contact: "Contato",
    slogan: "Oferecemos soluções de software e automação sob medida.",
  },
  proyectsTextInfo: {
    projects: "Proyetos",
    seeMore: "Ver mais",
    hidrotecDescription:
      "O Hidrotec Controller permite monitorar e ajustar todos os equipamentos da piscina e controlá-los utilizando o App",
    hidrotectFeatures: [
      "Control remoto de temperatura y configuración de la piscina.",
      "Visualización de la temperatura meteorológica en tiempo real.",
      "Control automático y manual de la temperatura del agua.",
      "Control de la bomba desde la aplicación móvil.",
      "Control remoto de luces LED del dispositivo móvil.",
    ],
    tempControllerDescription:
      "O Temp Controller é ideal para aquelas pessoas que desejam um salto na qualidade de seu serviço e um controle mais preciso da temperatura de sua câmara frigorífica.",
    tempControllerFeatures: [
      "Controlador de temperatura por minuto, hora, dia.",
      "Indicador de temperatura dentro da câmara frigorífica.",
      "Automação de refrigeração.",
      "Indicador de consumo elétrico e baixa pressão.",
      "Ligar/Desligar a câmara de refrigerante a partir do aplicativo móvel.",
      "Alarme de temperatura de acordo com sua configuração.",
    ],
  },
  technologiesTextInfo: {
    techonologies: "Tecnologias",
    description: "o que usamos para desenvolver",
  },
};

const Pt = () => {
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

export default Pt;
