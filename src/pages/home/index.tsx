import React from "react";
import {
  AboutUs,
  ChatPreview,
  ChooseUs,
  CTA,
  Impact,
  OurFocus,
  OurTeam,
  Partners,
  Review,
  Hero,
} from "./view";

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden font-sora">
      <Hero />
      <div className="max-w-[1200px] mx-auto px-6">
        <ChatPreview />
        <AboutUs />
      </div>
      <div className="w-full max-w-[1300px] mx-auto px-2 md:px-8 my-10">
        <ChooseUs />
      </div>
      <div className="max-w-[1200px] mx-auto px-6">
        <Partners />
        <OurFocus />
        <Review />
        <OurTeam />
      </div>
      <div className="w-full max-w-[1300px] mx-auto px-2 md:px-8 my-10">
        <Impact />
      </div>
      <div className="max-w-[1200px] mx-auto px-6">
        <CTA />
      </div>
    </div>
  );
};

export default Home;
