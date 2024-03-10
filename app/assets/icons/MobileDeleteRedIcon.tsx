"use client";

import Image from "next/image";
import MobileDeleteRedSvg from "../../../public/svg/mobile-delete-red-icon.svg";

const MobileDeleteRedIcon = () => {
  return (
    <Image
      src={MobileDeleteRedSvg}
      alt="Mobile Delete Red Icon"
      className="cursor-pointer"
    />
  );
};

export default MobileDeleteRedIcon;
