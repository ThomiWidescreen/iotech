const NavBar = () => {
  return (
    <nav className="flex md:flex-row md:justify-between  flex-col items-center  md:w-3/4 w-5/6 m-auto pt-3">
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
      <div className="links grid grid-cols-3 items-center md:gap-2 gap-1">
        <a
          href="#about"
          className="m-2 text-[5vw] sm:text-[4vw] md:text-2xl text-center hover:scale-110 transition text-white font-light border-b-2 md:border-b-0"
        >
          Sobre nós
        </a>
        <a
          href="#proyects"
          className="m-2 text-[5vw] sm:text-[4vw] md:text-2xl text-center hover:scale-110 transition text-white font-light border-b-2 md:border-b-0"
        >
          Projetos
        </a>
        <a
          href="#technologies"
          className="m-2 text-[5vw] sm:text-[4vw] md:text-2xl  text-center hover:scale-110 transition text-white font-light border-b-2 md:border-b-0"
        >
          Tecnologias
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
