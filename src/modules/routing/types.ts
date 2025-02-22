import type { RouteProps } from "react-router";

export type AppRoute = RouteProps & { childrenRoutes?: RouteProps[] };
