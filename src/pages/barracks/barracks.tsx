import React, { useState, useEffect } from "react";
import { sleep, CHARS, NPCS, getCharsArr } from "../../utils/commons.js";
import BubbleSet from "../../components/bubble/bubble-set.tsx";
import classNames from 'classnames';
import { useRootContext } from '../../utils/context/context.ts';
import Page from '../page/page.jsx';
import FadeIn from '../../components/fade-in/fade-in.jsx'
import Player from "../../components/player/player.tsx";
import Thumbnail from "../../components/thumbnail/thumbnail.tsx";
import Dialog from "../../components/dialog/dialog.tsx";
import bg from "../../assets/images/bgs/barracks.png";
import body2 from '../../assets/images/chars/body-2.png';
import body5 from '../../assets/images/chars/body-5.png';
import capiDesktop from '../../assets/images/desktops/capi-desktop.png';
import aitorDesktop from '../../assets/images/desktops/aitor-desktop.png';
import isiDesktop from '../../assets/images/desktops/isi-desktop.png';
import somoDesktop from '../../assets/images/desktops/somo-desktop.png';
import marcDesktop from '../../assets/images/desktops/marc-desktop.png';
import dorianDesktop from '../../assets/images/desktops/dorian-desktop.png';
import joseDesktop from '../../assets/images/desktops/jose-desktop.png';
import lilenDesktop from '../../assets/images/desktops/lilen-desktop.png';
import isaacDesktop from '../../assets/images/desktops/isaac-desktop.png';
import daniDesktop from '../../assets/images/desktops/dani-desktop.png';
import check from '../../assets/images/things/check.png';
import "./barracks.scss";;

