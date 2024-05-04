import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../components/app/containers/app";
import ErrorPage from "../components/app/components/errorPage";
import HomePage from "../components/home2/containers/homePage";
import BattlePage from "../components/battle/containers/battlePage";
  
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
          element: <BattlePage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);