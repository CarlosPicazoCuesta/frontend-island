import React, { useState, useEffect } from "react";
import classNames from "classnames";
// import { useNavigate } from "react-router-dom";
import { nextPage, useRootContext } from "../../utils/context/context.ts";
import { sleep } from "../../utils/commons.js";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
// import Secuence from "../../components/secuence/secuence.tsx";
// import bg from "../../assets/images/bgs/top-deck.jpg";
import deck from "../../assets/sounds/deck.mp3";
import TopDeck from "../../components/top-deck/top-deck.tsx";
// import "./tuesday.scss";

const Martes = () => {
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
    setSong(deck);
  }, []);

  return (
    <Page fadeOut={fadeOut} load={loadPage} className="fei-page--top">
      <FadeIn
        callback={() => {
          // setActiveSecuence(true);
          // loadNextPage();
        }}
        delayStart={600}
      >
        <main className={classNames("fei-tuesday")}>
          <TopDeck loadMap={() => setLoadPage('/map')} />
        </main>
      </FadeIn>
    </Page>
  );
};

export default Martes;
