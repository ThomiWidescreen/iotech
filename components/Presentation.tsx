import React from "react";
import Image from "next/image";
import ComputerPic from "../public/computer.webp";

export default function Presentation({
  textInfo,
}: {
  textInfo: {
    welcomeIOTech: string;
    welcomeFuture: string;
    seeMore: string;
    contact: string;
    slogan: string;
  };
}) {
  return (
    <section className="sm:py-20 py-3 md:w-3/4 w-5/6 m-auto">
      <h1 className="text-white text-center md:text-6xl text-4xl roboto font-semibold">
        {textInfo.welcomeIOTech}
      </h1>
      <p className="text-white text-center md:text-xl text-md font-extralight tracking-[.4em] py-2">
        {textInfo.welcomeFuture}
      </p>
      <div className="flex justify-center gap-3">
        <a
          href="#about"
          className="text-white border hover:scale-110 transition border-white my-2 font-semibold p-3 text-xl rounded-lg max-w-fit"
        >
          {textInfo.seeMore}
        </a>
        <a
          href="#contact"
          className="text-[#C81D25] border hover:scale-110 transition bg-white  my-2 font-bold p-3 px-4 text-xl rounded-lg max-w-fit"
        >
          {textInfo.contact}
        </a>
      </div>
      <div className="flex md:justify-between md:flex-row flex-col-reverse items-center mt-14">
        <p className="text-white md:text-[2.5vw] md:leading-[2.5vw] text-2xl font-extralight text-center w-full h-full my-auto">
          {textInfo.slogan}
        </p>
        <div className="md:w-[200%] w-full">
          <Image src={ComputerPic} alt="Computer" layout="responsive" />
        </div>
      </div>
    </section>
  );
}
