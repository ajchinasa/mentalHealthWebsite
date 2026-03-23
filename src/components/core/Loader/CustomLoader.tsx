interface CustomLoaderProps {
  variant: "dots" | "text" | "spinner";
  className?: string;
}

const CustomLoader = ({ variant, className }: CustomLoaderProps) => {
  return <div className={`${variant}-loader ${className}`} />;
};

export default CustomLoader;
