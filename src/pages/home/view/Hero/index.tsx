import { Icon } from "@/components/core/Icon/Icon";
import { IconNames } from "@/components/core/Icon/types";
import DownloadButtons from "@/components/DownloadButtons";

const LeftIcons = [
  { name: "HealthCare", className: "" },
  { name: "Coins", className: "self-start lg:-translate-x-24" },
  { name: "BubbleChat", className: "self-end lg:translate-x-28" },
];
const RightIcons = [
  { name: "UserGroup", className: "" },
  { name: "Calendar", className: "self-start lg:translate-x-24" },
  { name: "Playlist", className: "self-end lg:-translate-x-28" },
];

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#FAFAFA] px-6 md:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-32 ">
        <div className="flex flex-row lg:flex-col gap-20 items-center">
          {LeftIcons.map(({ name, className }) => (
            <div key={name} className={className}>
              <Icon name={name as IconNames} height={67} width={67} />
            </div>
          ))}
        </div>
        <div className="w-full max-w-[648px] text-center">
          <h3 className="font-semibold text-large lg:text-extraLarge text-neutral-gray-900">
            FriendnPal, Your Padi in{" "}
            <span className="text-[#006AB4]">Wellness</span>
          </h3>
          <p className="font-normal text-baseSmall lg:text-mediumB pb-2 text-neutral-gray-800">
            Because even strong people need a Padi sometimes. Life can get
            overwhelming, and sometimes you just need someone who gets it.
          </p>
          <DownloadButtons className="w-fit mx-auto " />
        </div>
        <div className="flex flex-row lg:flex-col gap-20 items-center">
          {RightIcons.map(({ name, className }) => (
            <div key={name} className={className}>
              <Icon name={name as IconNames} height={67} width={67} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
