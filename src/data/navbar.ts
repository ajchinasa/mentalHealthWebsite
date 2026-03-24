export const NavMenus: string[] = ["Products", "Resources", "Company"];

export const dropdownNav: { [key: string]: { text: string; path: string }[] } =
  {
    Products: [
      { text: "OurPadi", path: "#" },
      { text: "Pal", path: "#" },
      { text: "EAP Services", path: "/eap-services" },
      { text: "Partnerships", path: "/partnerships" },
    ],
    Resources: [
      { text: "Mental Health and Children", path: "/Children" },
      {
        text: "Challenges Facing Mental Healthcare in Africa",
        path: "/Challenges",
      },
      { text: "Blog", path: "/blog" },
    ],
    // Media: [
    //   { text: "Gallery", path: "#" },
    //   { text: "Award and Certifications", path: "#" },
    // ],
    Company: [
      { text: "Careers", path: "/career" },
      { text: "About AuraRest", path: "/about-us" },
      { text: "F.A.Q.", path: "/faq" },
      { text: "Privacy Policy", path: "/privacyPolicy" },
      { text: "Terms and Conditions", path: "/terms-and-condition" },
    ],
  };
