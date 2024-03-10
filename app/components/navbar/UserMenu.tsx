"use client";

import { useState, useCallback } from "react";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";

import NavbarSettingsIcon from "../../assets/icons/NavbarSettingsIcon";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import LogOutIcon from "../../assets/icons/LogOutIcon";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={toggleOpen} className="cursor-pointer">
          <NavbarSettingsIcon />
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-8 w-[144px] overflow-hidden rounded-xl bg-white text-sm shadow-md z-50">
          <div className="flex cursor-pointer flex-col">
            <>
              <div className="flex items-center pl-4 p-1 transition hover:bg-neutral-100">
                <DarkModeIcon />
                <MenuItem onClick={() => {}} label="Dark Mode" />
              </div>
              <div className="px-4">
                <hr />
              </div>
              <div className="flex items-center pl-4 p-1 transition hover:bg-neutral-100">
                <LogOutIcon />
                <MenuItem onClick={() => signOut()} label="Log Out" />
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
