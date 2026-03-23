import TherapyCard from "@/components/TheapyCard.tsx";
import { TherapyForEveryStageData } from "@/data/TherapyForEveryStage.ts";

const TherapyForEveryStage = () => {
  return (
    <section className="w-full flex flex-col gap-12">
      <div className="flex flex-col w-full max-w-2xl mx-auto items-center text-center gap-6">
        <h4 className="text-2xl md:text-4xl font-semibold px-4 md:px-0 mt-14">
          Therapy for Every Stage of Life and Relationship
        </h4>
        <p className="text-sm md:text-base font-normal px-4 md:px-6">
          At FriendnPal, we believe everyone deserves a safe space to heal,
          grow, and feel supported. Whether you&apos;re navigating life as an
          individual, raising emotionally healthy children, or working through
          relationship challenges—we&apos;ve got you covered.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TherapyForEveryStageData.map((item, index) => (
          <TherapyCard
            className="last:md:col-span-full last:lg:col-span-1"
            key={index}
            title={item.title}
            description={item.description}
            expectations={item.expectations}
          />
        ))}
      </div>
    </section>
  );
};

export default TherapyForEveryStage;
