import { useState } from "react";
import {
  eapSize,
  Large_EAP_Pricing,
  Small_EAP_Pricing,
} from "@/data/eap_service";
import PricingCard from "./PricingCard";

const EAPPricing = () => {
  const [billingCycle, setBillingCycle] = useState("small");
  return (
    <div className="w-full px-5 py-20" id="pricing">
      <div className="w-full md:max-w-[1200px] mx-auto flex flex-col gap-10">
        <div className="w-full lg:max-w-[800px] flex flex-col gap-5 mx-auto">
          <p className="capitalize font-bold text-brand-secondary-darkGrey text-2xl md:text-4xl text-center">
            EAP packages for large organizations
          </p>
          <p className="text-[#31405B] text-center">
            Flexible mental health support designed for large teams—easy to
            scale, simple to use, and built to keep your workforce happy,
            healthy, and productive
          </p>
        </div>
        <div>
          <div className="w-fit flex mx-auto bg-white rounded-lg px-4 py-2 shadow-sm mb-12">
            {eapSize.map((size) => (
              <button
                key={size}
                onClick={() => setBillingCycle(size)}
                className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                  billingCycle === size
                    ? "bg-[#F5F7FA] font-semibold shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {billingCycle === "large"
              ? Large_EAP_Pricing?.map((pricing, index) => (
                  <div
                    key={`large-${pricing.tier || index}`}
                    className="pricing-card-enter"
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <PricingCard pricing={pricing} />
                  </div>
                ))
              : Small_EAP_Pricing?.map((pricing, index) => (
                  <div
                    key={`small-${pricing.tier || index}`}
                    className="pricing-card-enter"
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <PricingCard pricing={pricing} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EAPPricing;
