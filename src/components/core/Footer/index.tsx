import { Link } from "react-router-dom";
import { dropdownNav, NavMenus } from "@/data/navbar";
import { Icon } from "../Icon/Icon";
import { IconNames } from "../Icon/types";

const Footer = () => {
  return (
    <div className="w-full px-3 md:px-10 pb-5 md:pb-10">
      <div
        className="w-full rounded-3xl max-w-[1200px] mx-auto py-10 md:py-20 px-10 md:px-20 space-y-12"
        style={{
          background: "linear-gradient(180deg, #006AB4 0%, #002E4E 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 text-white">
          <div className="space-y-8">
            <div className="flex items-center gap-1">
              <Icon name="Logo" width={68} height={58.47} />
              <p className="text-white text-2xl leading-[39px]">AuraRest</p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-6" />
                <p className="text-white leading-6">Support@mentalhealth.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Call" className="h-4 w-6" />
                <p className="text-white leading-6">+234-000-111-2222</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Location" className="h-4 w-6" />
                <p className="text-white leading-6">
                  4 mentalhealth str, therapy land estate, Ajah, Lagos State
                </p>
              </div>
            </div>
          </div>
          {NavMenus.map((heading) => (
            <div key={heading} className="">
              <p className="font-semibold text-lg md:text-semiBase mb-5">
                {heading}
              </p>
              <div className="flex flex-col gap-5 font-normal text-sm md:text-baseSm">
                {dropdownNav[heading].map((item) => (
                  <Link to={item.path} key={item.text}>
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p className="text-white text-xs leading-[130%]">
            &copy; 2025 — Copyright
          </p>
          <div className="flex space-x-6  text-white text-3xl mt-4">
            {[
              {
                label: "Linkedin",
                link: "#",
              },
              {
                label: "Facebook",
                link: "#",
              },
              {
                label: "Instagram",
                link: "#",
              },
              {
                label: "TwitterX",
                link: "#",
              },
              {
                label: "Youtube",
                link: "#",
              },
            ].map((IconItem) => {
              return (
                <Link
                  to={IconItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition hover:scale-105"
                  key={IconItem.label}
                >
                  <Icon
                    name={IconItem.label as IconNames}
                    className="h-6 w-6"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