const Barracks = ({ }) => {
  const { player, addMissionAccomplished } = useRootContext();
  const [fadeOut, setFadeOut] = useState(false);
  const [playZoneActive, setPlayZoneActive] = useState(false);
  const [loadPage, setLoadPage] = useState("");
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [activeDialog, setActiveDialog] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [secuenceStage, setSecuenceStage] = useState(0);
  const [charActive, setCharActive] = useState("");
  const [currentDesktop, setCurrentDesktop] = useState(0);
  const [desktops, setDesktops] = useState<string[]>([]);
  const speaker = player.id === CHARS.isi.id ? CHARS.dani : CHARS.isi;


  const [desktopsData, setDesktopsData] = useState({
    [NPCS.capi.id]: { desktopImg: capiDesktop, correct: false, name: "Capi" },
    [CHARS.aitor.id]: { desktopImg: aitorDesktop, correct: false, name: CHARS.aitor.name },
    [CHARS.isi.id]: { desktopImg: isiDesktop, correct: false, name: CHARS.isi.name },
    [CHARS.somo.id]: { desktopImg: somoDesktop, correct: false, name: CHARS.somo.name },
    [CHARS.marc.id]: { desktopImg: marcDesktop, correct: false, name: CHARS.marc.name },
    [CHARS.dorian.id]: { desktopImg: dorianDesktop, correct: false, name: CHARS.dorian.name },
    [CHARS.jose.id]: { desktopImg: joseDesktop, correct: false, name: CHARS.jose.name },
    [CHARS.lilen.id]: { desktopImg: lilenDesktop, correct: false, name: CHARS.lilen.name },
    [CHARS.isaac.id]: { desktopImg: isaacDesktop, correct: false, name: CHARS.isaac.name },
    [CHARS.dani.id]: { desktopImg: daniDesktop, correct: false, name: CHARS.dani.name },
  });
  // const charsList = [NPCS.capi.id, ...getCharsArr()];

  const secuenceBubbles = [
    {
      delay: 1000,
      duration: [2500, 3500, 4500, 2500, 2000],
      endDelay: 2000,
      color: speaker.color,
      width: "474px",
      position: { top: 210, left: 118 },
      className: "fei-bubble--bg"
    },
    {
      delay: 1000,
      duration: [1500, 6500, 3500],
      endDelay: 2000,
      color: speaker.color,
      width: "474px",
      position: { top: 210, left: 118 },
      className: "fei-bubble--bg"
    }
  ];
  const secuenceTexts = [
    ["Aquí cada uno tiene su lugar",
      "Es importante que distingas nuestros puestos",
      "No vaya a ser que te comas el sandwich de una mesa que no es la tuya",
      "Ha muerto gente por menos",
      "Y hemos oído hablar de ti..."],
    ["Pues ya está", "Espero que esto te ayude a conocer un poco mejor a tus compañeros", "Por hoy hemos terminado"]
  ];
  const secuenceCallback = async () => {
    if (secuenceStage === 0) {
      setActiveSecuence(false);
      setPlayZoneActive(true);
    }
    if (secuenceStage === 1) {
      setFadeOut(true);
      await sleep(2000);
      setLoadPage("/day");
    }
  }

  const dialogProps = [{
    speaker: speaker,
    disabled: true,
    options: [{ id: "_00", text: "¡Correcto!" }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: speaker,
    disabled: true,
    options: [{ id: "_01", text: `¡Cuidado! Ese es el puesto de ${desktops[currentDesktop]}` }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: speaker,
    disabled: true,
    options: [{ id: "_02", text: `Bravo, ${player.name}.Ese va a ser tu sitio por mucho tiempo` }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: speaker,
    disabled: true,
    options: [{ id: "_03", text: `Ese es tu sitio, ${player.name}.Espero que no se te vuelva a olvidar` }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: speaker,
    disabled: true,
    options: [{ id: "_04", text: `¡PELIGRO! Ese es el sitio de Capi. Si alguna vez te pilla por ahí podría estarte hablando durante horas...` }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: speaker,
    disabled: true,
    options: [{ id: "_05", text: `Ahí trabajo yo` }],
    className: 'fei-dialog--xl'
  }
  ]

  function selectDialog(charId) {
    // puesto speaker
    if (desktops[currentDesktop] === speaker.id) {
      setDialogIndex(5);
      return 1000;
    }
    // puesto de capi
    if (desktops[currentDesktop] === NPCS.capi.id) {
      setDialogIndex(4);
      return 5500;
    }
    // Acierta su puesto
    if (charId === desktops[currentDesktop] && desktops[currentDesktop] === player.id) {
      setDialogIndex(2);
      return 3000;
    }
    // Falla su puesto
    if (charId !== desktops[currentDesktop] && desktops[currentDesktop] === player.id) {
      setDialogIndex(3);
      return 3000;
    }
    // Acierta el puesto de otro
    if (charId === desktops[currentDesktop]) {
      setDialogIndex(0);
      return 1200;
    }
    // Falla el puesto de otro
    if (charId !== desktops[currentDesktop]) {
      setDialogIndex(1);
      return 2000;
    }
  }

  async function selectChar(charId) {
    const DD = { ...desktopsData };
    const time = selectDialog(charId);
    setActiveDialog(true);
    await sleep(time);
    setActiveDialog(false);
    DD[charId].correct = charId === desktops[currentDesktop];
    setDesktopsData(DD);
    if (currentDesktop < desktops.length - 1) {
      setCurrentDesktop(currentDesktop + 1);
    } else {
      setPlayZoneActive(false);
      setSecuenceStage(1);
      setActiveSecuence(true);
    }
  }

  const Secuence = ({ texts, bubbles, callback = () => { } }) => {
    return <BubbleSet bubbleProps={bubbles[secuenceStage]} set={texts[secuenceStage]} callback={callback} show />;
  }

  useEffect(() => {
    addMissionAccomplished("barracks");
    setDesktops([NPCS.capi.id, ...getCharsArr()].sort((a, b) => 0.5 - Math.random()));
  }, []);

  return (
    <Page className="fei-page--top" fadeOut={fadeOut} load={loadPage}>
      <FadeIn
        callback={async () => {
          setCharActive(speaker.id);
          setActiveSecuence(true);
        }}
        delayStart={600}
      >
        <main className={classNames("fei-barracks")} style={{ backgroundImage: `url(${bg})` }}>
          <img className={classNames("fei-body", { "fei-barracks__body-2": player.id === CHARS.isi.id, "fei-barracks__body-1": player.id !== CHARS.isi.id })} src={player.id === CHARS.isi.id ? body5 : body2} alt="body1" />
          <Thumbnail char={speaker} size="size-m" className="fei-barracks__head-1" active={charActive !== ""} />
          <Player className="fei-barracks__player" size="size-m" />
          {activeSecuence && <Secuence texts={secuenceTexts} bubbles={secuenceBubbles} callback={secuenceCallback} />}
          {playZoneActive &&
            <div className="fei-barracks__play-zone">
              <div className="fei-barracks__chars">
                <div className="fei-barracks__char">
                  <Thumbnail char={NPCS.capi} size="size-m" className="fei-barracks__char-thumbnail" active={!desktopsData[NPCS.capi.id].correct} activeOnHover={!desktopsData[NPCS.capi.id].correct} callback={desktopsData[NPCS.capi.id].correct ? undefined : selectChar} />
                  {desktopsData[NPCS.capi.id].correct && <img src={check} className="fei-barracks__icon" alt="check" />}
                </div>
                {getCharsArr().map((charId) => {
                  return (
                    <div key={charId} className="fei-barracks__char">
                      <Thumbnail char={CHARS[charId]} size="size-m" className="fei-barracks__char" active={!desktopsData[charId].correct} activeOnHover={!desktopsData[charId].correct} callback={desktopsData[charId].correct ? undefined : selectChar} />
                      {desktopsData[charId].correct && <img src={check} className="fei-barracks__icon" alt="check" />}
                    </div>
                  )
                })}
              </div>
              <div className="fei-barracks__desktop">
                <h2 style={{ "position": "absolute" }}>{desktops[currentDesktop]}</h2>
                <img className="fei-barracks__desktop-img" src={desktopsData[desktops[currentDesktop]].desktopImg} alt="" />
              </div>
            </div>
          }
        </main>
        {activeDialog && <Dialog {...dialogProps[dialogIndex]} />}
      </FadeIn>
    </Page >
  );
}

export default Barracks;