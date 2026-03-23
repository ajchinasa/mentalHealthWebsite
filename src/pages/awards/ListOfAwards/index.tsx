import AwardsList from "@/components/AwardsList";
import awardsCrown from "@/assets/images/Awards_&_certifications/awardsCrown.png";

const AwardsSection = () => {
  return (
    <section className="py-4 lg:py-16 ">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6 md:mb-12 text-[#161B26]">
        Awards
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-10">
        {/* Awards List */}
        <div className="flex-1">
          <AwardsList />
        </div>

        {/*  Image */}
        <div className=" flex justify-center">
          <img
            src={awardsCrown}
            alt="Awards and Certifications at FriendnPal"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
