"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Editor } from "@tinymce/tinymce-react";
import Button from "../Button";

const RecipeForm = ({
  recipe,
}: {
  recipe: {
    name?: string;
    numberOfServing?: string;
    preparationTime?: string;
    ingredients?: string;
    procedure?: string;
    _id?: string;
  };
}) => {
  console.log({ recipe });
  const router = useRouter();
  const id = recipe._id || null;
  const [newRecipe, setNewRecipe] = useState({
    name: recipe.name || "",
    numberOfServing: recipe.numberOfServing || "",
    preparationTime: recipe.preparationTime || "",
    image: null as File | null,
    ingredients: recipe.ingredients || "",
    procedure: recipe.procedure || "",
  });

  const addRecipe = async () => {
    const form = new FormData();

    if (id) {
      form.append("_id", id);
    }
    form.append("name", newRecipe.name);
    form.append("numberOfServing", newRecipe.numberOfServing);
    form.append("preparationTime", newRecipe.preparationTime);
    form.append("image", newRecipe.image || "");
    form.append("ingredients", newRecipe.ingredients);
    form.append("procedure", newRecipe.procedure);

    const res = await fetch("/api/recipe", {
      method: id !== null ? "PUT" : "POST",
      body: form,
    });

    if (res.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full md:max-w-[520px] font-lexend">
        <div className="max-w-[600px] w-full">
          <form className="flex flex-col gap-3 w-full">
            <div className="grid pb-3">
              <div className="text-xs text-cooky-red pb-1 pt-8 md:pt-4 md:text-base">
                Recipe Name
              </div>
              <input
                type="text"
                value={newRecipe.name}
                name="name"
                onChange={(e) => {
                  setNewRecipe({ ...newRecipe, name: e.target.value });
                }}
                className="bg-cooky-gray rounded-full py-1 px-4"
              />
            </div>
            <div className="grid pb-1">
              <div className="flex gap-4">
                <div className="grid w-full">
                  <label className="text-xs text-cooky-red pb-1 md:text-base">
                    Number of Servings
                  </label>
                  <input
                    type="number"
                    value={newRecipe.numberOfServing}
                    name="numberOfServing"
                    onChange={(e) => {
                      setNewRecipe({
                        ...newRecipe,
                        numberOfServing: e.target.value,
                      });
                    }}
                    className="bg-cooky-gray rounded-full py-1 px-4"
                  />
                </div>
                <div className="grid w-full">
                  <label className="text-xs text-cooky-red pb-1 md:text-base">
                    Preparation Time
                  </label>
                  <input
                    type="number"
                    value={newRecipe.preparationTime}
                    name="preparationTime"
                    onChange={(e) => {
                      setNewRecipe({
                        ...newRecipe,
                        preparationTime: e.target.value,
                      });
                    }}
                    className="bg-cooky-gray rounded-full py-1 px-4"
                  />
                </div>
              </div>
            </div>
            <div className="grid pb-4">
              <label className="text-xs text-cooky-red pb-1 md:text-base">
                Main Image
              </label>
              <label className="bg-cooky-gray rounded-full py-1 px-1 min-h-9 flex justify-end cursor-pointer">
                <div className="bg-cooky-red rounded-full py-1 px-4  text-xs text-white flex items-center">
                  Browse
                </div>
                <input
                  className="hidden"
                  type="file"
                  onChange={(e) => {
                    setNewRecipe({
                      ...newRecipe,
                      image: (e.target.files || [])[0] || null,
                    });
                  }}
                />
              </label>
            </div>
            <div className="grid pb-2">
              <label className="text-xs text-cooky-red pb-1.5 md:text-base">
                Ingredients
              </label>
              <div>
                <Editor
                  apiKey="r8ezh547wvvaa1zu2sv2rclaj55bh64dh4t59uogu23y4iig"
                  init={{
                    height: 400,
                    branding: false,
                    menubar: false,
                    elementpath: false,
                    resize: false,
                    plugins: [
                      "advlist",
                      "advcode",
                      "advtable",
                      "autolink",
                      "checklist",
                      "lists",
                      "link",
                      "charmap",
                      "preview",
                      "anchor",
                      "powerpaste",
                    ],
                    toolbar:
                      "casechange blocks | bold italic underline strikethrough | " +
                      "alignleft aligncenter alignright alignjustify | " +
                      "bullist numlist outdent indent |",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request: any, respondWith: any) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                  }}
                  value={newRecipe.ingredients}
                  onEditorChange={(content) => {
                    setNewRecipe({
                      ...newRecipe,
                      ingredients: content,
                    });
                  }}
                />
              </div>
            </div>
            <div className="grid pb-4">
              <label className="text-xs text-cooky-red pb-1.5 md:text-base">
                Procedure
              </label>
              <div>
                <Editor
                  apiKey="r8ezh547wvvaa1zu2sv2rclaj55bh64dh4t59uogu23y4iig"
                  init={{
                    height: 400,
                    branding: false,
                    menubar: false,
                    elementpath: false,
                    resize: false,
                    plugins: [
                      "advlist",
                      "advcode",
                      "advtable",
                      "autolink",
                      "checklist",
                      "lists",
                      "link",
                      "charmap",
                      "preview",
                      "anchor",
                      "powerpaste",
                    ],
                    toolbar:
                      "casechange blocks | bold italic underline strikethrough | " +
                      "alignleft aligncenter alignright alignjustify | " +
                      "bullist numlist outdent indent |",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request: any, respondWith: any) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                  }}
                  value={newRecipe.procedure}
                  onEditorChange={(content) => {
                    setNewRecipe({
                      ...newRecipe,
                      procedure: content,
                    });
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="pb-8 pt-4 flex flex-cols md:gap-10">
          <Button
            label="Cancel"
            rounded
            outline
            className="w-full place-content-center md:place-content-start md:w-auto"
            onClick={() => {
              router.push("/dashboard");
            }}
          />
          <Button
            label="Save Changes"
            rounded
            className="w-full place-content-center md:place-content-start md:w-auto"
            onClick={() => {
              addRecipe();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeForm;
