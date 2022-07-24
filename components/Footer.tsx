import React, { useState } from "react";
import CloseButton from "../components/micro/CloseButton";
import { MailIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";

export default function Footer() {
  const [contactModal, setContactModal] = useState<boolean>(false);

  const toggleContactModal = () => {
    setContactModal((e) => !e);
    document.querySelector("body")!.classList.toggle("scrollLock");
  };
  return (
    <footer className="bg-[#0B3954] pb-20">
      <section className="grid lg:grid-cols-3 grid-cols-1 md:w-4/5 w-5/6 mx-auto gap-3">
        <div className="flex justify-center p-5">
          <a
            href="#home"
            className="roboto text-6xl hover:scale-110 transition cursor-pointer py-3 select-none"
          >
            <div
              className="text-red-600 inline"
              style={{
                textShadow:
                  "1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
              }}
            >
              IOT
            </div>
            <div className="text-white inline">ech</div>
          </a>
        </div>
        <div className="flex flex-col justify-center p-5">
          <div className="text-white flex justify-center items-center gap-1">
            <MailIcon className="w-1/12" />
            <p className="lg:text-[1vw] md:text-[2vw] sm:text-[3vw] text-[4vw]">
              iotech.develoment@gmail.com
            </p>
          </div>
          <div className="text-white flex justify-center items-center gap-1">
            <PhoneIcon className="w-1/12" />
            <p className="lg:text-[1vw] md:text-[2vw] sm:text-[3vw] text-[4vw]">
              +55 54 9 9706 9803 (BR)
            </p>
          </div>
          <div className="text-white flex justify-center items-center gap-1">
            <PhoneIcon className="w-1/12" />
            <p className=" lg:text-[1vw] md:text-[2vw] sm:text-[3vw] text-[4vw]">
              +54 9 3542 46-1287 (AR)
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <button
            className="border-2 border-white rounded-lg text-white text-xl font-semibold roboto py-3 px-5 transition hover:scale-110"
            onClick={toggleContactModal}
          >
            Enviar mensagem
          </button>
        </div>
      </section>
      {contactModal && (
        <>
          <div
            className="py-12 bg-slate-500 bg-opacity-60 backdrop-blur-sm  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
            id="modal"
          >
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3">
              <div className="relative py-8 px-5 md:px-10 bg-[#bfd7ea] shadow-md rounded-xl border border-gray-400">
                <h1 className="lg:text-[2vw] md:text-[3vw] sm:text-[4vw] text-[5.5vw] text-center font-bold">
                  Enviar mesajem
                </h1>
                <form
                  action=""
                  className="flex flex-col items-center gap-5 p-10 w-1/2 mx-auto"
                >
                  <input
                    className="w-full rounded-lg border-2 border-black p-2"
                    type="text"
                    id="affair"
                    placeholder="Asunto"
                  />
                  <input
                    className="w-full rounded-lg border-2 border-black p-2"
                    type="text"
                    id="email"
                    placeholder="E-mail"
                  />
                  <textarea
                    className="w-full rounded-lg border-2 border-black p-2"
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Mensajem"
                  ></textarea>
                  <input
                    className="font-bold text-2xl text-white bg-black py-2 px-5 border-4 border-black rounded-lg cursor-pointer p-2 transition hover:scale-110"
                    type="submit"
                    value="Enviar"
                  />
                </form>
                <button
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                  onClick={toggleContactModal}
                >
                  <CloseButton />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}
