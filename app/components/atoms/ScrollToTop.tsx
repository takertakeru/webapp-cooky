"use client";

import MobileUpArrowIcon from "@/app/assets/icons/MobileUpArrowIcon";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop}>
      <MobileUpArrowIcon />
    </button>
  );
};

export default ScrollToTopButton;
