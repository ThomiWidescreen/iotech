import React from "react";

export default function Tecnologies() {
  return (
    <section className="md:w-3/4 w-5/6 m-auto py-10">
      <h1 className="text-center roboto font-semibold md:text-5xl text-3xl text-[#273036]">
        Tecnologias
      </h1>
      <p className="text-center font-extralight md:text-2xl text-xl text-gray-600 tracking-widest">
        o que usamos para desenvolver
      </p>
      <div className="grid grid-cols-3 md:flex md:justify-center my-5">
        <img
          src="tecnologies/cpp.svg"
          className="w-full md:w-1/6 hover:scale-110 transition"
          alt="C++"
        />
        <img
          src="tecnologies/firebase.svg"
          className="w-full md:w-1/6 hover:scale-110 transition"
          alt="Firebase"
        />
        <img
          src="tecnologies/flutter.svg"
          className="w-full md:w-1/6 hover:scale-110 transition"
          alt="Flutter"
        />
        <img
          src="tecnologies/html.svg"
          className="w-full md:w-1/6 hover:scale-110 transition"
          alt="HTML5"
        />
        <img
          src="tecnologies/css.svg"
          className="w-full md:w-1/6 hover:scale-110 transition"
          alt="CSS3"
        />
        <img
          src="tecnologies/js.svg"
          className="w-full md:w-1/6 hover:scale-110 transition"
          alt="Javascript"
        />
      </div>
    </section>
  );
}
