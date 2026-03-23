import { Icon } from "@/components/core/Icon/Icon";
import GridBox2 from "@/assets/images/LandingPage/GridBox2.png";
import GridBox3 from "@/assets/images/LandingPage/GridBox3.png";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="font-sora flex flex-col gap-10 lg:flex-row max-w-7xl mx-auto py-8 md:py-12 lg:mt-8 lg:items-stretch">
      {/* LEFT COLUMN */}
      <div className="flex w-full lg:w-5/12 gap-4 items-stretch ">
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-4 w-1/2 ">
          {/* Stats */}
          <div className="flex flex-col items-center justify-center rounded-xl bg-[#f2f7fb] border border-[#006AB4]/60 p-4 text-center min-h-[100px] md:min-h-[140px]">
            <p className="text-2xl md:text-4xl font-semibold text-[#006AB4]">
              30,000+
            </p>
            <p className="mt-1 text-xs md:text-sm text-[#006AB4]">
              Users Worldwide
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 ">
            <img
              src={GridBox3}
              alt="Global users"
              className="w-full h-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-4 w-1/2 ">
          {/* Image */}
          <div className="flex-1">
            <img
              src={GridBox2}
              alt="Customer satisfaction"
              className="w-full h-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          {/* Stats */}
          <div className="flex flex-col items-center justify-center rounded-xl  bg-gradient-to-r from-[#0B6E8D] to-[#5BD1F7] p-4 text-center text-[#FFFEFE] min-h-[100px] md:min-h-[140px]">
            <p className="text-2xl md:text-4xl font-semibold">99%</p>
            <p className="mt-1 text-xs md:text-sm  whitespace-nowrap">
              Customer satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-7/12 font-sora space-y-6 lg:space-y-4 ">
        <div className="flex gap-2 items-center">
          <Icon name="Sparkle" width={24} height={24} />
          <p className="text-[#006AB4] text-base">About Us </p>
        </div>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-[#161B26] leading-tight">
          FriendnPal is reshaping emotional wellness in Africa and Globally
        </h1>
        <p className="text-[#333741] text-lg leading-relaxed max-w-2xl">
          By blending AI technology, culture, and community into one warm,
          multilingual companion. Our platform makes support truly accessible,
          no matter your language, background, or story
        </p>
        <div className="flex flex-col space-y-2 3 w-full max-w-md md:max-w-none">
          <div className="flex gap-3 items-start text-left">
            <IoCheckmarkDoneCircleSharp className="w-6 h-6 text-[#006AB4] flex-shrink-0 mt-1" />
            <p className="text-[#333741] text-base">
              Built by a passionate team of builders, therapists, and advocates
              dedicated to emotional wellness across Africa
            </p>
          </div>
          <div className="flex gap-3 items-start pb-4 text-left">
            <IoCheckmarkDoneCircleSharp className="w-6 h-6 text-[#006AB4] flex-shrink-0 mt-1" />

            <p className="text-[#333741] text-base">
              We blend innovation and empathy to create a safe, stigma-free
              wellness space
            </p>
          </div>
        </div>
        <Link
          to="/therapy"
          className="bg-[#006AB4] hover:bg-[#338FD1] px-8 py-3 rounded-full text-[#F5F5F6] font-semibold text-base"
        >
          Book a Session
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
