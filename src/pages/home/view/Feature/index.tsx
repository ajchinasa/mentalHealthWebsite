import featuresImg1 from "@/assets/images/featuresImg1.png";
import featuresImg2 from "@/assets/images/featuresImg2.png";
import featuresImg3 from "@/assets/images/featuresImg3.png";
import featuresImg4 from "@/assets/images/featuresImg4.png";

const Feature = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center py-10  space-y-4 md:space-y-0 md:space-x-8 md:mt-8">
        <h4 className="flex font-semibold text-semiMedium lg:text-semiLargeXX md:w-1/2 text-brand-secondary-darkGrey font-archivo">
          Your Complete Partner for your Mental Health Journey
        </h4>
        <p className="font-normal font-switzerRegular text-baseSm lg:text-semiSmall md:w-1/2 text-brand-secondary-MidDarkGrey">
          Discover a holistic range of tools and resources crafted to nurture
          your mental health, build resilience, and provide compassionate,
          personalized care that fits seamlessly into your life.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto gap-2">
        <div className="w-full md:w-[58%] flex flex-col gap-3 bg-white rounded-xl border-[1px] p-5">
          <img
            src={featuresImg1}
            alt="Features"
            className="w-full h-[340px] object-cover object-center"
          />
          <h1 className="text-brand-secondary-darkGrey font-semibold text-xl">
            AI Chatbot
          </h1>
          <p className="text-brand-secondary-extraLightBlue">
            Chat with a caring AI companion anytime. Get personalized, 24/7
            support that listens, understands, and connects you with a therapist
            when needed.
          </p>
        </div>
        <div className="w-full md:w-[42%] flex flex-col gap-3 bg-white rounded-xl border-[1px] p-5">
          <img
            src={featuresImg2}
            alt="Features"
            className="w-full h-[340px] object-cover object-center"
          />
          <h1 className="text-brand-secondary-darkGrey font-semibold text-xl">
            Therapy Booking
          </h1>
          <p className="text-brand-secondary-extraLightBlue">
            Access mental health support easily—explore therapy packages, read
            testimonials, and book in a few clicks
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto gap-2 mt-2 md:mb-14">
        <div className="w-full md:w-[42%] flex flex-col gap-3 bg-white rounded-xl border-[1px] p-5">
          <img
            src={featuresImg3}
            alt="Features"
            className="w-full h-[340px] object-cover object-center"
          />
          <h1 className="text-brand-secondary-darkGrey font-semibold text-xl">
            Daily Mood Check-in
          </h1>
          <p className="text-brand-secondary-extraLightBlue">
            Track your mood effortlessly with emojis and notes, helping you
            reflect and grow over time.
          </p>
        </div>
        <div className="w-full md:w-[58%] flex flex-col gap-3 bg-white rounded-xl border-[1px] p-5">
          <img
            src={featuresImg4}
            alt="Features"
            className="w-full h-[340px] object-cover object-center"
          />
          <h1 className="text-brand-secondary-darkGrey font-semibold text-xl">
            Communities
          </h1>
          <p className="text-brand-secondary-extraLightBlue">
            Join a supportive community to share experiences, build connections,
            and find empowerment in a safe space
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
