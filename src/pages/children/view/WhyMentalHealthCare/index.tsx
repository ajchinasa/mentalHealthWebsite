import spiralImg from "@/assets/images/ChildrenPage/spiralIMG.png";
import reasonImage1 from "@/assets/images/ChildrenPage/reasonImage1.png";
import reasonImage2 from "@/assets/images/ChildrenPage/reasonImage2.png";
import reasonImage3 from "@/assets/images/ChildrenPage/reasonImage3.png";
import reasonImage4 from "@/assets/images/ChildrenPage/reasonImage4.png";
import reasonImage5 from "@/assets/images/ChildrenPage/reasonImage5.png";

const reasons = [
  {
    img: reasonImage1,
    number: "1.",
    title: "Cultivating Resilience",
    text: "When children learn to understand and manage their emotions, they develop lifelong resilience that helps them overcome challenges.",
    position: "top-[-26px] left-[35%] transform -translate-x-6 ",
  },
  {
    img: reasonImage2,
    number: "2.",
    title: "Boosting Academic and Social Success",
    text: "A well-supported child is better equipped to focus in school, build strong friendships, and enjoy richer social interactions.",
    position: "top-[70px] -right-[300px]",
  },
  {
    img: reasonImage3,
    number: "3.",
    title: "Encouraging Healthy Expression",
    text: "Therapy offers a safe way for children to articulate their feelings, turning overwhelming emotions into constructive conversations.",
    position: "top-[35%] -right-[127%] transform -translate-x-1/2",
  },
  {
    img: reasonImage4,
    number: "4.",
    title: "Preventing Future Challenges",
    text: "Early support can help reduce the risk of anxiety, depression, and other emotional hurdles later in life—paving the way for balanced growth.",
    position: "bottom-[25%] left-[63%]",
  },
  {
    img: reasonImage5,
    number: "5.",
    title: "Strengthening Family Bonds",
    text: "By understanding your child’s emotional world, you can foster deeper connections and create a nurturing, communicative home environment.",
    position: "bottom-[5%] left-[80%] transform -translate-x-1/2",
  },
];

const WhyMentalHealthCare = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:pt-10 gap-4 md:gap-8 my-8">
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start gap-4">
        <h3 className="font-switzerSemiBold text-2xl lg:text-semiLargeXX leading-tight font-semibold">
          Why mental Health care is crucial for children
        </h3>
        <p className="font-switzerRegular font-normal text-base text-[#31405B]">
          Every child deserves a strong emotional foundation. FriendnPal was
          built:
        </p>
      </div>
      {/* Spiral Image and Reasons */}
      <div className="lg:w-2/3 relative w-full lg:max-w-md h-[550px] ">
        {/* Spiral layout: only visible on large screens */}
        <div className="hidden lg:block relative w-full h-full">
          {/* Image */}
          <img
            src={spiralImg}
            alt="spiral"
            className="w-full max-w-[75%] object-contain z-10"
          />

          {/* Positioned List */}
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} w-full text-sm`}
            >
              <div className="flex items-start">
                <p className="font-bold mr-2 text[#161B26] ">{item.number}</p>
                <div className="text-sm">
                  <p className="font-semibold text[#161B26] ">{item.title}</p>
                  <p className="font-normal text-[#31405B]">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stacked list: visible on small & medium only */}
        <div className="lg:hidden mt-4 space-y-4">
          {reasons.map((item, index) => (
            <div key={index} className="flex items-start">
              <img
                src={item.img}
                alt={item.title}
                className="w-14 h-14 object-cover shrink-0 rounded-lg"
              />
              <div className="pl-4">
                <p className="font-bold text-base text-[#161B26]">
                  {item.number} {item.title}
                </p>
                <p className="font-normal text-sm text-[#31405B] mt-1">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMentalHealthCare;
