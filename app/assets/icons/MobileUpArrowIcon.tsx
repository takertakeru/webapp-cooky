"use client";

import Image from "next/image";
import MobileUpArrowSvg from "../../../public/svg/mobile-up-arrow-icon.svg";

const MobileUpArrowIcon = () => {
  return (
    <Image
      src={MobileUpArrowSvg}
      alt="Mobile Up Arrow Icon"
      className="cursor-pointer"
    />
  );
};

export default MobileUpArrowIcon;
