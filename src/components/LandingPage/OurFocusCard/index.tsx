interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  handleClick?: () => void;
}

const Card = ({
  image,
  title,
  description,
  buttonText,
  handleClick,
}: CardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg font-sora ">
      {/* IMAGE WRAPPER */}
      <div className="relative h-80 w-full ">
        <img src={image} alt={title} className="h-full w-full object-cover" />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent " />

        {/* CONTENT ON IMAGE */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 text-white space-y-4">
          <h5 className="text-[#FFFFFF] text-2xl font-semibold">{title}</h5>

          <p className="text-base text-[#FFFFFF]">{description}</p>

          <button
            onClick={handleClick}
            className="w-fit rounded-full border border-white px-6 py-3 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
