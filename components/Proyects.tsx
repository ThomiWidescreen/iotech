import React, { useState } from "react";
import CloseButton from "./micro/CloseButton";

export default function Proyects() {
  const [hidrotecState, setHidrotecState] = useState<boolean>(false);
  return (
    <section className="md:w-3/4 w-5/6 sm:pb-0 py-5 m-auto">
      <h1
        id="proyects"
        className="font-semibold roboto md:text-5xl text-3xl text-center text-white"
      >
        Projetos
      </h1>
      <div className="md:mt-10 mt-3">
        <div className="flex justify-center">
          <img
            src="hidrotec.png"
            className="md:w-1/4 w-1/2  hover:scale-110 transition md:p-0 p-5 object-scale-down"
            alt="Mobile app example."
          />
          <div className="flex flex-col justify-center items-center gap-4 md:gap-10 md:px-8 px-0 w-1/2">
            <img src="hidroteclogo.svg" className="md:w-1/2 w-4/5" alt="" />

            <p className="md:text-[2vw] md:leading-9 text-lg sm:w-3/4 w-full text-center text-white font-light">
              O Hidrotec Controller permite monitorar e ajustar todos os
              equipamentos da piscina e controlá-los utilizando o App
            </p>
            <button
              data-modal-toggle="hidrotec-modal"
              className="md:text-2xl text-xl border-2 md:px-5 md:py-3 px-3 py-1 rounded-lg text-white transition hover:scale-110"
              onClick={() => {
                setHidrotecState((a) => !a);
              }}
            >
              Ver mais
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex flex-col justify-center items-center gap-4 md:gap-10 md:px-8 px-0 w-1/2">
            <div className="flex flex-col justify-center items-center gap-3">
              <img
                src="hidrotecapplogo.jpg"
                className=" md:w-1/5 w-1/4 rounded-xl"
                alt="Mobile app example."
              />

              <h1 className="md:text-5xl text-3xl text-white text-center font-semibold">
                Temp Controller
              </h1>
            </div>
            <p className="md:text-[2vw] md:leading-9 text-lg sm:w-3/4 w-full text-center text-white font-light">
              O Temp Controller é ideal para aquelas pessoas que desejam um
              salto na qualidade de seu serviço e um controle mais preciso da
              temperatura de sua câmara frigorífica.
            </p>
            <button className="md:text-2xl text-xl border-2 md:px-5 md:py-3 px-3 py-1 rounded-lg text-white transition hover:scale-110">
              Ver mais
            </button>
          </div>
          <img
            src="tempcontroller.png"
            className="md:w-1/4 w-1/2 hover:scale-110 transition md:p-0 p-5 object-scale-down"
            alt="Mobile app example."
          />
        </div>
      </div>
      {hidrotecState && (
        <>
          <div
            className="py-12 bg-slate-500 bg-opacity-60 backdrop-blur-sm  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
            id="modal"
          >
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3">
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <button
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                  onClick={() => {
                    setHidrotecState((e) => !e);
                  }}
                >
                  <CloseButton />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
