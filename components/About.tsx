import React from "react";

export default function About() {
  return (
    <section className="md:w-3/4 w-5/6 m-auto">
      <div className="flex justify-center">
        <img src="tech.svg" className="w-2/5 p-10 md:block hidden no" />

        <div className="flex flex-col items-center">
          <h1 className="mb-6 mt-6 md:mb-4 md:text-5xl text-3xl text-[#273036] font-semibold roboto">
            Sobre nós
          </h1>

          <p className="md:text-[1.5vw] sm:text-base text-xs font-extralight text-[#273036] md:leading-9 md:text-left text-center roboto">
            Em nossa sociedade moderna, tudo está conectado: de computadores a
            carros, telefones, casas e todos os dispositivos eletrônicos
            existentes. Todos esses objetos separados estão vinculados por meio
            da Internet através de uma tecnologia mais inteligente capaz de
            tornar a vida mais rápida. <br></br> Somos uma empresa focada no
            desenvolvimento de aplicações móveis, especialmente pensadas para os
            empreendedores interessados ​​em fazer crescer o seu negócio através
            da inovação tecnológica. A nossa empresa procura desenvolver um
            software personalizado que se adapte às necessidades dos nossos
            clientes e as suas necessidades.<br></br> Fornecemos inteligência e
            visibilidade de rede, em tempo real, com monitoramento contínuo do
            comportamento do dispositivo. Trabalhamos com desenvolvimento de
            software seguro e confiável para o seu negócio.<br></br> Terceirize
            os serviços da IOTech para suas necessidades de desenvolvimento de
            software e comece a viver a experiência de poder controlar
            confortavelmente seus serviços de negócios remotamente.
          </p>
        </div>
      </div>
    </section>
  );
}
