import { type RouteProps } from "react-router";
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

type AppRoute = RouteProps & { childrenRoutes?: RouteProps[] };

const ROUTE_PATH = {
  HOME: "/",
  AUTH: "/auth",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgotpassword",
  CODE_VERIFICATION: "/codeverification",
  PASSWORD_RESET: "/passwordrecovery",
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
