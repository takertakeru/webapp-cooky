import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

import { authOptions } from "../api/auth/[...nextauth]/route";
import LoginForm from "../components/forms/LoginForm";

import CookyBackground from "../../public/images/login-bg.png";
import SpatulaBackground from "../../public/images/spatula.png";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-screen overflow-hidden">
        <Image
          src={CookyBackground}
          alt="Cooky Login Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-white md:bg-transparent">
        <div
          className="w-full h-full flex justify-start"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 580px, rgba(0,212,255,0) 100%)",
          }}
        >
          <div className="max-w-[720px] w-full flex items-center justify-center relative">
            <div className="h-full w-full absolute top-0 left-0 sm:opacity-0 transition-all grid justify-end pointer-events-none">
              <Image src={SpatulaBackground} alt="Spatula Login Background" />
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
