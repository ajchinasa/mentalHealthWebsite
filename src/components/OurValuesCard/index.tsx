import { OurValuesData } from "@/data/ourValues";
import { FaCheckCircle } from "react-icons/fa";

const OurValuesCard = () => {
  return (
    <div className="flex flex-col gap-4">
      {OurValuesData.map((text, index) => (
        <div key={index} className="flex items-start gap-3">
          <FaCheckCircle className="text-[#006AB4] text-lg mt-1 flex-shrink-0" />
          <p className="text-sm  text-[#161B26] font-normal font-switzerRegular">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurValuesCard;
