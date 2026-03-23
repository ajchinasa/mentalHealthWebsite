import StatOnScroll from "../StatOnScroll";

type ExpertTherapyCardProps = {
  number: number;
  title: string;
};

const ExpertTherapyCard = ({ number, title }: ExpertTherapyCardProps) => {
  return (
    <div className="flex flex-col items-center gap-1 rounded py-6 bg-[#F0F8FF]">
      <p className="text-2xl font-semibold text-[#006AB4] flex items-center gap-1">
        <StatOnScroll target={number} />
        <span>+</span>
      </p>
      <p className="text-[#2D384D] text-sm">{title}</p>
    </div>
  );
};

export default ExpertTherapyCard;
