import { Link } from "react-router-dom";

const EAPHero = () => {
  return (
    <div className="bg-eap_service w-full bg-no-repeat bg-center bg-cover px-5 py-40 md:py-24">
      <div className="w-full md:max-w-[1200px] mx-auto text-white">
        <div className="w-full lg:w-[900px] flex flex-col gap-5">
          <p className="font-bold text-3xl md:text-5xl leading-tight w-full">
            Empowering Workplaces with Compassionate Mental Health Care
          </p>
          <p className="md:text-xl w-full text-justify">
            FriendnPal&apos;s EAP supports a healthier, happier workforce with
            personalized mental health care. Our evidence-based solutions help
            employees manage stress, overcome challenges, and stay balanced
          </p>
          <Link
            to="/eap-services#pricing"
            className="px-6 py-3 bg-[#FFFFFF66] w-fit rounded-lg hover:bg-gray-200 hover:text-brand-secondary-MidDarkGrey transition duration-500"
          >
            Explore our services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EAPHero;
