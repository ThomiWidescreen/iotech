import React from "react";

export default function About() {
  return (
    <section className="px-48">
      <div className="flex justify-center">
        <img src="tech.svg" className="w-2/5 p-10" />

        <div className="flex flex-col items-center">
          <h1 className="mb-6 text-5xl text-[#273036] font-semibold roboto">
            Sobre nós
          </h1>

          <p className="text-2xl font-extralight text-center text-[#273036] leading-9 p-5 roboto">
            Em nossa sociedade moderna, tudo está conectado: de computadores a
            carros, telefones, casas e todos os dispositivos eletrônicos
            existentes. Todos esses objetos separados estão vinculados por meio
            da Internet através de uma tecnologia mais inteligente capaz de
            tornar a vida mais rápida. Somos uma empresa focada no
            desenvolvimento de aplicações móveis, especialmente pensadas para os
            empreendedores interessados ​​em fazer crescer o seu negócio através
            da inovação tecnológica. A nossa empresa procura desenvolver um
            software personalizado que se adapte às necessidades dos nossos
            clientes e as suas necessidades. Fornecemos inteligência e
            visibilidade de rede, em tempo real, com monitoramento contínuo do
            comportamento do dispositivo. Trabalhamos com desenvolvimento de
            software seguro e confiável para o seu negócio. Terceirize os
            serviços da IOTech para suas necessidades de desenvolvimento de
            software e comece a viver a experiência de poder controlar
            confortavelmente seus serviços de negócios remotamente.
          </p>
        </div>
      </div>
    </section>
  );
}
