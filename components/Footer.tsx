import React from "react";
import { MailIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="bg-[#0B3954] pb-20">
      <section className="grid lg:grid-cols-3 grid-cols-1 md:w-3/4 w-5/6 mx-auto">
        <div className="flex justify-center lg:border-r-2 p-5">
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
        <div className="flex flex-col justify-center lg:border-r-2 p-5">
          <div className="text-white flex justify-center items-center gap-1">
            <MailIcon className="w-1/12" />
            <p className="lg:text-xl sm:text-[2vw] text-[3.5vw]">
              iotech.develoment@gmail.com
            </p>
          </div>
          <div className="text-white flex justify-center items-center gap-1">
            <PhoneIcon className="w-1/12" />
            <p className="lg:text-xl sm:text-[2vw] text-[3.5vw]">
              +55 54 9 9706 9803 (BR)
            </p>
          </div>
          <div className="text-white flex justify-center items-center gap-1">
            <PhoneIcon className="w-1/12" />
            <p className="lg:text-xl sm:text-[2vw] text-[3.5vw]">
              +54 9 3542 46-1287 (AR)
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <button className="border-2 border-white rounded-lg text-white text-xl font-semibold roboto py-3 px-5 transition hover:scale-110">
            Enviar mensagem
          </button>
        </div>
      </section>
    </footer>
  );
}
