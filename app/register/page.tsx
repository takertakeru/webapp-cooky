import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

import { authOptions } from "../api/auth/[...nextauth]/route";
import RegisterForm from "../components/forms/RegisterForm";

import CookyRegisterBackground from "../../public/images/register-bg.png";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-screen overflow-hidden">
        <Image
          src={CookyRegisterBackground}
          alt="Cooky Register Background"
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
          <div className="max-w-[720px] w-full flex items-center md:justify-end justify-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
