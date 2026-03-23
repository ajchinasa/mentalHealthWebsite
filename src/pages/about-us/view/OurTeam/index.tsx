import estherImg from "@/assets/images/AboutUs/estherImg.png";
import kayodeImg from "@/assets/images/AboutUs/kayodeImg.png";

const OurTeam = () => {
  return (
    <div className="w-full flex flex-col gap-10 font-switzerRegular mt-14 mb-4 md:mb-12">
      <div className="flex flex-col items-center  md:px-36 text-center">
        <h3 className="font-semibold text-2xl lg:text-4xl text-[#161B26]">
          Our Team
        </h3>
        <p className="text-[#31405B] font-normal text-sm lg:text-lg mt-4">
          Behind FriendnPal is a dedicated team of mental health professionals,
          technology experts, and compassionate support specialists who share
          one vision: to create a world where mental wellness is a priority for
          everyone.
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
        <img
          src={estherImg}
          alt="Esther Eruchie"
          className="w-full md:w-64 h-auto object-cover"
        />
        <img
          src={kayodeImg}
          alt="Kayode Adeshina"
          className="w-full md:w-64 h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default OurTeam;
