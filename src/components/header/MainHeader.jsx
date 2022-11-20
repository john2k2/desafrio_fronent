import Logo from "@/assets/images/logo.svg";
import AvatarImg from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import { useState, useContext } from "react";
import { useCartDetail } from "@/components/context/useCartDetail";

import CardDetailsHeader from "@/components/header/CardDetailsHeader";

const MainHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { countTotal } = useContext(useCartDetail);

  const handlerOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handlerCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className="h-18 container relative mx-auto flex items-center gap-8 p-4 md:mx-auto md:border-b-2 md:border-black md:p-4 md:pb-4 ">
        <button className=" mt-[1px] md:hidden " onClick={handlerOpenMenu}>
          <MenuIcon />
        </button>
        <img
          className=" md: mr-auto mb-1 md:mx-0"
          src={Logo}
          alt="Logo Sneaker"
        />
        <nav
          className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu
              ? `absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0  `
              : `hidden`
          }`}
        >
          <button className="mb-12 md:hidden" onClick={handlerCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Man" />
          <NavLinkHeader text="Woman" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4 ">
          <button
            className="relative"
            onClick={() => setIsOpenCart(!isOpenCart)}
          >
            <CartIcon />
            <span className="text-bold absolute top-0 rounded-md bg-Orange px-1 text-xs text-white">
              {countTotal}
            </span>
          </button>
          <img src={AvatarImg} alt="" className="w-10" />
          {isOpenCart && <CardDetailsHeader />}
        </div>
      </header>
      <span className="container mx-auto w-full bg-gray-900 md:block"></span>
    </>
  );
};

export default MainHeader;
