import React from "react";

export default function About() {
  return (
    <section className="md:w-3/4 w-5/6 m-auto py-7">
      <div className="flex justify-center">
        <div className="flex flex-col items-center md:w-2/3 w-4/5">
          <h1 className="mb-6 mt-6 md:mb-4 md:text-5xl text-3xl text-[#273036] font-semibold roboto">
            Sobre nós
          </h1>
          <div className="lg:text-2xl sm:text-base text-xs font-light text-gray-600 lg:leading-8 text-center ">
            <p className="my-5 text-left">
              Em nossa sociedade moderna, tudo está conectado: de computadores a
              carros, telefones, casas e todos os dispositivos eletrônicos
              existentes. Todos esses objetos separados estão vinculados por
              meio da Internet através de uma tecnologia mais inteligente capaz
              de tornar a vida mais rápida.
            </p>
            <p className="my-5 text-left">
              Somos uma empresa focada no desenvolvimento de aplicações móveis,
              especialmente pensadas para os empreendedores interessados ​​em
              fazer crescer o seu negócio através da inovação tecnológica. A
              nossa empresa procura desenvolver um software personalizado que se
              adapte às necessidades dos nossos clientes e as suas necessidades.
            </p>
            <p className="my-5 text-left">
              Fornecemos inteligência e visibilidade de rede, em tempo real, com
              monitoramento contínuo do comportamento do dispositivo.
              Trabalhamos com desenvolvimento de software seguro e confiável
              para o seu negócio.
            </p>
            <p className="my-5 text-left">
              Terceirize os serviços da IOTech para suas necessidades de
              desenvolvimento de software e comece a viver a experiência de
              poder controlar confortavelmente seus serviços de negócios
              remotamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
