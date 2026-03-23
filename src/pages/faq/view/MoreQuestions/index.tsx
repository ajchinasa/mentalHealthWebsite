import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import QuestionsForm from "../QuestionsForm";

const MoreQuestions = () => {
  return (
    <div className="w-full px-5 py-20">
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-14">
        <div className="w-full md:w-1/2 ">
          <div className="font-switzerRegular space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#161B26]">
              Have More Questions?
            </h2>
            <p className="text-[#31405B] font-normal text-sm lg:text-base">
              We&apos;re here to help. Fill out the form below and we&apos;ll
              get back to you shortly
            </p>
          </div>
          <div className="text-brand-secondary-customGrey800">
            <p className=" font-semibold">Want to connect directly?</p>
            <p className="flex gap-2 text-sm items-center mt-5">
              <MdOutlineMail />
              partnerships@friendnpal.com
            </p>
            <p className="flex gap-2 text-sm items-center mt-2">
              <PiPhoneCallBold />
              +234-456-789-0356
            </p>
          </div>
        </div>
        <QuestionsForm />
      </div>
    </div>
  );
};

export default MoreQuestions;
