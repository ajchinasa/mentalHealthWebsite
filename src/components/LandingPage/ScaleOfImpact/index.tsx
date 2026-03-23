interface ScaleOfImpactProps {
  stats: string;
  title: string;
}

const ScaleOfImpact = ({ stats, title }: ScaleOfImpactProps) => {
  return (
    <div className="flex w-full h-full flex-col text-white">
      <div className="flex flex-col items-center md:items-start py-4 md:py-6 px-3 text-center md:text-left space-y-1">
        <h4 className="text-4xl lg:text-5xl font-semibold leading-none">
          {stats}
        </h4>
        <p className="text-sm md:text-base opacity-90 leading-snug max-w-[150px] md:max-w-none">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ScaleOfImpact;
