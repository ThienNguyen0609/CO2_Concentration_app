import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "../components/MainPage";
import Chart from "../components/Chart/Chart";
import CO2Chart from "../components/CO2Chart/CO2Chart";
import TemHumChart from "../components/TemHumChart/TemHumChart";
import Data from "../components/Data/Data";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
        {
          path: "/",
          element: <Chart />
        },
        {
          path: "CO2chart/",
          element: <CO2Chart />
        },
        {
          path: "Tem_Hum/",
          element: <TemHumChart />
        },
        {
          path: "data/",
          element: <Data />
        }
    ]
  }
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router
