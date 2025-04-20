import type { AppRoute } from "./types";
import { lazy } from "react";

const Home = lazy(() => import("@modules/home"));
const SignIn = lazy(() => import("@modules/auth/signin"));
const SignUp = lazy(() => import("@modules/auth/signup"));
const NotFound = lazy(() => import("@shared/components/NotFound"));
const RequestEmail = lazy(
  () => import("@modules/auth/forgotpassword/RequestEmail"),
);
const CodeVerification = lazy(
  () => import("@modules/auth/forgotpassword/CodeVerification"),
);
const ResetPassword = lazy(
  () => import("@modules/auth/forgotpassword/ResetPassword"),
);

const Overview = lazy(() => import("@modules/overview"));
const Results = lazy(() => import("@modules/results/"));

const ROUTE_PATH = {
  HOME: "/",
  AUTH: "/auth",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgotpassword",
  CODE_VERIFICATION: "/codeverification",
  PASSWORD_RESET: "/passwordrecovery",
  OVERVIEW: "/overview",
  RESULTS: "/results",
};

export const ROUTES: AppRoute[] = [
  {
    path: ROUTE_PATH.HOME,
    index: true,
    element: <Home />,
  },
  {
    path: "/overview",
    element: <Overview />,
    withLayout: true,
  },
  {
    path: "/results",
    element: <Results />,
    withLayout: true,
  },
  {
    path: ROUTE_PATH.AUTH,
    element: null,
    childrenRoutes: [
      {
        index: true,
        path: `/auth${ROUTE_PATH.SIGN_IN}`,
        element: <SignIn />,
      },
      { path: `/auth${ROUTE_PATH.SIGN_UP}`, element: <SignUp /> },
      {
        path: `/auth${ROUTE_PATH.FORGOT_PASSWORD}`,
        element: <RequestEmail />,
      },
      {
        path: `auth/forgotpassword/:rct${ROUTE_PATH.CODE_VERIFICATION}`,
        element: <CodeVerification />,
      },
      {
        path: `auth/forgotpassword/:rct${ROUTE_PATH.PASSWORD_RESET}`,
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
