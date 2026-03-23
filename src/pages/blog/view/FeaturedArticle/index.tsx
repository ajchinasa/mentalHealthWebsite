import { Link } from "react-router-dom";
import featured from "@/assets/images/featured.png";

const FeaturedArticle = () => {
  return (
    <div className="py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <img src={featured} alt="" className="w-full md:w-1/2 rounded-lg" />
        <div className="flex flex-col gap-3 md:gap-5">
          <p className="w-fit text-sm text-brand-secondary-customSkyBlue800 bg-[#F0F8FF] py-3 px-5 rounded-lg">
            Featured
          </p>
          <h1 className="font-semibold text-[#2D384D] text-lg md:text-3xl">
            Breaking the Stigma: Why Talking About Mental Health Matters
          </h1>
          <p className="text-[#384B6C] text-sm md:text-lg">
            Conversations about mental health can be life-changing. Learn why
            open discussions help reduce stigma, encourage support, and empower
            individuals to seek help without fear
          </p>
          <p className="text-[10px] text-[#384B6C]">Feb 22, 2024</p>
          <Link to="#" className="text-[#006AB4] text-sm font-semibold">
            Continue reading article...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
