import { useState } from "react";
import { useRouter } from "next/router";

const NavBar = ({
  textInfo,
}: {
  textInfo: {
    about: string;
    projects: string;
    technologies: string;
  };
}) => {
  const router = useRouter();
  return (
    <div className="pt-5">
      <select
        className="w-fit lg:hidden block ml-[70vw]"
        value={router.locale}
        onChange={(e) => {
          const locale = e.target.value;
          router.push("/", "/", { locale });
        }}
        name="select"
      >
        <option value="es-AR">Español</option>
        <option value="pt-BR">Português</option>
        <option value="en-US">English</option>
      </select>
      <nav className="flex md:flex-row md:justify-between  flex-col items-center  md:w-3/4 w-5/6 m-auto">
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
        <div className="links grid lg:grid-cols-4 grid-cols-3 items-center md:gap-2 gap-1">
          <a
            href="#about"
            className="m-2 text-[5vw] sm:text-[4vw] md:text-2xl text-center hover:scale-110 transition text-white font-light border-b-2 md:border-b-0"
          >
            {textInfo.about}
          </a>
          <a
            href="#proyects"
            className="m-2 text-[5vw] sm:text-[4vw] md:text-2xl text-center hover:scale-110 transition text-white font-light border-b-2 md:border-b-0"
          >
            {textInfo.projects}
          </a>
          <a
            href="#technologies"
            className="m-2 text-[5vw] sm:text-[4vw] md:text-2xl  text-center hover:scale-110 transition text-white font-light border-b-2 md:border-b-0"
          >
            {textInfo.technologies}
          </a>
          <select
            className="w-fit lg:block hidden"
            value={router.locale}
            onChange={(e) => {
              const locale = e.target.value;
              router.push("/", "/", { locale });
            }}
            name="select"
          >
            <option value="es-AR">Español</option>
            <option value="pt-BR">Português</option>
            <option value="en-US">English</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
