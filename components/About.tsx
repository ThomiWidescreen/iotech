import React from "react";

export default function About({
  textInfo,
}: {
  textInfo: { about: string; p1: string; p2: string; p3: string; p4: string };
}) {
  return (
    <section className="md:w-3/4 w-5/6 m-auto py-7">
      <div className="flex justify-center">
        <div className="flex flex-col items-center md:w-2/3 w-4/5">
          <h1 className="mb-6 mt-6 md:mb-4 md:text-5xl text-3xl text-[#273036] oswald uppercase">
            • {textInfo.about} •
          </h1>
          <div className="lg:text-2xl sm:text-base text-xs font-light text-gray-600 lg:leading-8 text-center ">
            <p className="my-5 text-left">{textInfo.p1}</p>
            <p className="my-5 text-left">{textInfo.p2}</p>
            <p className="my-5 text-left">{textInfo.p3}</p>
            <p className="my-5 text-left">{textInfo.p4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
