import awardsListData, { AwardItem } from "@/data/awardsListData";

const AwardsList = () => {
  return (
    <ul className="space-y-4 text-[#161B26] text-base md:text-lg font-medium">
      {awardsListData.map((award: AwardItem, index: number) => (
        <li key={index} className="flex items-start gap-3">
          <span className="text-xl">{award.icon}</span>
          <span className="leading-snug">{award.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default AwardsList;
