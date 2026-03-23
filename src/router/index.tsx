import AppLayout from "@/components/AppLayout";
import { ErrorBoundary } from "@/components/core/errorBoundary/ErrorBoundary";
import { Suspense } from "react";
import { createHashRouter, RouteObject } from "react-router-dom";
import { PageLoader } from "@/components/PageLoader";
import NotFound from "@/pages/not-found";
import { Therapy, Home } from "./lazyComponents";
import Partnerships from "@/pages/partnerships";

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
          <AppLayout />,
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/therapy", element: <Therapy /> },
      { path: "/partnerships", element: <Partnerships /> },

    ],
  },

  { path: "*", element: <NotFound /> },
];

const router = createHashRouter(routes);

export { router };
