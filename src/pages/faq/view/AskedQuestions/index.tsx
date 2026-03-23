import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { faqData } from "@/data/faqData";
import { AnimatePresence, motion } from "framer-motion";

const AskedQuestions = () => {
  const [openIndexes, setOpenIndexes] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndexes(openIndexes === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-8 text-center">
          <h3 className="text-4xl font-semibold text-[#161B26] font-switzerRegular">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 mt-2 text-normal text-xl">
            Everything you need to know about FriendnPal
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndexes === index;
            return (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-center justify-between py-3 font-medium text-lg text-[#161B26]"
                >
                  {faq.question}
                  {isOpen ? (
                    <CiCircleMinus className="w-5 h-5" />
                  ) : (
                    <CiCirclePlus className="w-5 h-5" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      key="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-sm text-[#31405B] text-normal pl-2 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;
