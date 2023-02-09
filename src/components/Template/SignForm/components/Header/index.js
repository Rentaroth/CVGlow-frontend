import { MenuIcon } from "../../../../../icons/menu";

function Header() {
  const icon = MenuIcon();
  return (
    <section className="w-full h-[10%]">
      <div className="">
      <nav className="navbar h-12 w-full px-4 flex justify-between bg-basic_white">
      <img src="https://i.postimg.cc/3rXJM0MV/Logo-removebg-preview.png" alt="Corporative logo"></img>
        <div className="menu--icon bg-transparent flex justify-center items-center">
          {icon}
        </div>
      </nav>
    </div>
    </section>
  );
}

export { Header };