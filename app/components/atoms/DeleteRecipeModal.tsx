"use client";

import { useRouter } from "next/navigation";

import Modal from "./Modal";

const DeleteRecipeModal = ({ _id, name }: { _id: string; name: string }) => {
  const router = useRouter();

  const onSubmit = () => {
    fetch(`/api/recipe?recipe_id=${_id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        router.push("/dashboard");
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="px-5 py-5 flex flex-col gap-6">
        <div>
          <label className="font-paytone text-3xl text-cooky-red">
            Delete Recipe?
          </label>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend">
            Are you sure you want to{" "}
            <span className="text-red-600">DELETE</span> the recipe for
            {` ${name}`}
            <br />
            <br />
            <span>There is no turning back.</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={Boolean(_id && _id !== "")}
      actionLabel="Yes"
      secondaryActionLabel="No"
      secondaryAction={() => {
        router.push("/dashboard");
      }}
      body={bodyContent}
      onSubmit={onSubmit}
    />
  );
};

export default DeleteRecipeModal;
