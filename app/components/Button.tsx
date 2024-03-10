"use client";

import { IButton } from "../interface/button";

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  rounded,
  className,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      transition
      hover:opacity-80
      disabled:cursor-not-allowed
      disabled:opacity-70
      font-lexend
      px-4
      ${outline ? "text-cooky-gray-2" : "bg-cooky-red"}
      ${outline ? "border-transparent" : "text-white"}
      ${small ? "py-1" : "py-2"}
      ${small ? "text-xs" : "text-sm"}
      ${small ? "font-extralight" : "font-normal"}
      ${rounded ? "rounded-3xl" : "rounded-none"}
      ${className}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
