// "use client";

// import { useRouter } from "next/navigation";

// import useDeleteModal from "@/app/hooks/useDeleteModal";
// import Modal from "./Modal";

// const CreateRecipeModal = () => {
//   const router = useRouter();
//   const deleteModal = useDeleteModal();

//   // temporary onSubmit
//   const onSubmit = () => {
//     router.push("/dashboard");
//   };

//   const bodyContent = (
//     <div className="flex flex-col gap-4">
//       <div className="px-5 py-5 flex flex-col gap-6">
//         <div>
//           <label className="font-paytone text-3xl text-cooky-red">
//             Save Success
//           </label>
//         </div>
//         <div className="flex flex-col">
//           <div className="font-lexend">The details of {}</div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <Modal
//       isOpen={deleteModal.isOpen}
//       actionLabel="Yes"
//       secondaryActionLabel="No"
//       secondaryAction={deleteModal.onClose}
//       body={bodyContent}
//       onSubmit={onSubmit}
//     />
//   );
// };

// export default CreateRecipeModal;
