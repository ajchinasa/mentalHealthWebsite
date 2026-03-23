import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegSmileBeam } from "react-icons/fa";
import { TbPhysotherapist } from "react-icons/tb";
import AIicon from "/AI_icon.svg";

const HowPalWorks = () => {
  return (
    <main className="w-full bg-white py-10 md:py-24 px-5">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="text-[rgba(22,27,38,1)] w-full md:w-1/2">
          <h1 className="text-[24px] md:text-[36px] font-switzer font-semibold">
            How Does Pal Works?
          </h1>
          <p className="text-[16px] md:w-[80%]">
            Pal is simple, fast, and designed for your mental well-being. Start
            by chatting with Pal on WhatsApp—just tell it how you're feeling.
            You can share as much as you want—no pressure. Pal will ask you a
            few quick, thoughtful questions to better understand what you're
            going through. Based on your responses, Pal provides helpful
            insights, coping tips, or connects you with a therapist if needed.
          </p>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-y-8 gap-x-5 md:gap-x-10 mt-8 md:mt-0">
          <div>
            {/* ICON */}
            <IoChatbubbleEllipsesOutline className="text-[#02BCB6] text-2xl mb-1" />
            <h3 className="text-[18px] font-switzer">Start a Chat</h3>
            <p className="text-sm md:text-[16px] text-[#161b26ee]">
              Message Pal on Whatsapp to begin your mental wellness journey.
            </p>
          </div>
          <div>
            {/* ICON */}
            <FaRegSmileBeam className="text-[#02BCB6] text-2xl mb-1" />
            <h3 className="text-[18px] font-switzer">Describe your Feelings</h3>
            <p className="text-sm md:text-[16px] text-[#161b26ee]">
              Share how you're feeling or what you're going through&mdash;Pal
              listens without judgement
            </p>
          </div>
          <div>
            {/* ICON */}
            <img src={AIicon} alt="AI icon" className="w-4 mb-2" />
            <h3 className="text-[18px] font-switzer">
              Get AI-Powered Support{" "}
            </h3>
            <p className="text-sm md:text-[16px] text-[#161b26ee]">
              Receive instant, personalized mental health tips, check-ins, and
              guidance tailored to your needs.
            </p>
          </div>
          <div>
            {/* ICON */}
            <TbPhysotherapist className="text-[#02BCB6] text-2xl" />
            <h3 className="text-[18px] font-switzer">
              Connect with Therapists
            </h3>
            <p className="text-sm md:text-[16px] text-[#161b26ee]">
              When needed, Pal connects you to licensed, culturally aware mental
              health professionals near you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowPalWorks;
