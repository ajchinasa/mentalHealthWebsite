const ProgressLayout = ({
  figure,
  title,
  description,
}: {
  figure: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col w-full px-6 py-6 text-center lg:text-left space-y-2">
      <p className="text-[#006AB4] font-mulish font-semibold text-5xl">
        {figure}
      </p>
      <h3 className="text-[#161B26] font-switzerRegular font-semibold text-lg md:text-xl lg:text-lg">
        {title}
      </h3>
      <p className="text-[#31405B] font-mulish font-normal text-sm md:text-lg lg:text-sm">
        {description}
      </p>
    </div>
  );
};

export default ProgressLayout;
