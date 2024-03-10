import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateRecipeForm from "@/app/components/forms/RecipeForm";
import Navbar from "@/app/components/navbar/Navbar";
import Button from "@/app/components/Button";

import CreateRecipeBackground from "../../../public/images/recipe-create-bg.png";
import ArrowLeftIcon from "@/app/assets/icons/ArrowLeftGrayIcon";

const RecipeCreate = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  return (
    <>
      <div className="h-full w-full">
        <Navbar />
        <div className="h-[calc(100%-4rem)] w-full relative">
          <div
            className="h-full w-full absolute top-0 left-0 flex justify-center overflow-auto"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 920px, rgba(0,212,255,0) 100%)",
            }}
          >
            <div className="max-w-[1300px] w-full h-full px-6 py-1.5 md:py-1 pt-6 md:pt-20">
              <Link href="/dashboard" className="flex items-center">
                <ArrowLeftIcon />
                <Button label="Back to feed" outline />
              </Link>
              <div className="font-paytone text-cooky-red pt-7 text-3xl md:block hidden pb-7">
                New Recipe
              </div>
              <div>
                <CreateRecipeForm recipe={{}} />
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden">
            <Image
              src={CreateRecipeBackground}
              alt="Create Recipe Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCreate;
