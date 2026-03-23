import { dropdownNav, NavMenus } from "@/data/navbar";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";

export const MobileNavbar: FC<{
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isScrolled: boolean;
  handleClick: (path: string) => void;
}> = ({ active, setActive, isScrolled, handleClick }) => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(250,250,250,0.7)"
            : "rgba(250,250,250,1)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0,0,0,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
          border: isScrolled ? "1px solid rgba(255,255,255,0.3)" : "none",
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="w-full lg:hidden fixed top-0 left-0 z-50 overflow-hidden px-5 py-4"
      >
        <div className="flex flex-row items-center justify-between">
          <Link to="/">
            <Icon name="Logo" height={48} width={48} />
          </Link>

          <button onClick={() => setNav(true)}>
            <Icon name="Menu" className="h-8 w-8" />
          </button>
        </div>
      </motion.div>
      {/* <div className="w-full lg:hidden overflow-hidden px-5 py-4 fixed top-0 left-0 bg-[#FAFAFA]">
        <div className="flex flex-row items-center justify-between">
          <Link to="/">
            <Icon name="Logo" height={48} width={48} />
          </Link>
          <button className="w-fit h-fit" onClick={() => setNav(true)}>
            <Icon name="Menu" className="h-8 w-8" />
          </button>
        </div>
      </div> */}
      <div
        className={
          nav
            ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70  lg:hidden backdrop-blur"
            : ""
        }
      >
        <div
          className={`bg-[#fff] ${nav
              ? "fixed w-full text-left  left-0 top-0 bottom-0 h-full px-5 py-8 ease-in duration-500 flex flex-col"
              : "fixed p-10 w-full left-[-100%] z-50 top-0 duration-1000 h-full ease-in"
            }`}
        >
          <div className="w-full flex justify-between items-center h-fit">
            <div className="cursor-pointer p-0" onClick={() => setNav(false)}>
              <Link to="/">
                {/* <Icon name="Logo" className="h-12 w-12" /> */}
                <Icon name="LogoText" height={40} width={157} />
              </Link>
            </div>
            <div className="cursor-pointer" onClick={() => setNav(false)}>
              <IoMdCloseCircleOutline size={30} className="text-[#384B6C]" />
            </div>
          </div>
          <div className="h-full flex flex-col justify-between py-8">
            <div className="flex flex-col gap-8 text-primary-blue justify-between h-fit mb-[50px]">
              {NavMenus.map((nav) => (
                <div key={nav} className="flex flex-col">
                  <div
                    className="w-full flex justify-between cursor-pointer"
                    onClick={() => setActive(active === nav ? "" : nav)}
                  >
                    <p className="text-xl font-semibold">{nav}</p>
                    {active === nav ? (
                      <IoMdArrowDropup className="text-2xl" />
                    ) : (
                      <IoMdArrowDropdown className="text-2xl" />
                    )}
                  </div>
                  <div
                    className={`flex flex-col gap-3 mt-3 transition-all duration-300 ease-in-out ${active === nav
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                  >
                    {dropdownNav[nav].map((dropdown) => (
                      <div
                        key={dropdown?.text}
                        className="cursor-pointer w-fit"
                        onClick={() => {
                          handleClick(dropdown?.path);
                          setNav(false);
                        }}
                      >
                        {dropdown.text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/therapy"
                rel="noopener noreferrer"
                className="w-full text-center rounded-xl py-3 text-xl bg-brand-primary-default text-white"
              >
                Book a session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
