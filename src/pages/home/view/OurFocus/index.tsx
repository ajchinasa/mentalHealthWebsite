import Card from "@/components/LandingPage/OurFocusCard";
import {
  ourFocusCardData,
  OurFocusCardData,
} from "@/data/LandingPage/ourFocusData";

import Modal from "@/components/core/Modal";
import qrCode from "@/assets/images/qrCodeImg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { Icon } from "@/components/core/Icon/Icon";

const OurFocus = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const getHandleClick = (index: number) => {
    if (index === 0) {
      // This is the "Individual" card
      return () => setOpen(!open);
    } else if (index === 1) {
      return () => navigate("/children");
    } else if (index === 2) {
      return () => navigate("/eap-services");
    } else {
      return () => navigate("/therapy");
    }
  };

  const cardData: OurFocusCardData[] = ourFocusCardData.map((card, index) => ({
    ...card,
    handleClick: getHandleClick(index),
  }));

  // Split card data into rows
  const firstRow = cardData.slice(0, 2);
  const secondRow = cardData.slice(2, 4);

  return (
    <div className="flex flex-col">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row w-full pt-10 lg:pt-14 space-y-2 md:space-y-0 font-sora">
        <div className="flex flex-col w-full md:w-1/2 space-y-6">
          <div className="flex gap-2">
            <Icon name="Sparkle" width={24} height={24} />
            <h1 className="text-[#006AB4] text-base">Who we Support</h1>
          </div>
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Who We Walk With
          </h1>
        </div>
        <p className="w-full md:w-1/2 text-[#333741] text-base">
          AuraRest supports every kind of emotional journey; with warmth,
          respect, and cultural understanding
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-6 mt-6 md:mt-12">
        {/* FIRST ROW - first image wider */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-[1.4]">
            <Card {...firstRow[0]} />
          </div>
          <div className="flex-[1]">
            <Card {...firstRow[1]} />
          </div>
        </div>

        {/* SECOND ROW - second image wider */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-[1]">
            <Card {...secondRow[0]} />
          </div>
          <div className="flex-[1.4]">
            <Card {...secondRow[1]} />
          </div>
        </div>
      </div>

      {/* Modal for Individual card */}
      <Modal open={open} onClose={() => setOpen(false)} closeIcon={false}>
        <div className="p-4 flex flex-col gap-5">
          <IoLogoAppleAppstore
            className="text-brand-secondary-darkGrey mx-auto"
            size={30}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-brand-secondary-darkGrey font-bold text-xl text-center">
              Scan to Download
            </h1>
            <p className="text-brand-secondary-extraLightBlue text-center mx-auto">
              Position your phone camera within the frame and follow the link to
              download.
            </p>
          </div>
          <img src={qrCode} className="w-[70%] mx-auto" alt="QR Code" />
          <p className="text-brand-secondary-extraLightBlue text-center mx-auto">
            Download the AuraRest app and sign up or log in with your account
            details.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default OurFocus;
