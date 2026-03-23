interface LoaderProps {
  borderColor?: string;
  className?: string;
}

const Loader = ({ borderColor, className }: LoaderProps) => {
  return (
    <div
      className={`animate-spin h-5 w-5 border-2 border-t-transparent ${className} ${borderColor} rounded-full`}
      data-testid="button-loader"
    />
  );
};

export default Loader;
