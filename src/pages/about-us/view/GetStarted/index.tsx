import mobileImg from "@/assets/images/AboutUs/Wood-Hand.png";
import { Link } from "react-router-dom";
import appStoreBtnImg from "@/assets/images/appStorebtn.png";
// import googlePlayBtnImg from "@/assets/images/googlePlaybtn.png"
import shadow from "@/assets/images/AboutUs/shadow.png";

const GetStarted = () => {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-auto md:pt-14 gap-6 md:gap-0 bg-gradient-to-t from-[#002E4E] to-[#006AB4] px-6 lg:px-10 mb-6 lg:mb-10">
      {/* Text Section */}
      <div className="flex flex-col justify-center w-full lg:w-2/3 h-auto mt-2 md:mt-0 lg:mt-14 gap-6 text-white lg:px-10">
        <h3 className="font-semibold text-4xl font-switzerRegular text-white">
          Get Started with AuraRest
        </h3>
        <p className="font-normal font-switzerRegular text-base md:text-lg text-[#F5F7FA] w-full md:w-11/12">
          Ready to take the first step toward a brighter, healthier future?
          Download the AuraRest app on the Play Store or Apple Store and join
          a community that cares. Together, we can break barriers, transform
          lives, and build a legacy of mental wellness.
        </p>

        <div className="flex gap-6 md:gap-2 mt-4 justify-center md:justify-start">
          {/* <Link to="#">
            <button
              className="flex items-center justify-center transform transition hover:scale-105"
              aria-label="Download from Google Play"
            >
              <img
                src={googlePlayBtnImg}
                alt="Google Play"
                className="w-full md:w-32"
              />
            </button>
          </Link> */}

          <Link
            to="#"
            target="_blank"
          >
            <button
              className="flex items-center justify-center transform transition hover:scale-105"
              aria-label="Download from App Store"
            >
              <img
                src={appStoreBtnImg}
                alt="App Store"
                className="w-full md:w-32"
              />
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center lg:flex-none lg:items-start lg:justify-start mt-4 md:mt-0">
        {/* Show only on small screens */}
        <img
          src={mobileImg}
          alt="Mobile Illustration"
          className="block md:hidden max-w-[300px]"
        />

        {/* Show only on medium and large screens */}
        <img
          src={shadow}
          alt="Shadow Illustration"
          className="hidden md:block max-w-[300px] md:max-w-sm"
        />
      </div>
    </div>
  );
};

export default GetStarted;
