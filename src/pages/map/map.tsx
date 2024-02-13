import React, { useState } from 'react';
import { useRootContext } from '../../utils/context/context.ts';
import { sleep, CHARS } from '../../utils/commons.js';
import Page from '../page/page.jsx';
import FadeIn from '../../components/fade-in/fade-in.jsx';
import Dialog from '../../components/dialog/dialog.tsx';
import "./map.scss";


const Map = () => {
  const { player, missionsAccomplished, addMissionAccomplished } = useRootContext();
  const [loadPage, setLoadPage] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);
  const dialogProps = [{
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_00", text: "Un buen pirata sabe qué se puede pescar en cada zona y qué no..." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_01", text: "Vamos a ver si tú sabes. Buena suerte." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_02", text: "El legendario Docusaurus..." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_03", text: "Un monstruo del mundo antiguo" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_04", text: "Dicen que Isi y el Capi lo derrotaron en tiempos del VIEJO capitán Muras" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_05", text: "Desde entonces esa bestia no ha vuelto a atormentarnos" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_06", text: "Pero sigue acechando nuestro barco" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.aitor,
    disabled: true,
    options: [{ id: "_07", text: "El legendario Docusaurus..." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.aitor,
    disabled: true,
    options: [{ id: "_08", text: "Ese monstruo del mundo antiguo..." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.aitor,
    disabled: true,
    options: [{ id: "_09", text: "Aún contamos esa historia para asustar a los grumetes" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.aitor,
    disabled: true,
    options: [{ id: "_10", text: "De cuando tú y el Capi lo derrotásteis en tiempos del VIEJO capitán Muras" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.aitor,
    disabled: true,
    options: [{ id: "_11", text: "Esperemos que no vuelva nunca más" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.aitor,
    disabled: true,
    options: [{ id: "_12", text: "el Docusaurus, me refiero" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_13", text: "¡Duelos en aguas piratas!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: player.id === CHARS.aitor.id ? CHARS.somo : CHARS.aitor,
    disabled: true,
    options: [{ id: "_14", text: "Esto se pone interesante" }],
    className: 'fei-dialog--xl'
  }
  ]

  async function loadFish() {
    setSelectedOption(0);
    await sleep(5000);
    setSelectedOption(1);
    await sleep(4000);
    setFadeOut(true);
    await sleep(1500);
    setLoadPage('/fishing');
  }

  async function loadDocusaurus() {
    setSelectedOption(2);
    await sleep(2500);
    setSelectedOption(3);
    await sleep(2800);
    setSelectedOption(4);
    await sleep(4300);
    setSelectedOption(5);
    await sleep(3500);
    setSelectedOption(6);
    await sleep(2300);
    setSelectedOption(-1);
    addMissionAccomplished("docusaurus");
  }

  async function loadDocusaurusIsi() {
    setSelectedOption(7);
    await sleep(2500);
    setSelectedOption(8);
    await sleep(2800);
    setSelectedOption(9);
    await sleep(4300);
    setSelectedOption(10);
    await sleep(5500);
    setSelectedOption(11);
    await sleep(4500);
    setSelectedOption(-1);
    await sleep(2000);
    setSelectedOption(12);
    await sleep(2000);
    setSelectedOption(-1);
    addMissionAccomplished("docusaurus");
  }

  async function loadDuels() {
    setSelectedOption(13);
    await sleep(3000);
    setSelectedOption(14);
    await sleep(3000);
    setFadeOut(true);
    await sleep(1500);
    setLoadPage('/duels');
  }

  return (
    <Page load={loadPage} fadeOut={fadeOut} className="fei-page--top">
      <FadeIn
        delayStart={600}
      >
        <main className="fei-map">
          {!missionsAccomplished.includes("fishing") && <span className="fei-map__fish" onClick={loadFish} />}
          {!missionsAccomplished.includes("docusaurus") && <span className="fei-map__docusaurus" onClick={player.id === CHARS.isi.id ? loadDocusaurusIsi : loadDocusaurus} />}
          {!missionsAccomplished.includes("duels") && <span className="fei-map__duels" onClick={loadDuels} />}
        </main>
        {selectedOption >= 0 && <Dialog {...dialogProps[selectedOption]} />}
      </FadeIn>
    </Page>
  );
}

export default Map;