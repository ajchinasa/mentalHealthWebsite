const Impact = () => {
  return (
    <div className="bg-[#072B4A] py-20 px-5">
      <div className="w-full md:max-w-[1200px] mx-auto">
        <h4 className="text-[#EAEDF4] text-3xl font-semibold text-center">
          Our Impact on Young Minds
        </h4>

        <div className="flex flex-col md:flex-row w-full gap-10 mt-10 items-start">
          <div className="flex flex-col items-center text-center w-full md:w-1/2">
            <p className="text-[#11B2E6] text-[52px] font-semibold font-archivo">
              200+
            </p>
            <p className="text-[#EAEDF4] leading-relaxed max-w-md text-baseS font-normal font-switzerRegular mt-2">
              Over 200 young minds from slum communities facing life crises and
              addiction enjoyed a magical Christmas at our 2023 Slum Party,
              receiving personalized gift bags with essentials.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center w-full md:w-1/2">
            <p className="text-[#11B2E6] text-[52px] font-semibold font-archivo">
              500+
            </p>
            <p className="text-[#EAEDF4] leading-relaxed max-w-md text-baseS font-normal font-switzerRegular mt-2">
              Over 500 children, including children with disabilities, and 600
              parents were engaged in December during our Mental Health for Kids
              event — a safe, fun-filled experience focused on emotional
              expression, mental wellness, and inclusion for the whole family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
