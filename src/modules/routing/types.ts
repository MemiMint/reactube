import type { RouteProps } from "react-router";

type RoutingOptions = {
  withLayout?: boolean;
};

export type AppRoute = RoutingOptions &
  RouteProps & {
    childrenRoutes?: (RouteProps & RoutingOptions)[];
  };
