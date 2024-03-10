"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import CreateRecipeForm from "@/app/components/forms/RecipeForm";
import Navbar from "@/app/components/navbar/Navbar";
import Button from "@/app/components/Button";

import EditRecipeBackground from "../../../../public/images/recipe-edit-bg.png";
import ArrowLeftIcon from "@/app/assets/icons/ArrowLeftGrayIcon";

const Edit = () => {
  const params = useParams<{ editId: string }>();

  const [recipe, setRecipe] = useState({
    _id: "",
    name: "",
    numberOfServing: "",
    preparationTime: "",
    ingredients: "",
    procedure: "",
  });

  useEffect(() => {
    fetch(`/api/recipe?id=${params.editId}`)
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
                  Edit {recipe.name} Recipe
                </div>
                <div>
                  <CreateRecipeForm recipe={recipe} />
                </div>
              </div>
            </div>
            <div className="w-full h-full overflow-hidden">
              <Image
                src={EditRecipeBackground}
                alt="Edit Recipe Background"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Edit;
