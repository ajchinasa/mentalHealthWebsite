import heroImg from "@/assets/images/AboutUs/heroImg.png";

const Hero = () => {
  return (
    <div className="w-full relative flex bg-[#006AB4]">
      <div className="w-full lg:w-2/3 flex flex-col py-24 lg:py-24  pl-6 lg:pl-24 space-y-6 ">
        <h2 className="text-3xl lg:text-5xl text-[#FFFFFF] font-semibold">
          We help individuals and communities achieve resilient mental
          well-being
        </h2>
        <p className="text-base lg:text-[#F5F7FA] text-lg font-semibold  pr-6">
          We’re on a mission to empower Africans with affordable, culturally
          attuned mental health care. We believe that every individual deserves
          the support they need to thrive—no matter where they are on their
          journey
        </p>
      </div>
      <div className="absolute bottom-32 inset-0 md:static z-0 flex justify-end">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full  opacity-30 lg:opacity-100 lg:w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
