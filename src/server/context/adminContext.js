import { Navigate } from "react-router-dom";
import { Context } from "./authContext";
import { useContext } from "react";
import { toast } from "react-toastify";

function AdminAuthGuard({ children }) {
  const { user } = useContext(Context);
  if (user.userRole !== "admin")
    return (
      toast.error("You are not authorized to view page"),
      (<Navigate to="/home" />)
    );
  else return children;
}
export default AdminAuthGuard;
