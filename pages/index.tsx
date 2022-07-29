import { NextPage } from "next";
import { useRouter } from "next/router";
import En from "../translations/en-US";
import Es from "../translations/es-AR";
import Pt from "../translations/pt-BR";

const Home: NextPage = () => {
  const { locale } = useRouter();
  if (locale === "" || locale === "pt-BR") {
    return <Pt />;
  } else if (locale === "en-US") {
    return <En />;
  } else {
    return <Es />;
  }
};

export default Home;
