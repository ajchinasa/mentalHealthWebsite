import Hero from "./view/Hero";
import Opportunities from "./view/Oppourtunities";
import Progress from "./view/Progress";
import MakeADifference from "./view/MakeADifference";

const Partnerships = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      <div className="mt-16 w-full md:max-w-[1200px] mx-auto px-6 overflow-x-hidden">
        <Opportunities />
        <Progress />
        <MakeADifference />
      </div>
    </div>
  );
};

export default Partnerships;
