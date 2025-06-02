// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
