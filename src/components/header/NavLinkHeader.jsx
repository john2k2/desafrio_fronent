const NavLinkHeader = ({ text }) => {
  return (
    <div>
      <a href="#" className="group relative md:py-8 py-1">
        <span>{text}</span>
        <span className="absolute bottom-0 block h-[5px] w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-Orange"></span>
      </a>
    </div>
  );
};

export default NavLinkHeader;
