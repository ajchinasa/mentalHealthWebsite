import goldHeart from "@/assets/images/goldHeart.png";
import fidelity from "@/assets/images/Fidelity.png";
import myMedicare from "@/assets/images/mymedicare.png";
import quramo from "@/assets/images/Quramo.png";
import redCross from "@/assets/images/redCross.png";
import buluzo from "@/assets/images/buluzo.png";
import lagosStateGov from "@/assets/images/lagosStateGov.png";
import gracevilleOtp from "@/assets/images/gracevilleOtp.png";
import compasAi from "@/assets/images/compassAi.png";
import cloud from "@/assets/images/cloud.png";
import nutraBoom from "@/assets/images/Nutraboom.png";
import laCusine from "@/assets/images/lacusine.png";
import { useEffect, useRef } from "react";
const Partners = ({ variant = "row" }: { variant?: string }) => {
  const defaultImages: string[] = [
    goldHeart,
    fidelity,
    myMedicare,
    quramo,
    redCross,
    buluzo,
    lagosStateGov,
    gracevilleOtp,
    compasAi,
    cloud,
    nutraBoom,
    laCusine,
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
    <>
      <div
        className={`flex ${
          variant === "row" ? "flex-col md:flex-row" : "flex-col gap-10"
        } space-y-6 md:space-y-0 pt-8 pb-8`}
      >
        <h3
          className={`${
            variant === "row" ? "md:w-full lg:w-[40%]" : "w-fit mx-auto"
          } font-semibold text-semiSmall md:text-medium text-brand-secondary-darkGrey`}
        >
          Our Trusted Partners in Mental Health
        </h3>
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
    </>
  );
};

export default Partners;
