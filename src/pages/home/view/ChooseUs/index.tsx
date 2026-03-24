import { Icon } from "@/components/core/Icon/Icon";
import WhyChooseCard from "@/components/LandingPage/WhyChooseCard";
import { whyChooseCardData } from "@/data/LandingPage/whyChoose";

const ChooseUs = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-[#99c3e1] to-[#bae8f9] p-6 md:p-12 mt-4 font-sora ">
      {/* Why Choose Us Section */}
      <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 items-start lg:items-end">
        {/* Left Column: Heading */}
        <div className="flex flex-col w-full lg:w-1/2 space-y-4 text-center md:text-left">
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <Icon name="Sparkle" width={24} height={24} />
            <p className="text-base text-[#006AB4]">What Makes Us Great</p>
          </div>
          <h1 className="text-2xl md:text-4xl text-[#161B26] font-semibold">
            Your Everyday Companion for Emotional Wellness
          </h1>
        </div>

        {/* Right Column: Description + CTA */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <p className="text-[#333741] text-lg leading-relaxed">
            Wherever you are on your journey, your Aura walks with you;
            listening, supporting, and helping you find balance.
          </p>

          <button className="bg-[#006AB4] hover:bg-[#338FD1] px-8 py-3 rounded-full w-fit transition-all shadow-lg shadow-blue-200">
            <span className="text-[#F5F5F6] font-semibold text-base">
              Talk to Aura
            </span>
          </button>
        </div>
      </div>
      {/* Why Choose Us Card Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 pb-4">
        {whyChooseCardData.map((card, index) => (
          <WhyChooseCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
