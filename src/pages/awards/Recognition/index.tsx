import nasdaqsTv from "@/assets/images/Awards_&_certifications/Nasdaq.png";
import inclusion_mobile_Logo from "@/assets/images/Awards_&_certifications/Inclusion-mobile-logo.png";
import techcabal from "@/assets/images/Awards_&_certifications/Techcabal.png";
import nasdaq from "@/assets/images/Awards_&_certifications/Nasdaq.png";
import stv from "@/assets/images/Awards_&_certifications/STV.png";
import the_nation from "@/assets/images/Awards_&_certifications/The_Nation.png";
import tuko from "@/assets/images/Awards_&_certifications/Tuko.png";
import { useEffect, useRef } from "react";

const Recognition = ({ variant = "row" }: { variant?: string }) => {
  const defaultImages: string[] = [
    nasdaqsTv,
    inclusion_mobile_Logo,
    techcabal,
    nasdaq,
    stv,
    the_nation,
    tuko,
  ];
  const containerImages = defaultImages;

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const slide = () => {
      scrollAmount += scrollSpeed;
      slider.scrollLeft = scrollAmount;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      requestAnimationFrame(slide);
    };
    slide();

    return () => cancelAnimationFrame(slide as any);
  }, []);
  return (
    <div>
      <h3 className="w-full flex justify-center font-semibold text-[#161B26] text-2xl md:text-4xl pt-12">
        Recognition
      </h3>
      <div
        className={`flex ${
          variant === "row" ? "flex-col md:flex-row" : "flex-col gap-10"
        } space-y-6 md:space-y-0 pt-8 pb-8`}
      >
        <div
          id={"container"}
          ref={sliderRef}
          className="flex items-center space-x-10 overflow-x-hidden no-scrollbar whitespace-nowrap relative"
          style={{ willChange: "transform" }}
        >
          {containerImages
            .concat(containerImages)
            .map((image: string, index: number) => (
              <img
                key={index}
                className="inline-block"
                src={image}
                alt={`Logo ${index + 1}`}
                style={{ width: "auto", height: "40px" }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recognition;
