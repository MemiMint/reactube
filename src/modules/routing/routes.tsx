import { type RouteProps } from "react-router";
import Home from "../home";
import SignIn from "../auth/signin";
import SignUp from "../auth/signup";
import NotFound from "../shared/components/NotFound";

type AppRoute = RouteProps & { childrenRoutes?: RouteProps[] };

const ROUTE_PATH = {
  HOME: "/",
  AUTH: "/auth",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
