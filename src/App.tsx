
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import type { Router as RemixRouter } from '@remix-run/router'

import { loginRoutes } from './modules/login/routes';
import { useNotification } from "./shared/hooks/useNotifications";
import { firstScreenRoutes } from "./modules/firstScreen/routes";
import { productScreens } from "./modules/product/routes";
import { verifyLoggedIn } from "./shared/functions/connection/auth";
import { useRequests } from "./shared/hooks/useRequests";
import { useGlobalContext } from "./shared/hooks/useGlobalContext";
import { useEffect } from "react";
import { URL_USER } from "./shared/constants/urls";
import { MethodsEnum } from "./shared/enums/methods.enums";


const routes: RouteObject[] = [...firstScreenRoutes, ...loginRoutes];
const routesLoggedIn: RouteObject[] = [...productScreens].map(
  (route) => ({
    ...route,
    loader: () => verifyLoggedIn()
  }),
);

const router: RemixRouter = createBrowserRouter([ ...routes, ...routesLoggedIn ]);

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();
  const { request } = useRequests();

  useEffect( () => {

    if ( user )
      request(URL_USER, MethodsEnum.GET, setUser);
  }, []);


  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
