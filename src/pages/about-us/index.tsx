import OurMission from "./view/OurMission";
import OurValues from "./view/OurValues";
import OurTeam from "./view/OurTeam";
import GetStarted from "./view/GetStarted";
import Hero from "./view/Hero";

const aboutUs = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <div className="w-full md:max-w-[1200px] mx-auto px-6 overflow-x-hidden">
        <OurMission />
        <OurValues />
        <OurTeam />
      </div>
      <GetStarted />
    </div>
  );
};

export default aboutUs;
