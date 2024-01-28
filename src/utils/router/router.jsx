import { createBrowserRouter } from "react-router-dom";
import { checkPass } from "../../utils/core.js";

import Intro from "../../pages/intro/intro.tsx";
import LoginPage from "../../pages/login/login.tsx";
import ErrorPage from "../../pages/error/error.tsx";
import IntroIslandPage from "../../pages/intro/intro-island.tsx";
import Muelle from "../../pages/muelle/muelle.tsx";
import Bar from "../../pages/bar/bar.tsx";
import Final from "../../pages/final/final.tsx";
import Credits from "../../pages/credits/credits.tsx";
import Departure from "../../pages/departure/departure.tsx";
import Day from "../../pages/day/day.tsx";
import Lunes from "../../pages/monday/monday.tsx";
import Martes from "../../pages/tuesday/tuesday.tsx";
import Miercoles from "../../pages/wednesday/wednesday.tsx";
import Jueves from "../../pages/thursday/thursday.tsx";
import Viernes from "../../pages/friday/friday.tsx";
import Release from "../../pages/release/release.tsx";
import Map from "../../pages/map/map.tsx";
import Fishing from "../../pages/fishing/fishing.tsx";
import Barracks from "../../pages/barracks/barracks.tsx";

const getRouter = (pwd) => {
  // const Home = () => {
  //   return checkPass(pwd) ? <Intro /> : <LoginPage />;
  // };

  const ErrorLogin = () => {
    console.log("ErrorLogin: ", pwd);
    return checkPass(pwd) ? <ErrorPage /> : <LoginPage />;
  };

  return createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorLogin />,
    },
    {
      path: "/intro",
      element: <Intro />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/intro-island",
      element: <IntroIslandPage />,
    },
    {
      path: "/dock",
      element: <Muelle />,
    },
    {
      path: "/bar",
      element: <Bar />,
    },
    {
      path: "/final",
      element: <Final />,
    },
    {
      path: "/credits",
      element: <Credits />,
    },
    {
      path: "/departure",
      element: <Departure />,
    },
    {
      path: "/day",
      element: <Day />,
    },
    {
      path: "/lunes",
      element: <Lunes />,
    },
    {
      path: "/martes",
      element: <Martes />,
    },
    {
      path: "/miercoles",
      element: <Miercoles />,
    },
    {
      path: "/jueves",
      element: <Jueves />,
    },
    {
      path: "/viernes",
      element: <Viernes />,
    },
    {
      path: "/release",
      element: <Release />,
    },
    {
      path: "/map",
      element: <Map />,
    },
    {
      path: "/fishing",
      element: <Fishing />,
    },
    {
      path: "/barracks",
      element: <Barracks />,
    },
    {
      path: "/ship",
      element: <Final />,
    },
  ]);
};

export default getRouter;
