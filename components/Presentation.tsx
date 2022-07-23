import React from "react";

export default function Presentation() {
  return (
    <section className="sm:py-10 py-3 md:w-3/4 w-5/6 m-auto">
      <h1 className="text-white text-center md:text-6xl text-4xl roboto font-semibold">
        Bem vindo ao IOTech
      </h1>
      <p className="text-white text-center md:text-xl text-md font-extralight tracking-[.3em] py-2">
        Bem vindo ao futuro
      </p>
      <div className="flex justify-center gap-3">
        <a
          href="#about"
          className="text-white border hover:scale-110 transition border-white my-2 font-semibold p-3 text-xl rounded-lg max-w-fit"
        >
          Ver mais
        </a>
        <a
          href="#contact"
          className="text-[#C81D25] border hover:scale-110 transition bg-white  my-2 font-bold p-3 px-4 text-xl rounded-lg max-w-fit"
        >
          Contato
        </a>
      </div>
      <div className="flex md:justify-between md:flex-row flex-col-reverse items-center mt-14">
        <p className="text-white md:text-4xl text-2xl font-extralight text-center w-full h-full my-auto">
          Oferecemos soluções de software e automação sob medida.
        </p>
        <img src="computer.png" className="md:w-4/6 w-full" />
      </div>
    </section>
  );
}
