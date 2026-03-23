import { partnershipOpportunitiesData } from "@/data/partnershipOpportunities";
import Opportunity from "@/components/PartnershipOpportunities/index";

const Opportunities = () => {
  return (
    <div className="lg:pb-8 pt-8">
      <div className="flex flex-col font-switzerRegular text-center lg:px-44 md:py-14 gap-4 mb-8 md:mb-4 lg:mb-0">
        <h2 className="font-semibold text-2xl md:text-4xl text-[#161B26]">
          Explore Our Partnership Opportunities
        </h2>
        <p className="font-normal text-sm md:text-lg text-[#31405B]">
          At FriendnPal, we believe every organization holds the power to build
          a workplace where mental health is front and center. Here’s why
          partnering with us is a transformative step forward:
        </p>
      </div>
      <div className="space-y-16 md:space-y-20 lg:space-y-12">
        {partnershipOpportunitiesData.map((card, index) => {
          const isImageFirst = index === 1 || index === 3;

          return (
            <Opportunity
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              isImageFirst={isImageFirst}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Opportunities;
