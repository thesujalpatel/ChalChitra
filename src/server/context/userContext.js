import { Navigate } from "react-router-dom";
import { Context } from "./authContext";
import { useContext } from "react";

function UserAuthGuard({ children }) {
  const { user } = useContext(Context);
  if (!user) return <Navigate to="/auth" />;
  else return children;
}
export default UserAuthGuard;
