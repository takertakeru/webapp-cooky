"use client";

// TEST PAGE FOR TESTING UI DATA
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/navbar/Navbar";
import Button from "../components/Button";
import DeleteRecipeModal from "../components/atoms/DeleteRecipeModal";

import useDeleteModal from "../hooks/useDeleteModal";

import RecipeViewSvgBackground from "../../public/svg/recipe-view-sample.svg";

import UtensilsIcon from "../assets/icons/UtensilsIcon";
import StopWatchIcon from "../assets/icons/StopWatchIcon";
import MobileEditGrayIcon from "../assets/icons/MobileEditGrayIcon";
import MobileDeleteRedIcon from "../assets/icons/MobileDeleteRedIcon";
import DesktopEditGrayIcon from "../assets/icons/DesktopEditGrayIcon";
import DesktopDeleteRedIcon from "../assets/icons/DesktopDeleteRedIcon";
import ArrowLeftWhiteIcon from "../assets/icons/ArrowLeftWhiteIcon";

// TEST DATA
import { INGREDIENTS } from "../assets/constants/recipe-content";
import { PROCEDURE } from "../assets/constants/recipe-content";

const RecipeSample = () => {
  const deleteModal = useDeleteModal();

  return (
    <div className="h-full w-full">
      <Navbar />
      <DeleteRecipeModal />
      <div className="h-[calc(100%-4rem)] w-full flex justify-center relative">
        <Image
          src={RecipeViewSvgBackground}
          alt="Sample"
          className="w-full object-cover h-[250px] md:h-[300px]"
        />
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
                {/* Temporary links no function yet */}
                <Link href="/recipe/edit">
                  <MobileEditGrayIcon />
                </Link>
                {/* Delete Function Here */}
                <a onClick={deleteModal.onOpen}>
                  <MobileDeleteRedIcon />
                </a>
              </div>
            </div>

            <div className="mt-auto px-4">
              <div className="flex place-content-between pb-2">
                <div className="font-paytone text-white text-4xl lg:text-6xl md:text-5xl">
                  {/* {recipe.name} here if recipe model is done */}
                  Steamed Salmon
                </div>
              </div>
              <div className="flex font-lexend place-content-between pb-3">
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <UtensilsIcon />
                    <label className="text-cooky-yellow">4 Servings</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <StopWatchIcon />
                    <label className="text-cooky-yellow">30 Minutes</label>
                  </div>
                </div>

                <div className="hidden items-end gap-4 md:flex">
                  {/* Temporary links no function yet */}
                  <Link href="/recipe/edit">
                    <DesktopEditGrayIcon />
                  </Link>
                  {/* Delete Function Here */}
                  <a onClick={deleteModal.onOpen}>
                    <DesktopDeleteRedIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[calc(100%-300px)] w-full flex justify-center">
            <div className="grid md:flex md:gap-1 h-full max-w-[1200px] w-full px-4">
              <div className="pt-10 md:w-full">
                <label className="font-paytone text-cooky-red text-xl">
                  Ingredients
                </label>
                <div className="pt-6 font-lexend">
                  {/* TEST DATA */}
                  {INGREDIENTS.map((item) => (
                    <div key={item.id} className="mb-8">
                      <div className="pb-2">{item.title}</div>
                      <ul className="list-disc ml-6">
                        {item.recipe.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-10">
                <label className="font-paytone text-cooky-red text-xl">
                  Procedure
                </label>
                <div className="pt-6 font-lexend">
                  {/* TEST DATA */}
                  {PROCEDURE.map((item) => (
                    <div key={item.id} className="mb-8">
                      <div className="pb-2">{item.title}</div>
                      <ul className="list-disc ml-6">
                        {item.steps.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSample;
