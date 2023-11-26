import { DashboardContainer } from "../containers/Dashboard";
import { NotFoundContainer } from "../containers/NoutFound";
import { SigninContainer } from "../containers/Signin";
import { PrivateRoute } from "./PrivateRoute";

export const routes = [
  { path: "/", title: "Signin", Component: SigninContainer },
  { path: "/*", title: "Not Found 404", Component: NotFoundContainer },
  {
    path: "/dashboard",
    title: "Dashboard",
    Component: () => <PrivateRoute component={DashboardContainer} />,
  },
];
