import { FaCircleCheck } from "react-icons/fa6";
import team from "@/assets/images/career/team.jpg";
const WhyJoinUs = () => {
  const why = [
    {
      point: "Innovative Environment",
      desc: "Collaborate with experts in mental health and technology",
    },
    {
      point: "Meaningful Impact",
      desc: "Help shape solutions that empower communities and change lives",
    },
    {
      point: "Inclusive Culture",
      desc: "Be part of a team that values diversity, creativity, and personal growth",
    },
  ];
  return (
    <div className="px-5 py-10 md:py-20">
      <div className="w-full md:max-w-[1200px] mx-auto flex flex-col md:flex-row gap-14 items-center">
        <img src={team} alt="" className="w-full md:w-1/3 rounded-xl" />
        <div className="w-full">
          <p className="text-4xl font-bold">Why Work With Us</p>
          <ul className="flex flex-col gap-3 mt-3">
            {why.map((each) => (
              <li className="flex gap-3 items-center" key={each.point}>
                <FaCircleCheck className="text-[#006AB4]" />
                <p>
                  <b>{each.point}: </b>
                  {each.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
