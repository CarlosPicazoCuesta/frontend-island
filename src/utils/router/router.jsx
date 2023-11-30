import { createBrowserRouter } from "react-router-dom";
import { checkPass } from "../../utils/core.js";

import Intro from "../../pages/intro/intro.tsx";
import LoginPage from "../../pages/login/login.tsx";
import ErrorPage from "../../pages/error/error.tsx";
import IntroIslandPage from "../../pages/intro/intro-island.tsx";
import Muelle from "../../pages/muelle/muelle.tsx";
import Bar from "../../pages/bar/bar.tsx";

const getRouter = (pwd) => {
  const Home = () => {
    console.log("load home");
    return checkPass(pwd) ? <Intro /> : <LoginPage />;
  };

  const ErrorLogin = () => {
    console.log("ErrorLogin: ", pwd);
    return checkPass(pwd) ? <ErrorPage /> : <LoginPage />;
  };

  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
  ]);
};

export default getRouter;
