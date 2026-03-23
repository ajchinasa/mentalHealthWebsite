import Hero from "./view/Hero";
import Benefits from "./view/Benefits";
import Impact from "./view/Impact";
import CTA from "./../home/view/CTA";
import WhyMentalHealthCare from "./view/WhyMentalHealthCare";

const Children = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Restricted Width Container */}
      <div className="w-full md:max-w-[1200px] mx-auto px-6 overflow-x-hidden">
        <WhyMentalHealthCare />
        <Benefits />
      </div>
      <Impact />
      <div className="w-full overflow-x-hidden"></div>
      <div className="md:max-w-[1200px] mx-auto  px-6 overflow-x-hidden">
        <CTA />
      </div>
    </div>
  );
};

export default Children;
