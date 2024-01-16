import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';
import { nextPage, useRootContext } from "../../utils/context/context.ts";
import { sleep } from "../../utils/commons.js";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Secuence from "../../components/secuence/secuence.tsx";
import bg from "../../assets/images/bgs/departure.jpg";
import departure from "../../assets/sounds/departure.mp3";
import './departure.scss';

const Departure = () => {
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [load, setLoad] = useState("");
  const { setSong, setDay } = useRootContext();
  const secuences = ["19 días después zarparon."];

  async function loadNextPage() {
    setFadeOut(true);
    setDay("day");
    await sleep(500);
    setLoad(nextPage.departure);
  }

  useEffect(() => {
    setSong(departure);
  }, []);

  return (
    <Page fadeOut={fadeOut} load={load}>
      <FadeIn
        callback={() => {
          setActiveSecuence(true);
        }}
        delayStart={600}
      >
        <main className={classNames("fei-departure", "fei-page--cursor-none")} style={{ backgroundImage: `url(${bg})` }}>
          <h2 className="fei-departure__title">{activeSecuence && <Secuence slides={secuences} callback={loadNextPage} />}</h2>
        </main>
      </FadeIn>
    </Page>
  );
};

export default Departure;