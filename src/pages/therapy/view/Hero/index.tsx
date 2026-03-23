import heroImg from "@/assets/images/Therapy/hero.png";

const Home = () => {
  return (
    <div className="w-full flex flex-col md:flex-row lg:px-24 gap-6 lg:gap-28">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-7">
        <h1 className="text-3xl lg:text-6xl font-semibold text-[#000000]">
          Online Therapy that’s Truly for Everyone
        </h1>
        <p className="font-medium text-sm md:text-base text-[#2D384D]">
          FriendnPal provides quality mental health care without the long
          waitlists or high costs.From stress and anxiety to healing and
          growth—we’re here, when you're ready.
        </p>
      </div>
      {/* Hero Section Image*/}
      <div className="w-full md:w-1/2">
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Home;
