import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { sleep } from '../../utils/commons.js';
import Page from '../page/page.jsx';
import Secuence from '../../components/secuence/secuence.tsx';
import bg from '../../assets/images/intro/island.gif';
import FadeIn from '../../components/fade-in/fade-in.jsx';
import { getNextPageId, nextPage, useRootContext } from '../../utils/context/context.ts';
import opening from '../../assets/sounds/01-Opening.mp3';
import './intro.scss';

const IntroIslandPage = () => {
  const secuences = [
    "No te lo vas a creer, pero...",
    "...iniciaste un viaje que te cambiará para siempre.",
  ];
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [activeTitle, setActiveTitle] = useState(false);
  const [enableNext, setEnableNext] = useState(false);
  const { setSong } = useRootContext();

  async function loadNextPage() {
    setActiveTitle(true);
    await sleep(9000);
    setEnableNext(true);
  }

  useEffect(() => {
    setSong(opening);
  }, []);

  return (
    <Page enableNext={enableNext} className='fei-page--intro-island' nextPageLink={nextPage.introIsland}>
      <FadeIn callback={() => { setActiveSecuence(true) }} delayStart={2800}>
        <main className={classnames("fei-page fei-intro-island fei-bg", { 'fei-intro-island--cursor-active': enableNext })} style={{ backgroundImage: `url(${bg})` }}>
          <h1 className={classnames("fei-intro-island__super-title", { "fei-intro-island__super-title--is-active": activeTitle })}>S G A - L I B</h1>
          <h2 className="fei-page__title">{activeSecuence && <Secuence slides={secuences} className="fei-secuence--left" callback={loadNextPage} />}</h2>
        </main >
      </FadeIn>
    </Page >
  )
}

export default IntroIslandPage;