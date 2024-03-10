"use client";

import Image from "next/image";
import SignOutSvg from "../../../public/svg/sign-out-icon.svg";

const LogOutIcon = () => {
  return <Image src={SignOutSvg} alt="Log Out Icon" height={16} width={16} />;
};

export default LogOutIcon;
