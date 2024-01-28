import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";
import classNames from "classnames";
import { RootContext, RootContextInitial } from "./utils/context/context.ts";
import "./assets/styles/main.scss";
import getRouter from "./utils/router/router.jsx";

const App = () => {
  const [cookies, setCookie] = useCookies(["pirate"]);
  const [soundLoop, setSoundLoop] = useState(false);
  const pwd = cookies.PWD;
  const router = getRouter(pwd);
  const [context, setContext] = useState(RootContextInitial);

  const setSong = (song, loop = false) => {
    setContext({ ...context, song: song });
    setSoundLoop(loop);
  };

  const setPlay = () => {
    setContext({ ...context, play: true });
  };

  const setPlayer = (player) => {
    setContext({ ...context, player: player });
  };

  const addMissionAccomplished = (mission) => {
    setContext({ ...context, missionsAccomplished: [...context.missionsAccomplished, mission] });
  };

  function setSetFadeOut(f) {
    setContext({ ...context, setFadeOut: f });
  }

  function setDay(day) {
    setContext({ ...context, day: day });
  }

  return (
    <div className={classNames("fei-page-frame", { "cursor-none": context.currentPage !== "intro" || context.currentPage !== "intro-island" })}>
      <RootContext.Provider value={{ ...context, setSetFadeOut, setSong, setPlay, setPlayer, setDay, addMissionAccomplished }}>
        {context.play && (
          <>
            <audio id="fei-audio-player" src={context.song} autoPlay loop={soundLoop} />
            <RouterProvider router={router} />
          </>
        )}
      </RootContext.Provider>
    </div>
  );
};

export default App;
