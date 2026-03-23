import { IPricing } from "data/eap_service";
import list_icon from "@/assets/images/EAP/list_icon.png";

const PricingCard = ({ pricing }: { pricing: IPricing }) => {
  return (
    <div className="bg-white rounded-xl flex flex-col h-[500px]">
      <div className="px-3 py-5 border-b h-[180px]">
        <p className="text-brand-secondary-customGrey900 font-bold text-xl mb-3">
          {pricing.tier}
        </p>
        <p className="text-[#384B6C] text-sm">{pricing.duration} months</p>
        <p className="text-[#384B6C] text-sm">
          Number of employees - {pricing.emloyeeCount}
        </p>
        <p className="text-sm mt-5">
          <span className="text-3xl text-brand-secondary-customGrey900 font-bold">
            &#8358;{pricing.price.toLocaleString()}
          </span>{" "}
          Billed once
        </p>
      </div>
      <div className="px-3 py-5 border-b h-full">
        <p className="font-bold text-sm">FEATURES</p>
        <p className="text-sm">
          Everything in{" "}
          <span className="lowercase font-bold">{pricing.tier}</span> plan
          includes....
        </p>
        <ul className="flex flex-col text-base md:text-sm my-3 gap-4">
          {pricing.features.map((feature) => (
            <li className="flex gap-2 items-start">
              <img src={list_icon} alt="list_icon" className="w-5 h-auto" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="p-7 h-[110px]">
        <button className="bg-brand-primary-default rounded-lg text-white w-full py-3 font-bold">
          Get Started
        </button>
      </div> */}
    </div>
  );
};

export default PricingCard;
