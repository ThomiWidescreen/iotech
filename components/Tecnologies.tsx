import React from "react";

export default function Tecnologies() {
  return (
    <section>
      <h1 className="text-center roboto font-semibold text-5xl">Tecnologias</h1>
      <p className="text-center font-extralight text-lg">
        o que usamos para desenvolver
      </p>
      <div className="flex justify-center my-[2%]">
        <img
          src="tecnologies/cpp.svg"
          className="w-1/12 hover:scale-110 transition"
          alt="C++"
        />
        <img
          src="tecnologies/firebase.svg"
          className="w-1/12 hover:scale-110 transition"
          alt="Firebase"
        />
        <img
          src="tecnologies/flutter.svg"
          className="w-1/12 hover:scale-110 transition"
          alt="Flutter"
        />
        <img
          src="tecnologies/html.svg"
          className="w-1/12 hover:scale-110 transition"
          alt="HTML5"
        />
        <img
          src="tecnologies/css.svg"
          className="w-1/12 hover:scale-110 transition"
          alt="CSS3"
        />
        <img
          src="tecnologies/js.svg"
          className="w-1/12 hover:scale-110 transition"
          alt="Javascript"
        />
      </div>
    </section>
  );
}
