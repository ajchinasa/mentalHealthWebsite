interface OurTeamCardProps {
  img: string;
  name: string;
  title: string;
}

const OurTeamCard = ({ img, name, title }: OurTeamCardProps) => {
  return (
    <div className="group shrink-0 relative w-full md:w-[260px] h-[320px] overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <img
        src={img}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-5">
        <h4 className="text-xl font-semibold text-[#FFFFFF]">{name}</h4>
        <p className="text-base text-[#F5F5F6] opacity-80">{title}</p>
      </div>
    </div>
  );
};

export default OurTeamCard;
