import { MenuIcon } from "../../../../../icons/menu";

function Header() {
  const icon = MenuIcon();
  return (
    <section className="h-[8vh] border-b-slate-900 border-b-2">
      <nav className="navbar h-full w-full px-4 flex justify-between bg-white">
        <div className="w-[40vw] h-full md:w-[20vw] xxl:w-[20vw]">
          <img src="https://i.postimg.cc/3rXJM0MV/Logo-removebg-preview.png" alt="Corporative logo"></img>
        </div>
        <div className="menu--icon bg-transparent flex justify-center items-center">
          {icon}
        </div>
      </nav>
    </section>
  );
}

export { Header };