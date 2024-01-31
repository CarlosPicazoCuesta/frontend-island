import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRootContext, nextPage, getNextPageId } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import deck from "../../assets/sounds/deck.mp3";
import TopDeck from "../../components/top-deck/top-deck.tsx";

const Martes = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const { setSong, currentPage } = useRootContext();
  const [loadPage, setLoadPage] = useState('');

  useEffect(() => {
    setSong(deck);
    console.log(currentPage);
    console.log(getNextPageId(currentPage));
  }, []);

  return (
    <Page fadeOut={fadeOut} load={loadPage} className="fei-page--top" enableNext nextPageLink="/day">
      <FadeIn
        delayStart={600}
      >
        <main className={classNames("fei-tuesday")}>
          <TopDeck loadMap={() => setLoadPage('/map')} loadBarracks={() => setLoadPage('/barracks')} />
        </main>
      </FadeIn>
    </Page>
  );
};

export default Martes;
