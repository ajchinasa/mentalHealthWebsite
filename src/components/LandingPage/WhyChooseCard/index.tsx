import { IconType } from "react-icons";

interface WhyChooseCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const WhyChooseCard = ({
  icon: Icon,
  title,
  description,
}: WhyChooseCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-[#F0F1F1] p-4 h-full">
      <div className="flex items-center justify-center bg-gradient-to-r from-[#0B6E8D] to-[#5BD1F7] p-2 rounded-full w-8 h-8">
        <Icon size={24} className="text-white" />
      </div>

      <h5 className="text-lg font-semibold text-[#161B26]">{title}</h5>
      <p className="text-base text-[#1F242F]">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
