import Loader from "../core/Loader";

interface CustomButtonProp {
  leftIcon?: string;
  text?: string;
  rightIcon?: string;
  className?: string;
  onClick: (e?: any) => void;
  isDisable?: boolean;
  theme: "default" | "success" | "error" | "bland" | "none";
  isLoading?: boolean;
  loadingText?: string;
  type?: "submit" | "button";
  isTableBtn?: boolean;
}

const CustomButton = ({
  leftIcon,
  text,
  rightIcon,
  className,
  onClick,
  isDisable,
  theme,
  isLoading,
  loadingText,
  type,
  isTableBtn,
}: CustomButtonProp) => {
  const buttonBg = () => {
    if (!isDisable && !isLoading && !isTableBtn) {
      if (theme === "default") {
        return "bg-brand-primary-default text-white cursor-pointer hover:bg-[#004A8C] focus:bg-[#004A8C] shadow-[inset_0px_4px_12px_0px_rgba(0,106,180,0.3),_0px_0px_0px_1px_#004A8C] hover:shadow-[0px_0px_0px_2px_rgba(0,106,180,0.64)] focus:shadow-[0px_0px_0px_2px_rgba(0,106,180,0.64)]";
      } else if (theme === "success") {
        return "bg-brand-primary-darkGreen text-white cursor-pointer focus:text-white shadow-[inset_0px_4px_12px_0px_rgba(42,136,42,0.3),_inset_0px_1px_0px_0px_#9EE19E,_0px_-1px_1px_0px_rgba(36,117,36,0.8),_0px_0px_0px_1px_#1E611E] hover:shadow-[inset_0px_4px_12px_0px_rgba(42,136,42,0.3),_inset_0px_1px_0px_0px_#B1E7B1,_0px_0px_0px_1px_#37AF37] hover:bg-[#3DC23D] focus:bg-[#257425] focus:shadow-[0px_0px_0px_2px_rgba(177,231,177,0.64)]";
      } else if (theme === "error") {
        return "bg-brand-primary-destructive cursor-pointer hover:bg-[#DC2626] text-white focus:text-white hover:shadow-none shadow-[0px_-1px_1px_0px_rgba(168,36,45,0.8),_0px_0px_0px_1px_#A8242D,_inset_0px_4px_12px_0px_rgba(168,36,45,0.6),_inset_0px_1px_0px_0px_#F5C2C2] focus:bg-[#B41D1D] focus:shadow-[0px_0px_0px_3px_rgba(227,84,84,0.24)]";
      } else if (theme === "bland") {
        return "bg-white text-brand-primary-default shadow-[0px_2px_6px_0px_rgba(18,43,105,0.04),_0px_1px_2px_0px_rgba(18,43,105,0.08),_0px_0px_0px_1px_rgba(18,43,105,0.08)] hover:border hover:border-[#E0E0E6] hover:shadow-none hover:bg-[#f3f4fb] focus:border hover:text-blue-900 focus:border-[#006AB4] focus:shadow-[0px_0px_0px_2px_rgba(177, 186, 231, 0.64)] focus:text-black";
      } else if (theme == "none") {
        return "";
      }
    }

    if (isDisable || isLoading) {
      if (theme === "default") {
        return "bg-[#412b8980] cursor-not-allowed text-white";
      } else if (theme === "success") {
        return "bg-[#2B892B80] cursor-not-allowed text-white";
      } else if (theme === "error") {
        return "cursor-not-allowed text-white bg-[#E3545480]/50";
      } else if (theme === "bland") {
        return "cursor-not-allowed text-brand-secondary-grey bg-[#F7F7F8] border border-brand-lightGrey";
      }
    }
  };

  return (
    <button
      type={type}
      className={` ${buttonBg()} rounded-lg text-sm px-4 font-medium outline-none transition-all ease-in-out duration-150 ${
        isTableBtn
          ? "border p-[10px] hover:bg-gray-100"
          : "flex space-x-2 items-center justify-center"
      } ${className}`}
      onClick={isDisable || isLoading ? () => null : onClick}
      disabled={isDisable || isLoading}
    >
      {leftIcon && !isLoading ? (
        <img src={leftIcon} className="-mt-1" alt={`${text} icon`} />
      ) : null}
      {isTableBtn || !text ? null : (
        <span>{isLoading ? (loadingText ?? text) : text}</span>
      )}
      {rightIcon && !isLoading ? (
        <img src={rightIcon} alt={`${text} icon`} />
      ) : null}
      {isLoading ? <Loader borderColor="border-white" /> : null}
    </button>
  );
};

export const BtnInnerComp = ({
  iconStart,
  iconEnd,
  title,
}: {
  iconStart?: string;
  iconEnd?: string;
  title?: string;
}) => (
  <div className="flex items-center space-x-2 font-medium text-sm text-brand-secondary-grey px-4 py-2.5 rounded-[8px] border border-brand-secondary-lightGrey hover:border hover:border-[#E0E0E6] hover:shadow-none hover:bg-[#F3FBF3] focus:border hover:text-black focus:border-[#2B892B]">
    {iconStart && (
      <img
        src={iconStart}
        alt="btnInnerComp-start-icon"
        className="block flex-shrink-0"
      />
    )}
    {title && (
      <div>
        <span>{title}</span>
      </div>
    )}
    {iconEnd && (
      <div>
        <img src={iconEnd} alt="btnInnerComp-end-icon" />
      </div>
    )}
  </div>
);

export default CustomButton;
