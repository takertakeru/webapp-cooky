"use client";

import Image from "next/image";
import CookyLogoSvg from "../../../public/svg/cooky.svg";

const Logo = () => {
  return <Image src={CookyLogoSvg} alt="Cooky Logo Red" className="h-full" />;
};

export default Logo;
