import React from "react";

export default function Presentation() {
  return (
    <section className="py-10">
      <h1 className="text-white text-center text-6xl roboto font-semibold">
        Bem vindo ao IOTech
      </h1>
      <p className="text-white text-center text-xl font-extralight tracking-[.3em] py-2">
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
          href="#about"
          className="text-[#C81D25] border hover:scale-110 transition bg-white  my-2 font-bold p-3 px-4 text-xl rounded-lg max-w-fit"
        >
          Contato
        </a>
      </div>
      <div className="flex justify-between mt-14 mx-44">
        <p className="text-white text-4xl font-extralight text-center w-full h-full my-auto">
          Oferecemos soluções de software e automação sob medida.
        </p>
        <img src="computer.png" className="w-4/6" />
      </div>
    </section>
  );
}
