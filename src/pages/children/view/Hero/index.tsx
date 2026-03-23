import { useState } from "react";
import productHeroImg from "@/assets/images/ChildrenPage/chlidrenPageHeroImg.png";
import eclipseCircle from "@/assets/images/ChildrenPage/Ellipse.png";
import shadow from "@/assets/images/ChildrenPage/shadow.png";
import Modal from "@/components/core/Modal";
import qrCode from "@/assets/images/qrCodeImg.png";
import { IoLogoAppleAppstore } from "react-icons/io5";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-cover bg-center bg-no-repeat z-0 md:mt-28 lg:mt-0">
      {/* Content on top */}
      <div className="relative mt-20 md:mt-0 z-10 text-white py-2 px-6 md:px-10 mb-4 md:mb-10 ">
        {/* Image Eclipse */}
        <img
          src={eclipseCircle}
          alt="Product Hero"
          className=" absolute top-0 left-0 w-[75%] h-[73%] md:w-[30%] md:h-[83%] lg:w-[24%] lg:h-[80%] z-0 opacity-70"
        />

        <div className="w-full md:max-w-[1200px] px-6  mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl md:text-semiBas lg:text-semiLarge text-[#2D384D] font-semibold font-archivo w-full lg:w-5/6">
              Nurturing Young Minds, Building Brighter Futures
            </h3>
            <p className="text-sm text-[#31405B] font-switzerRegular font-normal md:text-base lg:text-mediumB mb-6 text-justify">
              We created a safe space where your child can express their
              feelings and flourish emotionally. Our therapy sessions are
              designed to empower your child to navigate their inner world with
              confidence.
            </p>
            <button
              className="bg-[#006AB4] text-[#FFFFFF] px-6 py-3 rounded-md font-semibold transition-transform duration-300 hover:-translate-y-1"
              onClick={() => setOpen(true)}
            >
              Start your journey today!
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 z-10 mt-8 md:mt-0 relative">
            {/* Shadow Behind Image */}
            <img
              src={shadow}
              alt="shadow"
              className="hidden md:block absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[28%] md:w-[60%] md:h-[140%] z-0 opacity-80"
            />

            {/* Main Product Image */}
            <img
              src={productHeroImg}
              alt="Product Hero"
              className=" relative w-full h-auto lg:max-w-2xl md:max-w-xl max-w-md z-10 lg:mt-10"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-4 flex flex-col gap-5 ">
          <div className="flex flex-col gap-4">
            {/* <div className="flex gap-2 w-fit mx-auto">
              <img className="w-10 h-10" src={appleCircle} alt="Apple" />
              <img className="w-10 h-10" src={androidCircle} alt="Android" />
            </div> */}
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
            Download the OurPadi app and sign up or log in with your account
            details.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
