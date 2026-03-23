interface OpportunityProps {
  title: string;
  description: string;
  image: string;
  isImageFirst?: boolean;
}

const Opportunity = ({
  title,
  description,
  image,
  isImageFirst,
}: OpportunityProps) => {
  return (
    <div
      className={`flex flex-col ${
        isImageFirst ? "lg:flex-row" : "lg:flex-row-reverse lg:space-x-reverse"
      } lg:space-x-36 md:mb-12 lg:mb-8 space-y-4 lg:space-y-0`}
    >
      <div className="w-full lg:w-1/3">
        <img className="w-full" src={image} alt={title} />
      </div>
      <div className="flex flex-col w-full lg:w-2/3 font-archivo lg:justify-center space-y-4  lg:space-y-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#161B26]">
          {title}
        </h3>
        <p className="font-normal text-[#31405B] text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Opportunity;
