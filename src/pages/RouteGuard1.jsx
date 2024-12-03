import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function RouteGuard({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default RouteGuard;