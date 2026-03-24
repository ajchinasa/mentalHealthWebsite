import pattern from "@/assets/images/Therapy/Pattern.png";

const HereForYou = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-24 px-6 text-center">
      {/* Background Decoration */}
      <img
        src={pattern}
        alt="pattern decoration"
        className="hidden lg:block absolute left-0 top-0 opacity-90 pointer-events-none z-0"
      />

      {/* Text Content */}
      <div className="relative max-w-2xl mx-auto space-y-6">
        <h3 className="font-semibold text-3xl md:text-4xl text-white leading-snug">
          Your Mental Well-being Matters — And We’re Here for You
        </h3>
        <p className="text-[#F5F7FA] text-base  font-normal leading-relaxed">
          At AuraRest, we believe everyone deserves access to quality,
          compassionate therapy that fits their life. Wherever you are on your
          journey, take the first step with us — because better mental health
          starts with a single conversation.
        </p>
      </div>
    </div>
  );
};

export default HereForYou;
