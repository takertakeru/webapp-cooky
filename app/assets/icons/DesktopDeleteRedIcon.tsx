"use client";

import Image from "next/image";
import DesktopDeleteRedSvg from "../../../public/svg/desktop-delete-red-icon.svg";

const DesktopDeleteRedIcon = () => {
  return (
    <Image
      src={DesktopDeleteRedSvg}
      alt="Desktop Delete Red Icon"
      className="cursor-pointer"
    />
  );
};

export default DesktopDeleteRedIcon;
