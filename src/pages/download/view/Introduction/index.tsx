import connect from "@/assets/images/ProductPage/connect.png";
import signUp from "@/assets/images/ProductPage/signUpImg.png";
import supportPathImg from "@/assets/images/ProductPage/supportPathImg.png";
import Partners from "../../../home/view/Partners/index";

const Introduction = () => {
  const introData = [
    {
      image: signUp,
      title: "1. Create Your Account",
      paragraph:
        "Embark on your journey to better mental well-being in just a few simple steps. Download the app, set up your account with a few basic details. It’s secure, straightforward, and opens the door to a world of personalized support.",
    },
    {
      image: supportPathImg,
      title: "2. Choose Your Support Path",
      paragraph:
        "Your mental health journey is uniquely yours. Select the type of care you need—whether it's mood tracking, mindfulness exercises, or community connections—and let OurPadi tailor the right tools and resources just for you.",
    },
    {
      image: connect,
      title: "3. Connect and Grow",
      paragraph:
        "Once you're set-up, you're never alone. Explore our network of mental health professionals, supportive groups, and enriching resources. Share your story, learn from others, and build connections with people who truly understand.",
    },
  ];

  return (
    <div className="pl-5 pr-4">
      {/* Heading and Description */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:pt-10">
        {/* Partners Component */}
        <div className="block sm:hidden">
          <Partners />
        </div>
        <h4 className="font-semibold text-MediumX md:text-semiLargeXX text-brand-secondary-darkGrey font-archivo w-full md:w-1/2 pt-4 md:pt-0">
          Getting started with OurPadi
        </h4>
        <p className="font-normal text-slightlySmall md:text-medium font-switzerRegular text-brand-secondary-MidDarkGrey w-full md:w-1/2">
          Begin your journey with OurPadi today, and discover a community that
          cares about your well-being every step of the way.
        </p>
      </div>

      {/* Rendering the Steps */}
      <div className="flex flex-col lg:flex-row mt-8 gap-8 w-full pb-10">
        {introData.map((intro, index) => (
          <div
            key={index}
            className="flex flex-col w-full lg:w-1/3 items-start gap-4 p-4 rounded-lg  bg-[#FFFFFF]"
          >
            {/* Image */}
            <img
              src={intro.image}
              alt={intro.title}
              className="w-full h-auto object-cover"
            />

            {/* Text Content */}

            <h5 className="font-semibold text-mediumP md:text-semiLargeXX lg:text-2xl text-brand-secondary-customGrey900 font-switzerRegular px-2">
              {intro.title}
            </h5>
            <p className="text-baseS md:text-MediumX lg:text-baseS text-[#27272A] font-switzerRegular font-normal">
              {intro.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
