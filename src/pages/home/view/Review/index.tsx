import { useRef } from "react";
import ReviewCard from "@/components/ReviewCard";
import { reviewCardData } from "@/data/review";
import CarouselControl from "@/components/CarouselControl";
import { Icon } from "@/components/core/Icon/Icon";

const Review = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col mb-10">
      {/* Review Section */}
      <div className="flex flex-col md:flex-row h-auto mt-14  w-full gap-4 md:gap-0 mb-12 font-sora">
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
            <div className="flex gap-1">
              <Icon name="Sparkle" width={24} height={24} />
              <p className="text-base text-[#006AB4]">Testimonials</p>
            </div>
            <h1 className="text-4xl text-[#161B26] font-semibold">
              Stories from our community
            </h1>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text=[#333741] text-lg">
              Don’t just take our word for it. See what some of our community
              has to say{" "}
            </p>
          </div>
        </div>
      </div>

      {/*Review Section Cards */}
      <div
        className="w-full flex gap-5 overflow-x-scroll no-scrollbar"
        ref={sliderRef}
      >
        {reviewCardData?.map((card, index) => (
          <ReviewCard
            key={index}
            icon={card.icon}
            description={card.description}
            name={card.name}
            stars={card.stars}
          />
        ))}
      </div>
      <div className="hidden md:flex mx-auto w-fit mt-10 gap-4">
        <CarouselControl sliderRef={sliderRef} sliderType="reviewSlider" />
      </div>
    </div>
  );
};

export default Review;
