import React from "react";
import { MailIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    // <footer className="flex bg-[#0B3954] justify-evenly px-10 pb-20">
    //   <a className="roboto text-7xl hover:scale-110 transition cursor-pointer py-3 select-none my-auto">
    //     <div
    //       className="text-red-600 inline"
    //       style={{
    //         textShadow:
    //           "1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
    //       }}
    //     >
    //       IOT
    //     </div>
    //     <div className="text-white inline">ech</div>
    //   </a>

    //   <div className="my-auto">
    //     <h1 className="text-2xl text-white font-light roboto flex gap-1">
    //       <img src="footer/mail.svg" alt="Icon" className="w-10" />
    //       <p>iotech.develoment@gmail.com</p>
    //     </h1>
    //     <h1 className="text-2xl text-white font-light roboto flex gap-1">
    //       <img src="footer/whatsapp.svg" alt="Icon" className="w-10" />

    //       <p>+55 54 9 9706 9803(BR)</p>
    //     </h1>
    //     <h1 className="text-2xl text-white font-light roboto flex gap-1">
    //       <img src="footer/whatsapp.svg" alt="Icon" className="w-10" />
    //       <p>+54 9 3542 46-1287(AR)</p>
    //     </h1>
    //   </div>
    //   <div className="my-auto">
    //     <button className="text-3xl border-2 border-white text-white px-5 py-3 rounded-md hover:scale-105 transition">
    //       Enviar mensagem
    //     </button>
    //   </div>
    // </footer>
    <footer className="bg-[#0B3954] pb-20">
      <section className="grid md:grid-cols-3 grid-cols-1 md:w-3/4 w-5/6 mx-auto">
        <div className="flex justify-center md:pb-0 pb-10 md:border-r-2">
          <a className="roboto text-6xl hover:scale-110 transition cursor-pointer py-3 select-none">
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
        <div className="flex flex-col justify-center md:pb-0 pb-10 md:border-r-2">
          <div className="text-white flex justify-center items-center gap-1">
            <MailIcon className="w-1/12" />
            <p className="text-xl">iotech.develoment@gmail.com</p>
          </div>
          <div className="text-white flex justify-center items-center gap-1">
            <PhoneIcon className="w-1/12" />
            <p className="text-xl">+55 54 9 9706 9803 (BR)</p>
          </div>
          <div className="text-white flex justify-center items-center gap-1">
            <PhoneIcon className="w-1/12" />
            <p className="text-xl">+54 9 3542 46-1287 (AR)</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="border-2 border-white rounded-lg text-white text-xl font-semibold roboto py-3 px-5 transition hover:scale-110">
            Enviar mensagem
          </button>
        </div>
      </section>
    </footer>
  );
}
