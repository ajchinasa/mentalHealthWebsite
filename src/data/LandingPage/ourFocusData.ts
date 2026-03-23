import couple from "@/assets/images/LandingPage/couple.jpg";
import employers from "@/assets/images/LandingPage/employers.jpg";
import individual from "@/assets/images/LandingPage/individual.jpg";
import children from "@/assets/images/LandingPage/children.jpg";

export interface OurFocusCardData {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  handleClick?: () => void;
}

export const ourFocusCardData: OurFocusCardData[] = [
  {
    image: individual,
    title: "Individual",
    description:
      "For adults navigating stress, identity, trauma, transitions, or simply life’s heavy days, your Padi is here to listen and support",
    buttonText: "Book a session",
  },
  {
    image: children,
    title: "Children",
    description:
      "Little minds deserve big care. We help children understand their feelings, build confidence, and develop emotional strength from an early age",
    buttonText: "Book a session",
  },
  {
    image: couple,
    title: "Couples",
    description:
      "Love grows when communication grows. We help people in relationships reconnect, laugh, talk deeply, and build healthier relationships",
    buttonText: "Book a session",
  },
  {
    image: employers,
    title: "Employers",
    description:
      "A healthier workplace begins with emotionally supported people. We help teams thrive through real, relatable mental wellness tools and confidential support",
    buttonText: "Book a session",
  },
];
