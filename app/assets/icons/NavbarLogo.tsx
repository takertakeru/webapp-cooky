"use client";

import Image from "next/image";
import CookyNavbarLogoSvg from "../../../public/svg/cooky-white.svg";

const NavbarLogo = () => {
  return (
    <Image
      alt="Navbar White Logo"
      src={CookyNavbarLogoSvg}
      height={240}
      width={120}
      className="cursor-pointer"
    />
  );
};

export default NavbarLogo;
