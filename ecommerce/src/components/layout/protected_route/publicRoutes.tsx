import { createBrowserHistory } from "@remix-run/router";
import { useSelector } from "react-redux";

import { Outlet, useLocation } from "react-router-dom";

interface protectedRouteProps {
  children: React.ReactNode;
}

const history = createBrowserHistory()

const PublicRoutes = () => {
  const { token } = useSelector((state: any) => state.authSlice);


  const { pathname } = useLocation()
  // console.log(pathname, "pathname")

  if (token) {
    if (canAccess(pathname)) {
      return <Outlet />
    } else {

      history.go(-1)
      return <></>
    }
  }

  return <Outlet />;
};

const canAccess = (path: string) => {

  let flag = false;
  const allowedRoutes = ['/products', '/kids', '/']
  const newRoute = allowedRoutes.filter((route: string) => path.includes(route))
  // console.log(newRoute.length)
  flag = newRoute.length > 0;
  // console.log(flag, newRoute);

  return flag
}

export default PublicRoutes;
