import { dropdownNav, NavMenus } from "@/data/navbar";
import { Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton/Button";
import { Icon } from "../Icon/Icon";
import ScrollToTop from "../ScrollToTop";
import { MobileNavbar } from "./MobileNavbar";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 80;

      setIsScrolled((prev) =>
        prev === shouldBeScrolled ? prev : shouldBeScrolled,
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <ScrollToTop />
      <div
        className={`sticky top-0 w-full z-50 py-2 ${isScrolled ? "" : "bg-[#FAFAFA]"}`}
      >
        {/* Desktop Navbar */}
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
          className="hidden lg:flex items-center justify-between py-4 md:max-w-[1200px] mx-auto md:px-5 rounded-xl overflow-x-hidden"
        >
          <Link to="/">
            <Icon name="LogoText" height={40} width={157} />
          </Link>
          <div className="flex flex-row gap-10 items-center">
            <Link to="/">Home</Link>
            {NavMenus.map((nav, idx) => (
              <Menu key={`${nav}_${idx}`}>
                {({ isOpen }) => (
                  <>
                    <MenuButton>
                      <div className="flex items-center">
                        <CustomButton
                          className="py-2.5"
                          text={nav}
                          onClick={() => null}
                          theme="none"
                        />
                        {isOpen ? (
                          <IoMdArrowDropup className="text-2xl" />
                        ) : (
                          <IoMdArrowDropdown className="text-2xl" />
                        )}
                      </div>
                    </MenuButton>
                    <Portal>
                      <MenuList className="text-sm font-campton">
                        {dropdownNav[nav].map((dropdown, idx) => (
                          <Link
                            to={dropdown?.path}
                            key={`${dropdown?.text}_${idx}`}
                          >
                            <MenuItem>{dropdown?.text}</MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </Portal>
                  </>
                )}
              </Menu>
            ))}
          </div>
          <div className="flex items-center gap-10">
            <Link to="/therapy">
              <CustomButton
                className="py-2.5"
                text={"Book a session"}
                onClick={() => null}
                theme="default"
              />
            </Link>
          </div>
        </motion.div>

        {/* Mobile Navbar */}
        <MobileNavbar
          active={active}
          setActive={setActive}
          handleClick={(path: string) => {
            navigate(path);
          }}
          isScrolled={isScrolled}
        />
      </div>
    </>
  );
};

export default Navbar;
