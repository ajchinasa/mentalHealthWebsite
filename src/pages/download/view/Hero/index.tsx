import { IoLogoAppleAppstore } from "react-icons/io5";
import { GiWireframeGlobe } from "react-icons/gi";
import { Link } from "react-router-dom";
import productHeroImg from "@/assets/images/ProductPage/ProductHeroImage.svg";
import eclipseCircle from "@/assets/images/ProductPage/ellipse-circle.png";
import shadow from "@/assets/images/ProductPage/shadow.png";
import { PiBookmarkFill } from "react-icons/pi";

const HeroLinks = [
  {
    text: "iOS App",
    to: "https://apps.apple.com/ng/app/ourpadi/id6648793159",
    icon: IoLogoAppleAppstore,
    target: "_blank",
  },
  {
    text: "Web App",
    to: "https://app.friendnpal.com/",
    icon: GiWireframeGlobe,
    target: "_blank",
  },
  {
    text: "Book Now",
    to: "/book-therapy",
    icon: PiBookmarkFill,
    target: "_self",
  },
];

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat z-0">
      {/* Content on top */}
      <div
        // className="relative mt-10 md:mt-0 z-10 text-white mb-4 md:mb-10"
        className="relative z-10 text-white"
        style={{
          background:
            "linear-gradient(107.41deg, #3DCC98 -26.53%, #02BCB6 100.53%)",
        }}
      >
        {/* Image Eclipse*/}
        <img
          src={eclipseCircle}
          alt="Product Hero"
          className="absolute top-0 left-0 w-52 h-40 lg:w-80 lg:h-96 z-0"
        />
        {/* Text Content */}
        <div className="w-full md:max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="flex-1 mt-8 md:mt-0">
            <h3 className="text-semiBaseL md:text-large lg:text-semiLarge text-[#2D384D] font-semibold font-archivo w-full lg:w-5/6">
              Your Pocket-Sized Mental Health Companion
            </h3>
            <p className="text-base text-[#31405B] font-switzerRegular font-normal md:text-mediumB mb-6 ">
              FriendnPal provides quality mental health care without the long
              waitlists or high costs. From stress and anxiety to healing and
              growth, we are here, when you are ready
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {HeroLinks.map((link) => (
                <Link
                  to={link.to}
                  className="bg-[#353531] text-[#FFFFFF] px-5 py-3 rounded-md font-semibold transition-transform duration-300 hover:-translate-y-1 flex items-center gap-2 last:col-span-2 lg:last:col-span-1 justify-center"
                  target={link.target}
                  rel="noopener noreferrer"
                  key={link.to}
                >
                  <link.icon size={25} />
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="md:py-5 relative">
            <div
              className="absolute w-[480px] h-[703px] left-0 md:top-0 md:left-1/2 -translate-x-1/2 -z-10"
              style={{
                background: `url(${shadow})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundSize: "contain",
              }}
            />
            <img
              src={productHeroImg}
              alt="Product Hero"
              className="w-[476px] h-[680px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
