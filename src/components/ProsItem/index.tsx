
interface ProsItemProps {
  number: string;
  title: string;
  paragraph: string;
}

const ProsItem = ({ number, title, paragraph }: ProsItemProps) => {
  return (
    <div className="flex flex-col space-y-3 ">
      <span className="text-brand-primary text-xl font-semibold text-[#0A9AED]">{number}</span>
      <h3 className="text-lg font-semibold text-[#161B26]">{title}</h3>
      <p className="text-[#2D384D] text-base">{paragraph}</p>
    </div>
  );
};

export default ProsItem;
