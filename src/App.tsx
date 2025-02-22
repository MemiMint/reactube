import { FC } from "react";
import { ApplicationRouter } from "./modules/routing";
import { ROUTES } from "./modules/routing/routes";

const App: FC = () => {
  return <ApplicationRouter routes={ROUTES} />;
};

export default App;
