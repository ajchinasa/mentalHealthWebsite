import { MdOutlineMail } from "react-icons/md";

import { PiPhoneCallBold } from "react-icons/pi";
import AwardsForm from "../FormSection/Form";

const MakeADifference = () => {
  return (
    <div className="w-full py-10 md:py-12 lg:py-20">
      <div className="w-full flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="font-switzerRegular space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#161B26]">
              Ready to Make a Difference?
            </h2>
            <p className="text-[#31405B] font-normal text-sm lg:text-base">
              Join AuraRest in reshaping mental healthcare—expand access,
              empower individuals, and build solutions that matter. Whether
              you&apos;re an organization, provider, or supporter, your
              partnership drives a healthier, happier world.
            </p>
            <p className="text-[#31405B] font-normal text-sm lg:text-base">
              Let&apos;s start the conversation—fill out the form below, and our
              team will reach out to explore the possibilities. Let&apos;s build
              something extraordinary, together.
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
              +234-456-789-0356
            </p>
          </div>
        </div>
        <AwardsForm />
      </div>
    </div>
  );
};

export default MakeADifference;
