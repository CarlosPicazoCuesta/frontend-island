import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';
import { nextPage, useRootContext } from "../../utils/context/context.ts";
import { sleep } from "../../utils/commons.js";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import call from "../../assets/sounds/call.mp3";
import './day.scss';

const Day = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [load, setLoad] = useState("");
  const { setSong, day, setDay } = useRootContext();
  // const [myDay, setMyDay] = useState(day);
  const nextDays = {
    day: 'lunes',
    lunes: 'martes',
    martes: 'miercoles',
    miercoles: 'jueves',
    jueves: 'viernes'
  }

  async function loadNextPage() {
    await sleep(1200);
    if (nextDays[day] === 'lunes') { setSong(call); await sleep(1000); }
    setFadeOut(true);
    await sleep(2500);
    setDay(nextDays[day]);
    setLoad(nextPage[day]);
  }

  return (
    <Page fadeOut={fadeOut} load={load}>
      <FadeIn
        callback={() => {
          loadNextPage();
        }}
        delayStart={600}
      >
        <main className={classNames("fei-day", "fei-page--cursor-none")}>
          <h2 className="fei-day__title">{nextDays[day]}</h2>
        </main>
      </FadeIn>
    </Page >
  );
};

export default Day;