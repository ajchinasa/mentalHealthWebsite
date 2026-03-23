import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { ReactComponent as ChexboxIcon } from "assets/icons/checkbox.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import error from "assets/icons/error.svg";
import { useEffect, useState } from "react";

interface CustomToastProp {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title?: string;
  text?: string;
  todo?: () => void;
}

const CustomToast = ({
  isOpen,
  onClose,
  type,
  title,
  text,
  todo,
}: CustomToastProp) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} closeOnOverlayClick={false} onClose={onClose}>
      <ModalOverlay
        style={{
          background: "rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(6px)",
        }}
      />
      <ModalContent
        rounded={16}
        className={`border border-[#D3D2DA] overflow-hidden font-medium text-sm transition-all duration-700 font-campton ${
          animate ? "translate-x-0" : "translate-x-full"
        }`}
        position="fixed"
        right={animate ? 10 : -500}
        maxW="296px"
      >
        <div
          className={`${
            type === "success"
              ? "bg-brand-primary-default"
              : "bg-brand-primary-destructive"
          } p-4 text-white rounded-b-2xl`}
        >
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              {type === "success" ? (
                <ChexboxIcon fill="#fff" />
              ) : (
                <div>
                  <img src={error} alt="erro icon" />
                </div>
              )}
              <p>{title ?? (type === "success" ? "Successful!" : "Error!")}</p>
            </div>
            <button onClick={onClose} autoFocus={false}>
              <CloseIcon fill="#fff" width="16" height="16" />
            </button>
          </div>

          <p className="mt-2">
            {text ??
              (type === "success"
                ? "This operation is successful."
                : "This operation is unsuccessful.")}
          </p>
        </div>
        <button
          className="p-4 underline w-fit"
          onClick={
            todo
              ? () => {
                  todo();
                  onClose();
                }
              : onClose
          }
        >
          Done
        </button>
      </ModalContent>
    </Modal>
  );
};

export default CustomToast;
