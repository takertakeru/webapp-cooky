"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/app/components/navbar/Navbar";
import Button from "@/app/components/Button";
import DeleteRecipeModal from "@/app/components/atoms/DeleteRecipeModal";

import UtensilsIcon from "@/app/assets/icons/UtensilsIcon";
import StopWatchIcon from "@/app/assets/icons/StopWatchIcon";
import MobileEditGrayIcon from "@/app/assets/icons/MobileEditGrayIcon";

import MobileDeleteRedIcon from "@/app/assets/icons/MobileDeleteRedIcon";
import DesktopEditGrayIcon from "@/app/assets/icons/DesktopEditGrayIcon";
import DesktopDeleteRedIcon from "@/app/assets/icons/DesktopDeleteRedIcon";
import ArrowLeftWhiteIcon from "@/app/assets/icons/ArrowLeftWhiteIcon";

const View = () => {
  const [isDelete, setIsDelete] = useState({ _id: "", name: "" });
  const params = useParams<{ viewId: string }>();

  const [recipe, setRecipe] = useState({
    _id: "",
    name: "",
    numberOfServing: "",
    preparationTime: "",
    ingredients: "",
    procedure: "",
  });

  useEffect(() => {
    fetch(`/api/recipe?id=${params.viewId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setRecipe(res.data[0] || {});
      });
  }, []);

  return (
    <>
      {recipe._id !== "" ? (
        <div className="h-full w-full">
          <Navbar />
          <DeleteRecipeModal _id={isDelete._id} name={isDelete.name} />
          <div className="h-[calc(100%-4rem)] w-full flex justify-center relative">
            <img
              src={`/recipe-images/${recipe._id}.jpg`}
              alt={`/recipe-images/${recipe.name}.jpg`}
              className="w-full object-cover h-[250px] md:h-[300px]"
            />
            <div
              className="h-[250px] md:h-[300px] w-full absolute top-0 left-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.50) 10%, rgba(10,0,0,0) 40%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.50) 90%)",
              }}
            ></div>
            <div className="absolute top-0 left-0 flex flex-col h-full w-full items-center">
              <div className="h-[250px] md:h-[300px] w-full max-w-[1200px] flex flex-col">
                <div className="flex justify-between px-4">
                  <Link
                    href="/dashboard"
                    className="flex items-center pt-4 md:pt-12"
                  >
                    <ArrowLeftWhiteIcon />
                    <Button
                      label="Back to Feed"
                      outline
                      className="text-white text-lg md:text-xl"
                    />
                  </Link>
                  <div className="flex items-end gap-4 md:hidden">
                    <Link href={`/recipe/edit/${recipe._id}`}>
                      <MobileEditGrayIcon />
                    </Link>
                    <a
                      onClick={() => {
                        setIsDelete({ _id: recipe._id, name: recipe.name });
                      }}
                    >
                      <MobileDeleteRedIcon />
                    </a>
                  </div>
                </div>

                <div className="mt-auto px-4">
                  <div className="flex place-content-between pb-2">
                    <div className="font-paytone text-white text-4xl lg:text-6xl md:text-5xl">
                      {recipe.name}
                    </div>
                  </div>
                  <div className="flex font-lexend place-content-between pb-3">
                    <div className="flex gap-7">
                      <div className="flex items-center gap-3">
                        <UtensilsIcon />
                        <label className="text-cooky-yellow">
                          {recipe.numberOfServing} Servings
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <StopWatchIcon />
                        <label className="text-cooky-yellow">
                          {recipe.preparationTime} Minutes
                        </label>
                      </div>
                    </div>

                    <div className="hidden items-end gap-4 md:flex">
                      <Link href={`/recipe/edit/${recipe._id}`}>
                        <DesktopEditGrayIcon />
                      </Link>
                      <a
                        onClick={() => {
                          setIsDelete({ _id: recipe._id, name: recipe.name });
                        }}
                      >
                        <DesktopDeleteRedIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[calc(100%-300px)] w-full flex justify-center">
                <div className="grid md:flex md:gap-1 h-full max-w-[1200px] w-full px-4">
                  <div className="pt-10 md:w-full max-w-[400px]">
                    <label className="font-paytone text-cooky-red text-xl">
                      Ingredients
                    </label>
                    <div
                      className="pt-6 font-lexend"
                      dangerouslySetInnerHTML={{ __html: recipe.ingredients }}
                    />
                  </div>
                  <div className="pt-10 w-full">
                    <label className="font-paytone text-cooky-red text-xl">
                      Procedure
                    </label>
                    <div
                      className="pt-6 font-lexend"
                      dangerouslySetInnerHTML={{ __html: recipe.procedure }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default View;
