import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import PartnershipForm from "./PartnershipForm";

const PartnershipSection = () => {
  return (
    <div className="w-full px-5 py-20">
      <div className="w-full md:max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-24 md:items-start">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="text-2xl md:text-4xl font-bold text-brand-secondary-customGrey950">
              Partner with AuraRest for Employee Well-being
            </p>
            <p className="text-brand-secondary-MidDarkGrey">
              Fill in your details and our partnership team will reach out with
              tailored solutions for your organization&apos;s mental health
              needs
            </p>
          </div>
          <div className="text-brand-secondary-customGrey800">
            <p className=" font-semibold">Want to connect directly?</p>
            <p className="flex gap-2 text-sm items-center mt-5">
              <MdOutlineMail />
              partnerships@AuraRest.com
            </p>
            <p className="flex gap-2 text-sm items-center mt-2">
              <PiPhoneCallBold />
              +234-905-557-0782
            </p>
          </div>
        </div>
        <PartnershipForm />
      </div>
    </div>
  );
};

export default PartnershipSection;
