import React from "react";

const CarouselControl = ({
  sliderRef,
  sliderType,
}: {
  sliderRef: React.RefObject<HTMLDivElement>;
  sliderType: string;
}) => {
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef?.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      switch (sliderType) {
        case "reviewSlider":
          sliderRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
          break;
        default:
          console.warn(`Unknown slider type: ${sliderType}`);
      }
    }
  };
  return (
    <>
      <PrevBtn handleClick={() => scrollSlider("left")} />
      <NextBtn handleClick={() => scrollSlider("right")} />
    </>
  );
};

const PrevBtn = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      aria-label="Previous slide"
      onClick={handleClick}
      className="rounded-full border border-brand-primary-default p-3 text-brand-primary-default transition hover:bg-brand-primary-default hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 rtl:rotate-180"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
};

const NextBtn = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      aria-label="Next slide"
      onClick={handleClick}
      className="rounded-full border border-brand-primary-default p-3 text-brand-primary-default transition hover:bg-brand-primary-default hover:text-white"
    >
      <svg
        className="size-5 rtl:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5l7 7-7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default CarouselControl;
