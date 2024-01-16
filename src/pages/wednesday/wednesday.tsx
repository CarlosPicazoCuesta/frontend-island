import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { nextPage, useRootContext } from "../../utils/context/context.ts";
import { sleep } from "../../utils/commons.js";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Secuence from "../../components/secuence/secuence.tsx";
import bg from "../../assets/images/bgs/deck-0.jpg";
import bgLayer1 from "../../assets/images/bgs/deck-1.png";
import bgLayer2 from "../../assets/images/bgs/deck-2.png";
import lunes from "../../assets/sounds/lunes.mp3";
// import "./departure.scss";

const Miercoles = () => {
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { setSong } = useRootContext();
  const [loadPage, setLoadPage] = useState('');

  async function loadNextPage() {
    await sleep(1500);
    setFadeOut(true);
    await sleep(1800);
    setLoadPage("/day");
  }

  useEffect(() => {
    setSong(lunes);
  }, []);

  return (
    <Page fadeOut={fadeOut} enableNext load={loadPage}>
      <FadeIn
        callback={() => {
          // setActiveSecuence(true);
          loadNextPage();
        }}
        delayStart={600}
      >
        <main className={classNames("fei-departure", "fei-page--cursor-none")} style={{ backgroundImage: `url(${bg})` }}>
          Miercoles
        </main>
      </FadeIn>
    </Page>
  );
};

export default Miercoles;
