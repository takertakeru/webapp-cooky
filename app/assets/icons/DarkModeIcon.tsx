"use client";

import Image from "next/image";
import DarkModeSvg from "../../../public/svg/dark-mode-icon.svg";

const DarkModeIcon = () => {
  return (
    <Image src={DarkModeSvg} alt="Dark Mode Icon" height={16} width={16} />
  );
};

export default DarkModeIcon;
