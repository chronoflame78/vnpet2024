import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../components/app/containers/app";
import ErrorPage from "../components/app/components/errorPage";
import HomePage from "../components/home/containers/homePage";
import BattleComponent from "../components/battle/containers/battleComponent";
import MapComponent from "../components/map/containers/mapComponent";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "battle",
          element: <BattleComponent />,
          errorElement: <ErrorPage />,
        },
        {
          path: "map",
          element: <MapComponent />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);