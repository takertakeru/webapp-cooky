import localFont from "next/font/local";

const Lexend = localFont({
  src: [
    {
      path: "../assets/fonts/Lexend/Lexend-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lexend/Lexend-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lexend/Lexend-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lexend/Lexend-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lexend/Lexend-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lexend/Lexend-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lexend",
});

const Paytone = localFont({
  src: [{ path: "../assets/fonts/Paytone_One/PaytoneOne-Regular.ttf" }],
  variable: "--font-paytone",
});

export { Lexend, Paytone };
