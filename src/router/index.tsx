import AppLayout from "@/components/AppLayout";
import { ErrorBoundary } from "@/components/core/errorBoundary/ErrorBoundary";
import { Suspense } from "react";
import { createHashRouter, RouteObject } from "react-router-dom";
import { PageLoader } from "@/components/PageLoader";
import NotFound from "@/pages/not-found";
import { Therapy, Home, Partnerships, Career, AboutUs, FAQ, PrivacyPolicy, TermsAndCondition, Children, Challenges, Blog, EAPServices } from "./lazyComponents";


const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="h-screen lg:w-screen flex justify-center items-center">
              <PageLoader />
            </div>
          }
        >
          <AppLayout />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/therapy", element: <Therapy /> },
      { path: "/partnerships", element: <Partnerships /> },
      { path: "/career", element: <Career /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/privacyPolicy", element: <PrivacyPolicy /> },
      { path: "/terms-and-condition", element: <TermsAndCondition /> },
      { path: "/children", element: <Children /> },
      { path: "/challenges", element: <Challenges /> },
      { path: "/blog", element: <Blog /> },
      { path: "/eap-services", element: <EAPServices /> },



    ],
  },

  { path: "*", element: <NotFound /> },
];

const router = createHashRouter(routes);

export { router };
