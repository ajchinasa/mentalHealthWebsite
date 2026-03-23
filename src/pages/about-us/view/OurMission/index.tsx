import ourMissionImg from "@/assets/images/AboutUs/ourMissionImg.png";

const OurMission = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row py-14 gap-10 lg:gap-20">
      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col space-y-6 justify-center">
        <h3 className="text-2xl lg:text-4xl text-[#161B26] font-semibold text-center lg:text-left font-archivo">
          Our Mission
        </h3>
        <p className="text-sm text-[#31405B] lg:text-base font-semibold font-switzerRegular">
          We are committed to creating a mentally aware, resilient, and
          inclusive community. Our mission is simple: empower individuals with
          accessible, user-friendly tools that bring daily mental health support
          right to their fingertips. By breaking down barriers and challenging
          stigma, we help people build strength and self-awareness—one
          conversation at a time.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-end">
        <img
          src={ourMissionImg}
          alt="Image"
          className="w-full max-w-md lg:max-w-none"
        />
      </div>
    </div>
  );
};

export default OurMission;
