import type { Metadata } from "next";
import { Lexend, Paytone } from "@/utils/customFonts";
import "./globals.css";
import { AuthProvider } from "./Providers";

export const metadata: Metadata = {
  title: "Cooky",
  description: "Recipes from all over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Lexend.variable} ${Paytone.variable}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
