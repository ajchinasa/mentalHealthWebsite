import { Icon } from "@/components/core/Icon/Icon";
import BotImg from "@/assets/images/LandingPage/BotImg.png";
import Phone from "@/assets/images/LandingPage/Phone.png";

const ChatPreview = () => {
  return (
    <div className="flex flex-col w-full h-auto gap-12 lg:gap-8 pb-8 font-sora pt-10">
      {/*First Section*/}
      <div className="flex flex-col md:flex-row mx-0 md:mx-auto items-center md:items-start  md:space-x-6">
        <img className="w-52 h-52" src={BotImg} alt="BotImg" loading="lazy" />

        <div className="flex flex-col gap-4 lg:gap-2 ">
          <p className="border bg-[#F0F1F1] rounded-b-full rounded-r-full px-6 py-2 leading-loose text-[#101828] text-2xl tracking-normal">
            Hey, I'm Padi, your bestie for everyday wellness
          </p>
          <p className="border bg-[#F0F1F1] rounded-2xl px-6 py-2 leading-loose text-[#101828] text-2xl tracking-normal max-w-3xl mx-auto">
            I speak your language, understand your vibe, and I'm here to make
            healing feel human.
          </p>
        </div>
      </div>
      {/*Second Section*/}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col max-w-2xl text-center md:text-left items-center md:items-start">
          <div className="flex gap-2 pb-3 items-center">
            <Icon name="Sparkle" width={24} height={24} />
            <p className=" text-[#006AB4] text-base tracking-normal leading-normal">
              Chat
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-3">
            <h1 className="text-[#161B26] text-2xl md:text-4xl font-semibold ">
              Instant Support for Your Big Feelings (and the small ones too)
            </h1>
            <p className="text-[#333741] text-lg  leading-normal">
              Feeling somehow? Thinking too much? Want small comfort? I'm right
              here, talk to me
            </p>
          </div>
          <button className="border bg-[#006AB4] hover:bg-[#338FD1] rounded-full mt-6 text-white cursor-pointer items-center justify-center px-4 py-2 w-36">
            <p className="font-semibold">Chat with Me</p>
          </button>
        </div>
        {/*Image*/}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            className="w-full max-w-[300px] md:max-w-[364px] h-auto object-contain"
            src={Phone}
            alt="Phone"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;
