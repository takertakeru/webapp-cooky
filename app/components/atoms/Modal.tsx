"use client";

import { useState, useEffect, useCallback } from "react";

import Button from "../Button";
import { IModal } from "@/app/interface/modal";

const Modal = ({
  isOpen,
  onSubmit,
  actionLabel,
  secondaryActionLabel,
  secondaryAction,
  body,
}: IModal) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleSecondaryAction = useCallback(() => {
    setShowModal(false);
    if (secondaryAction) {
      setTimeout(() => {
        secondaryAction();
      }, 300);
    }
  }, [secondaryAction]);

  const handleSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
        <div className="relative w-[380px] h-auto">
          <div
            className={`
                translate
                h-full
                duration-300
                ${showModal ? "translate-y-0" : "translate-y-full"}
                ${showModal ? "opacity-100" : "opacity-0"}
             `}
          >
            <div className="translate relative flex h-full w-full flex-col rounded-2xl border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto">
              <div className="relative flex-auto p-6">{body}</div>
              <div className="p-6 flex gap-4">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                    className="w-full"
                  />
                )}

                <Button
                  label={actionLabel}
                  onClick={handleSubmit}
                  rounded
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
