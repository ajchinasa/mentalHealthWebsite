import { MdOutlineCancel } from "react-icons/md";
import ReactDOM from "react-dom";

type propTypes = {
  open: boolean;
  onClose: () => void;
  closeIcon?: boolean;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  showOnMobile?: boolean;
};

const Modal: React.FC<propTypes> = ({
  open,
  onClose,
  children,
  closeIcon = false,
  size = "md",
  showOnMobile = false,
}) => {
  const modalSize = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  }[size];

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 ${showOnMobile ? "flex" : "hidden lg:flex"} justify-center items-center z-[9999] transition-colors bg-black/30 backdrop-blur-md`}
      onClick={onClose}
    >
      <div
        className={`w-full bg-white rounded-lg shadow p-4 relative transition-all ${modalSize} scale-100 opacity-100`}
        onClick={(e) => e.stopPropagation()}
      >
        {closeIcon && (
          <MdOutlineCancel
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-black text-3xl cursor-pointer"
          />
        )}
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
