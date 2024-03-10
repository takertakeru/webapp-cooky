"use client";

import Image from "next/image";
import YellowRectangleIconSvg from "../../../public/svg/yellow-rectangle-icon.svg";

const YellowRectangleIcon = () => {
  return (
    <Image
      alt="Yellow Rectangle Icon"
      src={YellowRectangleIconSvg}
      height={20}
      width={4}
      className="cursor-pointer"
    />
  );
};

export default YellowRectangleIcon;
