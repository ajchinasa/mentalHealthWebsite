import { Icon } from "@/components/core/Icon/Icon";
import DownloadButtons from "@/components/DownloadButtons";
// import { useLocation } from "react-router-dom";
// import ourPadiLogo from "@/assets/images/ourPadiLogo.png";
// import logoText from "../../../../assets/icons/logo_text.svg";

const CTA = () => {
  // const location = useLocation();
  // const { pathname } = location;

  // const isOurPadi = ["/", "/product", "/whatsapp-bot", "/challenges"].includes(
  //   pathname,
  // );
  return (
    <div>
      <div className="relative flex flex-col md:flex-row w-full h-auto md:pt-14 gap-6 md:gap-0 mb-10 md:mb-14">
        <div className="flex flex-col w-full lg:w-2/3 h-auto mt-14 md:mt-0 lg:mt-14 gap-6">
          {/* Conditionally render our padi image */}
          {/* <img
            src={logoText}
            alt="AuraRest Logo"
            className="w-[180px] h-auto object-contain"
          /> */}

          <h1 className="font-semibold text-4xl text-[#161B26]">Why Now?</h1>
          <p className="font-normal text-lg text-[#1F242F] w-full md:w-11/12">
            Globally, too many people still struggle in silence.Stigma, cost,
            and cultural expectations keep many from seeking help. AuraRest is
            changing that; by making emotional care warm, familiar, and truly
            accessible. AuraRest, Your Padi in Wellness..
          </p>

          <DownloadButtons />
        </div>

        {/* CTA Prompt Image */}
        <Icon name="AfricaMap" className="w-full md:w-1/2 h-full" />
      </div>
    </div>
  );
};

export default CTA;
