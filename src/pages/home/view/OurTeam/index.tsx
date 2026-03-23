import { Icon } from "@/components/core/Icon/Icon";
import OurTeamCard from "@/components/LandingPage/OurTeamCard";
import { OurTeamData } from "@/data/LandingPage/ourTeam";

const OurTeam = () => {
  return (
    <div className="font-sora pt-6 lg:pt-14 mb-12">
      {/* Why Choose Us Section */}
      <div className="flex w-full gap-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
            <div className="flex items-center gap-1">
              <Icon name="Sparkle" className="h-6 w-6 mt-1" />
              <p className="text-base text-[#006AB4]">Our Team</p>
            </div>
            <h1 className="text-4xl text-[#161B26] font-semibold">
              Meet Your Padis
            </h1>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 pb-8 md:pb-0">
            <p className="text-[#333741] text-lg">
              I may be smart, but it's the humans behind the mission who bring
              the heart. Meet the team making emotional care feel real, safe,
              and home-like
            </p>

            {/* <button className="bg-[#006AB4] hover:bg-[#338FD1] px-6 py-3 rounded-full w-max">
              <p className="text-[#F5F5F6] font-semibold text-base">
                View all Members
              </p>
            </button> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:pt-8 pb-4 overflow-scroll no-scrollbar">
        {OurTeamData.map((card, index) => (
          <OurTeamCard
            key={index}
            img={card.img}
            name={card.name}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
