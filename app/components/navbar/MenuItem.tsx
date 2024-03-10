"use client";

import { IMenuItem } from "@/app/interface/menu-item";

const MenuItem = ({ onClick, label }: IMenuItem) => {
  return (
    <div onClick={onClick} className="px-4 py-3 font-lexend">
      {label}
    </div>
  );
};

export default MenuItem;
