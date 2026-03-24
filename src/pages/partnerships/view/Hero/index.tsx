import heroImg from "@/assets/images/PartnershipsPage/heroImg.png";
import TopPolygon from "@/assets/images/PartnershipsPage/TopPolygon.png";
import BottomPolygon from "@/assets/images/PartnershipsPage/BottomPolygon.png";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#F9F9F8] overflow-hidden z-0 mt-16 md:mt-24 lg:mt-0">
      {/* Top Polygon Image */}
      <img
        src={TopPolygon}
        alt="top polygon"
        className="absolute top-0 left-0 w-full z-0 "
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row w-full font-switzerRegular gap-4 md:gap-16 pb-6 lg:pb-16 lg:px-20 md:pt-10 lg:pt-20">
        {/* Left content container */}
        <div className="flex flex-col justify-center p-6 space-y-6 w-full md:w-1/2 lg:w-2/3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#161B26]">
            Building Stronger Partnerships for a Healthier Future
          </h1>
          <p className="text-base md:text-lg font-normal text-[#31405B]">
            Transform workplace well-being with AuraRest—empower your team,
            boost productivity, and nurture genuine care. Partner with us to
            make mental health support accessible, effective, and
            transformative.
          </p>
          <button className="w-fit bg-[#006AB4] text-white text-sm px-6 py-3 rounded-md font-normal transition-transform duration-300 hover:-translate-y-1 capitalize">
            Partner with us for a healthier tomorrow
          </button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-0 h-full px-14 md:px-0">
          <img src={heroImg} alt="partnership" className="w-full h-full" />
        </div>
      </div>

      {/* Bottom Polygon Image */}
      <img
        src={BottomPolygon}
        alt="bottom polygon"
        className="absolute bottom-0 left-0 w-full z-0"
      />
    </div>
  );
};

export default Hero;
