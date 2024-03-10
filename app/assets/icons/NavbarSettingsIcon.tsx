"use client";

import Image from "next/image";
import SettingsIconSvg from "../../../public/svg/settings-icon.svg";

const NavbarSettingsIcon = () => {
  return (
    <Image
      src={SettingsIconSvg}
      alt="Navbar Settings Icon"
      height={22}
      width={22}
      className="cursor-pointer"
    />
  );
};

export default NavbarSettingsIcon;
