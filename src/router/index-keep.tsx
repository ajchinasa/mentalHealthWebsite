import { createHashRouter, RouteObject } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import AboutUs from "@/pages/about-us";
import Blog from "@/pages/blog";
import ViewBlog from "@/pages/blog/view/ViewBlog";
import Career from "@/pages/career";
import Children from "@/pages/children";
import ChildrenTherapyForm from "@/pages/childrenTherapyForm";
import EAPServices from "@/pages/eap-services";
import FAQPage from "@/pages/faq";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Partnerships from "@/pages/partnerships";
import Policy from "@/pages/privacyPolicy";
import Product from "@/pages/product";
import Therapy from "@/pages/therapy";
import FormPageLayout from "@/components/FormPageLayout";
import Challenges from "@/pages/challenges";
import WhatsappBot from "@/pages/whatsapp-bot";
import TermsAndCondition from "@/pages/terms-and-condition";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blogs",
        children: [
          { path: "", element: <Blog /> },
          { path: "view-blog", element: <ViewBlog /> },
        ],
      },
      { path: "/product", element: <Product /> },
      { path: "/children", element: <Children /> },
      { path: "/eap-services", element: <EAPServices /> },
      { path: "/partnerships", element: <Partnerships /> },
      { path: "/career", element: <Career /> },
      { path: "/challenges", element: <Challenges /> },
      { path: "/whatsapp-bot", element: <WhatsappBot /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/faq", element: <FAQPage /> },
      { path: "/privacy-policy", element: <Policy /> },
      { path: "/terms-and-condition", element: <TermsAndCondition /> },
      { path: "/therapy", element: <Therapy /> },
    ],
  },
  {
    path: "/form/",
    element: <FormPageLayout />,
    children: [{ path: "children", element: <ChildrenTherapyForm /> }],
  },
  { path: "*", element: <NotFound /> },
];

const router = createHashRouter(routes);

export { router };
