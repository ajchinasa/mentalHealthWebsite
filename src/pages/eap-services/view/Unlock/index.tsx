import unlock_img from "@/assets/images/EAP/unlock_section_subtract.png";

const Unlock = () => {
  return (
    <div className="w-full py-20 px-5">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="font-switzerSemiBold font-semibold text-4xl">
            Unlock a Healthier, Happier Workforce
          </h1>
          <p className="text-brand-secondary-MidDarkGrey">
            Empower your workforce with tools that boost resilience, foster
            balance, and unlock a brighter future—together
          </p>
          <button className="bg-brand-primary-default rounded-lg text-white w-fit py-3 px-6 font-bold">
            Start your journey today!
          </button>
        </div>
        <img
          src={unlock_img}
          alt="unlock"
          className="w-full md:w-1/2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Unlock;
