import { MdCheckCircle } from "react-icons/md";

type TherapyCardProps = {
  title: string;
  description: string;
  expectations: string[];
  className?: string;
};

const TherapyCard = ({
  title,
  description,
  expectations,
  className = "",
}: TherapyCardProps) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between h-full transition-all duration-300 ease-in-out hover:-translate-y-4 ${className}`}
    >
      <div>
        <h3 className="text-xl font-semibold text-[#161B26] mb-2">{title}</h3>
        <p className="text-[#2D384D] text-sm mb-6 leading-relaxed min-h-[120px]">
          {description}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-[#161B26] mb-2">
          What to expect:
        </h4>
        <ul className="space-y-2">
          {expectations.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-[#2D384D]"
            >
              <MdCheckCircle className="text-green-500 w-4 h-4 pt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TherapyCard;
