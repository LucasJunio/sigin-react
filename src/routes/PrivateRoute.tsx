import { Navigate } from "react-router-dom";

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const signer = true;

  if (signer) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};
