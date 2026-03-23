import Partners from "../home/view/Partners";
import EmployeeCare from "./view/EmployeeCare";
import EAPHero from "./view/Hero";
import Impact from "./view/Impact";
import PartnershipSection from "./view/Partnership";
import EAPPricing from "./view/Pricing";
import Unlock from "./view/Unlock";

const EAPServices = () => {
  return (
    <>
      <EAPHero />
      <EmployeeCare />
      <Impact />
      <div className="w-full md:max-w-[1200px] mx-auto px-5 py-10">
        <Partners variant="col" />
      </div>
      <EAPPricing />
      <Unlock />
      <PartnershipSection />
    </>
  );
};

export default EAPServices;
