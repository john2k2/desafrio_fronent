import Logo from "@/assets/images/logo.svg";
import AvatarImg from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import { useState } from "react";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(
    "hidden font-bold  md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );

  const handlerOpenMenu = () => {
    setIsMenuOpen(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold  md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 z-10"
    );
  };
  const handlerCloseMenu = () => {
    setIsMenuOpen(
      "hidden font-bold  md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };

  return (
    <>
      <header className=" md-p-0 container mx-auto flex h-18 items-center gap-8 p-4 ">
        <button className=" mt-[1px] md:hidden " onClick={handlerOpenMenu}>
          <MenuIcon />
        </button>
        <img
          className=" md: mr-auto mb-1 md:mx-0"
          src={Logo}
          alt="Logo Sneaker"
        />
        <nav className={isMenuOpen}>
          <button className="mb-12 md:hidden" onClick={handlerCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Man" />
          <NavLinkHeader text="Woman" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImg} alt="" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto h-[1px] w-full bg-gray-900 md:block"></span>
    </>
  );
};

export default MainHeader;
