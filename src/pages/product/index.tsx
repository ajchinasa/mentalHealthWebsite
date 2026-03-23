import Introduction from "./view/Introduction";
import Solutions from "./view/Solutions";
import Hero from "./view/Hero";
import { getOSType } from "../../utils/getOSType";
import Header from "../whatsapp-bot/view/Header";
import CTA from "../../pages/home/view/CTA";

const Product = () => {
  const osType = getOSType();
  console.log("osType >>> ", osType);
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Restricted Width Container */}
      <div className="md:max-w-[1200px] mx-auto">
        <Introduction />
        <Solutions />
      </div>
      <Header />
      <div className="md:max-w-[1200px] mx-auto md:pt-10 px-5">
        <CTA />
      </div>
    </div>
  );
};

export default Product;
