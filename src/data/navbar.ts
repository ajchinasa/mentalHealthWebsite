export const NavMenus: string[] = ["Products", "Resources", "Company"];

export const dropdownNav: { [key: string]: { text: string; path: string }[] } =
  {
    Products: [
      { text: "OurPadi", path: "#" },
      { text: "Pal", path: "#" },
      { text: "EAP Services", path: "#" },
      { text: "Partnerships", path: "#" },
    ],
    Resources: [
      { text: "Mental Health and Children", path: "#" },
      {
        text: "Challenges Facing Mental Healthcare in Africa",
        path: "#",
      },
      { text: "Blog", path: "#" },
    ],
    // Media: [
    //   { text: "Gallery", path: "#" },
    //   { text: "Award and Certifications", path: "#" },
    // ],
    Company: [
      { text: "Careers", path: "#" },
      { text: "About Friendnpal", path: "#" },
      { text: "F.A.Q.", path: "#" },
      { text: "Privacy Policy", path: "#" },
      // { text: "Terms and Conditions", path: "/terms-and-condition" },
      { text: "Terms and Conditions", path: "#" },
    ],
  };
