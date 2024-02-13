import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRootContext } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import { sleep } from '../../utils/commons.js';
import FadeIn from "../../components/fade-in/fade-in.jsx";
import TopDeck from "../../components/top-deck/top-deck.tsx";
import deck from "../../assets/sounds/deck.mp3";

const Martes = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const { setSong } = useRootContext();
  const [loadPage, setLoadPage] = useState('');

  async function load(target: string) {
    setFadeOut(true);
    await sleep(1200);
    setLoadPage(target);
  }

  useEffect(() => {
    setSong(deck);
  }, []);

  return (
    <Page fadeOut={fadeOut} load={loadPage} className="fei-page--top">
      <FadeIn
        delayStart={600}
      >
        <main className={classNames("fei-tuesday")}>
          <TopDeck loadMap={() => load('/map')} loadBarracks={() => load('/barracks')} />
        </main>
      </FadeIn >
    </Page >
  );
};

export default Martes;
