"use client";

import Image from "next/image";
import ArrowWhiteIconSvg from "../../../public/svg/arrow-left-white-icon.svg";

const ArrowLeftWhiteIcon = () => {
  return (
    <Image
      src={ArrowWhiteIconSvg}
      alt="Arrow Left White Icon"
      className="cursor-pointer h-6 w-6 md:h-8 md:w-8"
    />
  );
};

export default ArrowLeftWhiteIcon;
