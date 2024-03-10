"use client";

import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="font-paytone text-xl md:text-3xl pb-3 pt-16">
        Hi, {session?.user?.name}!
      </div>
      <div className="font-lexend text-cooky-red">
        This is your Recipe Collection
      </div>
    </>
  );
};

export default Hero;
