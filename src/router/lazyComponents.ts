import { lazy } from "react";

export const Home = lazy(() => import("../pages/home"));
export const Therapy = lazy(() => import("../pages/therapy"));
export const Partnerships = lazy(() => import("../pages/partnerships"));
export const Career = lazy(() => import("../pages/career"));
export const AboutUs = lazy(() => import("../pages/about-us"));
export const FAQ = lazy(() => import("../pages/faq"));
export const PrivacyPolicy = lazy(() => import("../pages/privacyPolicy"));
export const TermsAndCondition = lazy(
  () => import("../pages/terms-and-condition"),
);
export const Children = lazy(() => import("../pages/children"));
export const Challenges = lazy(() => import("../pages/challenges"));
export const Blog = lazy(() => import("../pages/blog"));
export const EAPServices = lazy(() => import("../pages/eap-services"));
