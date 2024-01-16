import React, { useState } from 'react';
import { useRootContext } from '../../utils/context/context.ts';
import { sleep, CHARS } from '../../utils/commons.js';
import Page from '../page/page.jsx';
import FadeIn from '../../components/fade-in/fade-in.jsx';
import Dialog from '../../components/dialog/dialog.tsx';

import "./map.scss";


const Map = ({ }) => {
  const { player } = useRootContext();
  const [loadPage, setLoadPage] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);
  const dialogProps = [{
    speaker: player.id === "aitor" ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_00", text: "Un buen pirata sabe qué se puede pescar en cada zona y qué no..." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === "aitor" ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_01", text: "Vamos a ver si tú sabes. Buena suerte." }],
    className: 'fei-dialog--xl'
  }]

  async function loadFish() {
    setSelectedOption(0);
    await sleep(5000);
    setSelectedOption(1);
    await sleep(4000);
    setFadeOut(true);
    await sleep(1500);
    setLoadPage('/fishing');
  }

  return (
    <Page load={loadPage} fadeOut={fadeOut} className="fei-page--top">
      <FadeIn
        callback={() => {
          // setActiveSecuence(true);
          // loadNextPage();
        }}
        delayStart={600}
      >

        <main className="fei-map">
          <span className="fei-map__fish" onClick={loadFish} />
        </main>
        {selectedOption >= 0 && <Dialog {...dialogProps[selectedOption]} />}
      </FadeIn>
    </Page>
  );
}

export default Map;