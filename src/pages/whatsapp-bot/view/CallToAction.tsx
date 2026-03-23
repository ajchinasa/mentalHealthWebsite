import { Link } from "react-router-dom";
import CTAimage from "@/assets/images/whatsappBotLandingCTA.png";

const CallToAction = () => {
  return (
    <main className="py-16 md:py-32 px-5">
      <div className="w-full md:max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16 md:items-center md:justify-between">
        <div className="text-[rgba(22,27,38,1)] w-full md:w-1/2">
          <h1 className="text-[24px] md:text-[36px] font-switzer font-semibold">
            Getting help for your mind should feel as easy as talking to a
            friend. With Pal, it is.
          </h1>
          <p className="text-[16px] mt-4">
            No more waiting for care&mdash;Pal gives you instant mental health
            insights and access to trusted professionals
          </p>
          <Link
            to="https://api.whatsapp.com/send?phone=18433053974&text=I%20need%20to%20talk"
            target="_blank"
            className="block w-fit mt-4 text-black font-semibold bg-[rgba(2,188,182,1)] py-[16px] px-[24px] rounded-[8px] text-[16px] font-switzer hover:opacity-80 hover:duration-300 hover:transition-all cursor-pointer"
          >
            Chat with Pal
          </Link>
        </div>
        <img src={CTAimage} alt="Chat with pal" className="w-full md:w-1/2" />
      </div>
    </main>
  );
};

export default CallToAction;
