import HeroImg from "@/assets/images/Awards_&_certifications/AwardsHeroImg.png";
import Polygon from "@/assets/images/Awards_&_certifications/Polygon.png";

const AwardsHero = () => {
  return (
    <section className="relative px-6 lg:px-0 py-12 mt-10 lg:mt-0">
      {/*Polygon */}
      <img
        src={Polygon}
        alt="Decorative polygon shape"
        className="hidden lg:block absolute top-0 left-0 w-24 h-24 md:w-80 md:h-80"
      />

      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">
        {/* Text Content */}
        <article className=" max-w-2xl ">
          <h1 className="text-3xl lg:text-5xl font-semibold text-[#161B26] mb-6 leading-tight">
            Recognized for Impact, Driven by Purpose
          </h1>
          <p className="text-[#31405B] text-base lg:text-lg font-normal">
            At FriendnPal, our mission to make mental health support accessible
            and inclusive across Africa has earned recognition from leading
            organizations. These awards reflect our unwavering commitment to
            innovation, empathy, and social impact in mental wellness.
          </p>
        </article>

        {/* Image */}
        <div className=" w-full">
          <img
            src={HeroImg}
            alt="Awards and Certifications at FriendnPal"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsHero;
