import React from "react";

export default function Proyects() {
  return (
    <section className="mx-48">
      <h1 className="font-semibold roboto text-5xl text-center text-white">
        Projetos
      </h1>
      <div className="mt-10">
        <div className="flex justify-center">
          <img
            src="hidrotec.png"
            className="w-1/6 hover:scale-110 transition"
            alt="Mobile app example."
          />
          <div className="flex flex-col justify-center items-center gap-10 px-8 w-1/2">
            <img src="hidroteclogo.svg" className="w-1/4" alt="" />

            <p className="text-2xl w-1/2 text-center text-white font-light">
              O Hidrotec Controller permite monitorar e ajustar todos os
              equipamentos da piscina e controlá-los utilizando o App
            </p>
            <button className="text-2xl border-2 px-5 py-3 rounded-lg text-white transition hover:scale-110">
              Ver mais
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center gap-10 px-8 w-1/2">
            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="hidrotecapplogo.jpg"
                className=" w-1/6 rounded-xl"
                alt="Mobile app example."
              />

              <h1 className="text-3xl text-white font-semibold">
                Temp Controller
              </h1>
            </div>
            <p className="text-2xl w-1/2 text-center text-white font-light">
              O Temp Controller é ideal para aquelas pessoas que desejam um
              salto na qualidade de seu serviço e um controle mais preciso da
              temperatura de sua câmara frigorífica.
            </p>
            <button className="text-2xl border-2 px-5 py-3 rounded-lg text-white transition hover:scale-110">
              Ver mais
            </button>
          </div>
          <img
            src="tempcontroller.png"
            className="w-1/6 hover:scale-110 transition"
            alt="Mobile app example."
          />
        </div>
      </div>
    </section>
  );
}
