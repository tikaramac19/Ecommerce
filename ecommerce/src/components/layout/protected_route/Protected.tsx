import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";

interface protectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoutes = ({ children }: protectedRouteProps) => {
  const { token } = useSelector((state: any) => state.authSlice);
  const { pathname } = useLocation()


  // console.log('protected: ', pathname)
  // console.log(token);
  return token ? <Outlet /> : <Navigate to={"/auth/login"} />;
};

export default ProtectedRoutes;
