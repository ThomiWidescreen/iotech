const NavBar = () => {
  return (
    <nav className="flex justify-between px-48 pt-3">
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
      <div className="links flex items-center gap-4">
        <a
          href="#about"
          className="m-2 text-2xl hover:scale-110 transition text-white font-light"
        >
          Sobre nós
        </a>
        <a
          href=""
          className="m-2 text-2xl hover:scale-110 transition text-white font-light"
        >
          Projetos
        </a>
        <a
          href=""
          className="m-2 text-2xl hover:scale-110 transition text-white font-light"
        >
          Tecnologias
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
