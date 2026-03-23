interface ReviewCardProps {
  className?: string;
  icon: string;
  description: string;
  name: string;
  stars: string;
}

const ReviewCard = ({
  className,
  icon,
  description,
  name,
  stars,
}: ReviewCardProps) => {
  return (
    <div
      className={`min-w-[250px] md:min-w-[300px] h-[360px] w-full flex flex-col justify-between bg-gradient-to-b from-brand-secondary-customSkyBlue800 to-brand-secondary-customSkyBlue900 rounded-lg p-4 md:p-6 font-switzerRegular text-brand-primary-white overflow-hidden ${className}`}
    >
      <img src={icon} alt="" className="w-8 md:w-16" />
      <p className="text-tiny md:text-baseM font-normal ">{description}</p>
      <div>
        <p className="text-tinyS md:text-sm">{name}</p>
        <img src={stars} alt="" className="w-[60%]  md:mt-4" />
      </div>
    </div>
  );
};

export default ReviewCard;
