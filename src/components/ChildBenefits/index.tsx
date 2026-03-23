interface ChildBenefitProps {
  image: string;
  title: string;
  description: string;
}

const ChildBenefit = ({ image, title, description }: ChildBenefitProps) => {
  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-4">
      <div className="w-full h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="mt-4">
        <h5 className="font-semibold text-lg md:text-mediumB text-[#161B26]">
          {title}
        </h5>
        <p className="font-mulish  text-sm md:text-baseSmallM text-[#31405B] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChildBenefit;
