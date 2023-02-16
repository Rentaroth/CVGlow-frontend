import { MenuIcon } from "../../../../../icons/menu";

function Header() {
  const icon = MenuIcon();
  return (
    <div className=" border-b-slate-900 border-b-2">
      <nav className="navbar h-12 w-full px-4 flex justify-between bg-white">
      <img src="https://i.postimg.cc/3rXJM0MV/Logo-removebg-preview.png" alt="Corporative logo"></img>
        <div className="menu--icon bg-transparent flex justify-center items-center">
          {icon}
        </div>
      </nav>
    </div>
  );
}

export { Header };