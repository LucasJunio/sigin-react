import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const signer = useSelector((state: RootState) => state.signer);

  if (signer) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};
