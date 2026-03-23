import AskedQuestions from "./view/AskedQuestions";
import MoreQuestions from "./view/MoreQuestions";

const FAQPage = () => {
  return (
    <div className="mt-16 w-full md:max-w-[1200px] mx-auto px-6 overflow-x-hidden">
      <AskedQuestions />
      <MoreQuestions />
    </div>
  );
};

export default FAQPage;
