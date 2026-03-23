import { prosData } from "@/data/pros";
import ProsItem from "@/components/ProsItem";

const Pros = () => {
  return (
    <div className="w-full flex flex-col py-16 gap-2 md:gap-10 ">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center  lg:px-8 gap-4 mb-8">
        <h1 className="text-[#161B26] text-2xl md:text-4xl font-semibold ">
          Therapy That's Personal, Practical, and Worth Your Time
        </h1>
        <p className="text-xs md:text-base font-normal text-[#2D384D] md:px-16">
          Each session is designed to help you grow, reflect, and feel
          better—with guidance that makes a difference.
        </p>
      </div>
      <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {prosData.map((item, index) => (
          <ProsItem
            key={index}
            number={item.number}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Pros;
