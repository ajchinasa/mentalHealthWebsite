import { useState } from "react";
import { IoLogoAppleAppstore } from "react-icons/io5";
import productHeroImg from "@/assets/images/ProductPage/ProductHeroImage.svg";
import eclipseCircle from "@/assets/images/ProductPage/ellipse-circle.png";
import shadow from "@/assets/images/ProductPage/shadow.png";
import qrCode from "@/assets/images/qrCodeImg.png";
import Modal from "@/components/core/Modal";

const Hero = () => {
  const [open, setOpen] = useState<boolean>(false);
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
              Explore Our Suite of Mental Health Resources
            </h3>
            <p className="text-base text-[#31405B] font-switzerRegular font-normal md:text-mediumB mb-6 ">
              OurPadi empowers you to prioritize your mental well-being with
              expertly curated products and services. Designed for everyone,
              affordable, and always accessible.
            </p>
            <button
              className="bg-[#353531] text-[#FFFFFF] px-6 py-3 rounded-md font-semibold transition-transform duration-300 hover:-translate-y-1"
              onClick={() => setOpen(true)}
            >
              Start your journey today!
            </button>
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

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-4 flex flex-col gap-5 ">
          <div className="flex flex-col gap-4">
            <IoLogoAppleAppstore
              className="text-brand-secondary-darkGrey mx-auto"
              size={30}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-brand-secondary-darkGrey font-bold text-xl text-center">
                Scan to Download
              </h1>
              <p className="text-brand-secondary-extraLightBlue text-center mx-auto">
                Position your phone camera within the frame and follow the link
                to download.
              </p>
            </div>
          </div>
          <img src={qrCode} className="w-[70%] mx-auto" alt="QR Code" />
          <p className="text-brand-secondary-extraLightBlue text-center mx-auto">
            Download the Aura app and sign up or log in with your account
            details.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
