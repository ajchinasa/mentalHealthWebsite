import { useEffect, useState } from "react";
import {
  hiddenSolutionsData,
  productSolutionsData,
  Solution,
} from "@/data/solutionsData";

const Solutions = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCard = (solution: Solution, index: number) => (
    <div
      key={index}
      className="flex flex-col w-full items-start gap-4 p-5 rounded-lg bg-white shadow-sm transition hover:shadow-md"
    >
      <img src={solution.icon} alt={solution.title} className="w-8 h-8" />
      <h5 className="font-semibold text-base md:text-lg text-brand-secondary-customGrey900 font-switzerRegular">
        {solution.title}
      </h5>
      <p className="text-sm text-[#27272A] font-switzerRegular font-normal">
        {solution.paragraph}
      </p>
    </div>
  );

  return (
    <div className="pl-5 pr-4" id="solution">
      <div className="flex flex-col md:flex-row gap-8 w-full pt-8 lg:pt-14">
        <h4 className="font-semibold text-lg lg:text-2xl text-brand-secondary-darkGrey font-archivo w-full md:w-1/2">
          Personalized Mental Health Support for Every Step of Your Journey
        </h4>
        <p className="font-normal text-sm lg:text-base text-brand-secondary-MidDarkGrey w-full md:w-1/2">
          OurPadi is designed to make mental health simple, accessible, and
          truly personal. It is designed to give you resources and guidance
          exactly when needed. Here's how OurPadi empowers your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-6 mt-8">
        {productSolutionsData.map(renderCard)}
        {isLargeScreen && hiddenSolutionsData.map(renderCard)}

        {/* Learn More about Pal button*/}
        {/* <div className="flex flex-col w-full items-center lg:items-start justify center md:justify-end p-5 rounded-lg lg:hidden">
          <button className="border border-[#006AB4] bg-[#006AB4] text-[#FFFFFF] py-2 px-4 rounded-lg font-switzerRegular font-normal">
            Learn More about Pal
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Solutions;
