import { progressData } from "@/data/progress";
import ProgressLayout from "@/components/ProgressLayout/index";

const Progress = () => {
  return (
    <div className="mt-14 text-center mb-0 lg:mb-12">
      <h2 className="text-[#161B26] font-semibold text-2xl md:text-4xl font-switzerRegular text-center mb-4 lg:mb-10">
        Our Partnership Progress
      </h2>
      <div className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 md:px-16 lg:px-0">
        {progressData.map((card, index) => (
          <div
            key={index}
            className={`w-full lg:w-1/4 lg:border-l lg:border-gray-300 first:lg:pl-0`}
          >
            <ProgressLayout
              figure={card.figure}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
