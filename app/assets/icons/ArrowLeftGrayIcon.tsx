"use client";

import Image from "next/image";
import ArrowLeftGraySvg from "../../../public/svg/arrow-left-gray-icon.svg";

const ArrowLeftGrayIcon = () => {
  return (
    <Image
      src={ArrowLeftGraySvg}
      alt="Arrow Left Gray Icon"
      height={16}
      width={14}
      className="cursor-pointer"
    />
  );
};

export default ArrowLeftGrayIcon;
