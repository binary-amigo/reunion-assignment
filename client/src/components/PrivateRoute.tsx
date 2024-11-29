import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/authContext";

const PrivateRoute: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  if (user === null && localStorage.getItem("token")) {
    return <div>Loading...</div>; // or handle loading state
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
