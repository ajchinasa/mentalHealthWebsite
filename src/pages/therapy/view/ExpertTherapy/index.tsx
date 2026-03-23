import ExpertTherapyCard from "@/components/ExpertTherapyCard";
import { StatsData } from "@/data/ExpertTherapyStats";

const ExpertTherapy = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between w-full gap-10 py-16">
      <div className="flex flex-col w-full lg:w-1/2 gap-4 max-w-lg mx-auto">
        <h4 className="font-semibold text-[#161B26] text-3xl md:text-4xl ">
          Expert Therapy, Right When You Need It.
        </h4>
        <p className="font-normal text-[#2D384D] text-base">
          Rest easy knowing every FriendnPal therapist has undergone thorough
          training and careful selection to provide you with the highest
          standard of care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full lg:w-1/2 max-w-lg mx-auto">
        {StatsData.map((item, index) => (
          <ExpertTherapyCard
            key={index}
            number={item.number}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpertTherapy;
