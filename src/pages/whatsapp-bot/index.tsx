import CallToAction from "./view/CallToAction";
import Header from "./view/Header";
import HowPalWorks from "./view/HowPalWorks";
import WhoCanUsePal from "./view/WhoCanUsePal";

const WhatsappBot = () => {
  return (
    <>
      <Header />
      <HowPalWorks />
      <WhoCanUsePal />
      <CallToAction />
    </>
  );
};

export default WhatsappBot;
