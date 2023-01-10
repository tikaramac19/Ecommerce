import { createBrowserHistory } from "@remix-run/router";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

interface protectedRouteProps {
  children: React.ReactNode;
}

const history = createBrowserHistory()

const PublicRoutes = () => {
  const { token } = useSelector((state: any) => state.authSlice);

  if (token) {
    history.go(-1)
    return <></>
  }

  return <Outlet />;
};

export default PublicRoutes;
