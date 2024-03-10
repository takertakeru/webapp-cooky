"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";

import YellowRectangleIcon from "../../assets/icons/YellowRectangleIcon";

// TEST DATA
import { OWN_RECIPE, OTHERS_RECIPE } from "@/app/assets/constants/recipe";
import ScrollToTopButton from "../atoms/ScrollToTop";
import MobileAddIcon from "@/app/assets/icons/MobileAddIcon";

const Recipe = () => {
  const router = useRouter();

  const [ownRecipe, setOwnRecipe] = useState([]);
  const [othersRecipe, setOthersRecipe] = useState([]);

  useEffect(() => {
    fetch("/api/recipe")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setOwnRecipe(res.data || []);
      });
    fetch("/api/recipe?others=true")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setOthersRecipe(res.data || []);
      });
  }, []);

  const [isOthersRecipe, setIsOthersRecipe] = useState(false);

  return (
    <>
      <div className="flex w-full pt-10 justify-start md:justify-between">
        <Button
          label="Own Recipes"
          outline={isOthersRecipe === true}
          onClick={() => {
            setIsOthersRecipe(false);
          }}
        />
        <Button
          label="Others' Recipes"
          outline={isOthersRecipe === false}
          onClick={() => {
            setIsOthersRecipe(true);
          }}
        />
        <div className="ml-auto hidden md:flex">
          <Button
            label="New Recipe"
            rounded
            onClick={() => {
              router.push("/recipe/create");
            }}
          />
        </div>
      </div>

      <div className="fixed z-10 bottom-0 right-2 md:hidden">
        <ScrollToTopButton />
        <Link href="/recipe/create">
          <MobileAddIcon />
        </Link>
      </div>

      <div className="pt-10 pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* // TEST DATA */}
        {(isOthersRecipe ? othersRecipe : ownRecipe).map((item: any) => (
          <div key={item.id} className="col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-full">
              <div className="aspect-[16/9] w-full relative overflow-hidden rounded-xl">
                <Image
                  src={`/recipe-images/${item._id}.jpg`}
                  alt={item.name}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition"
                  // Temporary Redirect
                  onClick={() => {
                    router.push(`/recipe/view/${item._id}`);
                  }}
                />
              </div>
            </div>
            <div className="flex gap-1.5 pt-1.5">
              <YellowRectangleIcon />
              <div className="font-lexend font-semibold text-sm md:text-base">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipe;
