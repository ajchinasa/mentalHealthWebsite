import OurValuesCard from "@/components/OurValuesCard";
import OurValuesImg from "@/assets/images/AboutUs/OurValuesImg.png";

const OurValues = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row py-2 md:py-12 gap-8 lg:gap-20 items-start md:items-center lg:items-start">
      <img src={OurValuesImg} alt="Our Values" className="w-full max-w-md" />
      <div className="flex flex-col gap-6 max-w-xl">
        <h3 className="text-2xl lg:text-5xl  text-[#161B26] font-semibold  font-switzerRegular items-start">
          Our Values
        </h3>
        <OurValuesCard />
      </div>
    </div>
  );
};

export default OurValues;
