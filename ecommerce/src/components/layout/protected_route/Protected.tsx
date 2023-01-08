import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";

interface protectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoutes = ({ children }: protectedRouteProps) => {
  const { token } = useSelector((state: any) => state.authSlice);
  // console.log(token);
  //   return token ? <Outlet /> : <Navigate to={"/auth/login"} />;

  if (!token) {
    return <Navigate to={"/auth/login"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;