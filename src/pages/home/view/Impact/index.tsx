import ScaleOfImpact from "@/components/LandingPage/ScaleOfImpact";
import rectangleShadow from "@/assets/images/LandingPage/rectangleShadow.png";
import { ImpactData } from "@/data/LandingPage/scaleOfImpact";

const Impact = () => {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#006AB4] to-[#002E4E] p-6 md:p-11 ">
      {/* BACKGROUND IMAGE */}
      <img
        src={rectangleShadow}
        alt=""
        className="absolute -left-16 inset-y-0 h-full w-full object-cover opacity-50 pointer-events-none"
        loading="lazy"
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4 my-6 font-sora text-white">
          <div className="flex gap-1 items-center">
            <svg viewBox="0 0 100 100" className="w-6 h-6 text-white">
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                d="M 50 0 C 50 40, 60 50, 100 50 C 60 50, 50 60, 50 100 C 50 60, 40 50, 0 50 C 40 50, 50 40, 50 0 Z"
              />
            </svg>
            <p className="text-base">Scale of Impact</p>
          </div>

          <p className="text-2xl md:text-4xl font-semibold text-center">
            Numbers that reflect our compassion
          </p>
        </div>

        {/* Stats */}
        {/* Stats Grid: Stacks on small, 2x2 or row on medium, Row on large */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap w-full justify-center items-center md:items-stretch">
          {ImpactData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center w-full md:w-auto"
            >
              <div className="flex-1 h-full">
                <ScaleOfImpact stats={card.stats} title={card.title} />
              </div>

              {/* Divider */}
              {index !== ImpactData.length - 1 && (
                <div className="hidden md:block h-20 lg:h-24 w-px bg-white/30 mx-4 lg:mx-6 self-center" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
