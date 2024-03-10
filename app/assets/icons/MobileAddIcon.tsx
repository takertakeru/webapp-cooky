"use client";

import Image from "next/image";
import MobileAddSvg from "../../../public/svg/mobile-add-button-icon.svg";

const MobileAddIcon = () => {
  return (
    <Image
      src={MobileAddSvg}
      alt="Mobile Add Icon"
      className="cursor-pointer"
    />
  );
};

export default MobileAddIcon;
