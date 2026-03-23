import Home from "./view/Hero";
import Pros from "./view/Pros";
import HereForYou from "./view/HereForYou";
import Testimonials from "./view/Testimonials";
import TherapyForEveryStage from "./view/TherapyForEveryStage";
import Packages from "./view/Packages";
import ExpertTherapy from "./view/ExpertTherapy";

const Therapy = () => {
  return (
    <div className="w-full ">
      {/* Home Section */}
      <section className="bg-[#ffffff] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <Home />
        </div>
      </section>

      {/* Pros Section */}
      <section className="bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6">
          <Pros />
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-[#006AB4]">
        <div className="w-full">
          <Testimonials />
        </div>
      </section>
      {/* TherapyForEveryStage Section */}
      <section className="bg-[#FAFAFA] pt-10 md:pt-0 py-0 md:py-16">
        <div className="max-w-[1400px] mx-auto lg:px-6">
          <TherapyForEveryStage />
        </div>
      </section>
      {/* Packages Section */}
      <section className="bg-[#FAFAFA] ">
        <div className="max-w-[1400px] mx-auto lg:px-6">
          <Packages />
        </div>
      </section>
      {/* ExpertTherapy Section */}
      <section className="bg-white w-full ">
        <div className="max-w-[1400px] mx-auto px-6">
          <ExpertTherapy />
        </div>
      </section>
      {/* HereForYou Section */}
      <section className="bg-gradient-to-b from-[#006AB4] to-[#002E4E] mb-10 md:mb-14">
        <HereForYou />
      </section>
    </div>
  );
};

export default Therapy;
