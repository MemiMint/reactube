import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoute } from "./types";

type ApplicationRouterProps = {
  routes: AppRoute[];
};

export const ApplicationRouter: FC<ApplicationRouterProps> = ({ routes }) => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return route.childrenRoutes ? (
            <Route key={index}>
              {route.childrenRoutes.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  index={childRoute.index}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
            </Route>
          ) : (
            <Route
              key={index}
              index={route.index && !route.path}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
