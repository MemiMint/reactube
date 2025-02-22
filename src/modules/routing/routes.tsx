import { type RouteProps } from "react-router";
import { lazy } from "react";

const Home = lazy(() => import("../home"));
const SignIn = lazy(() => import("../auth/signin"));
const SignUp = lazy(() => import("../auth/signup"));
const NotFound = lazy(() => import("../shared/components/NotFound"));
const ForgotPassword = lazy(() => import("../auth/forgotpassword/"));

type AppRoute = RouteProps & { childrenRoutes?: RouteProps[] };

const ROUTE_PATH = {
  HOME: "/",
  AUTH: "/auth",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgotpassword",
};

export const ROUTES: AppRoute[] = [
  {
    path: ROUTE_PATH.HOME,
    index: true,
    element: <Home />,
  },
  {
    path: ROUTE_PATH.AUTH,
    element: null,
    childrenRoutes: [
      { index: true, path: `/auth${ROUTE_PATH.SIGN_IN}`, element: <SignIn /> },
      { path: `/auth${ROUTE_PATH.SIGN_UP}`, element: <SignUp /> },
      {
        path: `/auth${ROUTE_PATH.FORGOT_PASSWORD}`,
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
