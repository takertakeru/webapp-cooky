"use client";

import Link from "next/link";

import UserMenu from "./UserMenu";
import NavbarLogo from "../../assets/icons/NavbarLogo";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-cooky-red shadow-sm py-2.5 h-16 flex justify-center">
        <div className="max-w-[1600px] w-full px-6 py-1.5 md:py-1">
          <div className="flex flex-row items-center justify-between">
            <Link href="/">
              <NavbarLogo />
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
