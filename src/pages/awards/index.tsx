import AwardsHero from "./AwardsHero";
import AwardsSection from "./ListOfAwards";
import MakeADifference from "./FormSection/";
import Recognition from "./Recognition";

const Awards = () => {
  return (
    <div className=" w-full  overflow-x-hidden">
      <AwardsHero />
      <div className="w-full md:max-w-[1200px] mx-auto px-6">
        <AwardsSection />
        <Recognition />
        <MakeADifference />
      </div>
    </div>
  );
};

export default Awards;
