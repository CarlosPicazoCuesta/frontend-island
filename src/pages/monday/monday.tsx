import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { sleep, CHARS, NPCS } from "../../utils/commons.js";
import { useRootContext } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Player from "../../components/player/player.tsx";
import Thumbnail from "../../components/thumbnail/thumbnail.tsx";
import BubbleSet from "../../components/bubble/bubble-set.tsx";
import Dialog from "../../components/dialog/dialog.tsx";
// import Secuence from "../../components/secuence/secuence.tsx";
import bg from "../../assets/images/bgs/deck-0.jpg";
import bgLayer1 from "../../assets/images/bgs/deck-1.png";
import bgLayer2 from "../../assets/images/bgs/deck-2.png";
import eternity from "../../assets/images/bgs/oneEternityLater.jpg";
import body1 from '../../assets/images/chars/body-1.png';
import body2 from '../../assets/images/chars/body-2.png';
import body3 from '../../assets/images/chars/body-3.png';
import body4 from '../../assets/images/chars/body-4.png';
import body5 from '../../assets/images/chars/body-5.png';
import capi from '../../assets/images/npcs/capi-body.png';
import capiThumbnail from '../../assets/images/npcs/capi-thumbnail.png';
import lilen2 from '../../assets/images/chars/lilen2.png';

import eternitySong from '../../assets/sounds/eternity.mp3';
import "./monday.scss";

const Lunes = () => {
  // const [activeSecuence, setActiveSecuence] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showCapi, setShowCapi] = useState(false);
  const [loadPage, setLoadPage] = useState('');
  const [dialogIndex, setDialogIndex] = useState(0);
  const [showSecuence, setShowSecuence] = useState(false);
  const [showEternity, setShowEternity] = useState(false);
  const [afterEternity, setAfterEternity] = useState(false);
  const { player, setSong } = useRootContext();
  const [charActive, setCharActive] = useState("");
  const [showBubbles, setShowBubbles] = useState(false);
  const [secuenceStage, setSecuenceStage] = useState(0);


  const secuenceBubbles = [
    {
      delay: 0,
      duration: [1200],
      endDelay: 800,
      color: CHARS.aitor.color,
      width: "200px",
      position: player.id === CHARS.aitor.id ? { top: 153, left: 376 } : { top: 290, left: 132 },
      initCallback: () => setCharActive(CHARS.aitor.id),
      className: "fei-bubble--bg"
    },
    {
      delay: 0,
      duration: [1500],
      endDelay: 800,
      color: CHARS.lilen.color,
      width: "220px",
      position: player.id === CHARS.lilen.id ? { top: 153, left: 376 } : { top: 157, left: 240 },
      initCallback: () => setCharActive(CHARS.lilen.id),
      className: "fei-bubble--bg"
    }
  ]

  const secuenceTexts = [
    ["Egun on"],
    ["Hooolis!"]
  ];


  const secuenceCallback = async () => {
    setCharActive("");
    if (secuenceStage < secuenceBubbles.length - 1) {
      setSecuenceStage(secuenceStage + 1);
    } else {
      setShowBubbles(false);
      secuenceSync2();
      // setActiveSecuence(0);
      // setSecuenceStage(0);
      // setFadeOut(true);
      // setMusic("");
      // await sleep(5000);
      // setLoadPage("/final");
    }
  }

  const dialogProps = [{
    speaker: player.id === "isaac" ? CHARS.jose : CHARS.isaac,
    disabled: true,
    options: [{ id: "_00", text: "¡Capitán en cubiertaaaa!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: { ...NPCS.capi, thumbnail: capiThumbnail },
    disabled: true,
    options: [{ id: "_01", text: "¡Buon Giooooooornooo, tripulación!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: { ...NPCS.capi, thumbnail: capiThumbnail },
    disabled: true,
    options: [{ id: "_02", text: "Hoy tenemos muchísimo trabajo, así que vamos a tener una daily ¡muy rápida!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: { ...NPCS.capi, thumbnail: capiThumbnail },
    disabled: true,
    options: [{ id: "_03", text: "¡Vamos! ¡A toda castaña!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: { ...NPCS.capi, thumbnail: capiThumbnail },
    disabled: true,
    options: [{ id: "_04", text: "...y eso todo." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.dorian,
    disabled: true,
    options: [{ id: "_05", text: "No, pues qué pena con usted, jefe. Pero yo todavía no hablé." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: { ...NPCS.capi, thumbnail: capiThumbnail },
    disabled: true,
    options: [{ id: "_06", text: "Vaya, bueno, ya mañana hablas." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: { ...NPCS.capi, thumbnail: capiThumbnail },
    disabled: true,
    options: [{ id: "_07", text: "Ahora sí: ¡A TRABAJAAAR!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: CHARS.somo,
    disabled: true,
    options: [{ id: "_08", text: "Pero, la daily duró todo el día. Ya son las 18:00h." }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: { ...NPCS.capi, thumbnail: capiThumbnail },
    disabled: true,
    options: [{ id: "_09", text: player.id !== 'lilen' ? "Mierda. ¡Lileeeeen! ¡Ha vuelto a pasar!" : "Mierda. Isiiiii! ¡Ha vuelto a pasar!" }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: player.id !== 'lilen' ? { ...CHARS.lilen, thumbnail: lilen2 } : CHARS.isi,
    disabled: true,
    options: [{ id: "_10", text: "Yaaa, ya me di cuenta." }],
    className: 'fei-dialog--xl'
  },
  ]

  async function secuenceSync() {
    setDialogIndex(0);
    await sleep(3000);
    setShowSecuence(true);
    await sleep(4000);
    setShowCapi(true);
    await sleep(1500);
    setDialogIndex(1);
    await sleep(4000);
    setShowSecuence(false);
    setShowBubbles(true);
  }

  async function secuenceSync2() {
    setShowSecuence(true);
    setDialogIndex(2);
    await sleep(6000);
    setDialogIndex(3);
    await sleep(5000);
    //BEGIN ETERNITY
    setFadeOut(true);
    await sleep(500);
    setSong(eternitySong);
    await sleep(1500);
    setShowEternity(true);
    setAfterEternity(true);
    setFadeOut(false);
    await sleep(5000);
    setFadeOut(true);
    await sleep(1000);
    setShowEternity(false);
    setShowSecuence(false);
    setDialogIndex(4);
    await sleep(1500);
    setFadeOut(false);
    await sleep(1500);
    setShowSecuence(true);
    // END ETERNITY
    await sleep(3500);
    setDialogIndex(5);
    await sleep(6500);
    setDialogIndex(6);
    await sleep(3000);
    setDialogIndex(7);
    await sleep(4500);
    setDialogIndex(8);
    await sleep(4000);
    setDialogIndex(9);
    await sleep(5500);
    setDialogIndex(10);
    await sleep(5000);
    setLoadPage("/day");
  }

  useEffect(() => {
    setSong("");
    secuenceSync();
  }, []);

  return (
    <Page fadeOut={fadeOut} load={loadPage} className="fei-monday fei-page--top" >
      <FadeIn
        callback={() => {
          // setActiveSecuence(true);
          // loadNextPage();
        }}
        delayStart={600}
      >
        {showEternity ?
          <div className="fei-eternity">
            <img src={eternity} alt="eternity" className="fei-eternity__img" />
          </div>
          : <div>
            <main className={classNames("fei-deck", "fei-page--cursor-none")} style={{ backgroundImage: `url(${bg})` }}>
              {player.id !== 'aitor' && !afterEternity && <>
                <img className={classNames("fei-body", "fei-monday__body-1", { "fei-monday__body-1--after": afterEternity, })} src={body1} alt="body1" />
                <Thumbnail char={CHARS.aitor} size="size-s" className={classNames("fei-monday__head-1", { "fei-monday__head-1--after": afterEternity, })} active={charActive === CHARS.aitor.id} />
              </>
              }
              {player.id !== 'isi' && <>
                <img className={classNames("fei-body", "fei-monday__body-2", { "fei-monday__body-2--after": afterEternity, })} src={body2} alt="body2" />
                <Thumbnail char={CHARS.isi} size="size-s" className={classNames("fei-monday__head-2", { "fei-monday__head-2--after": afterEternity, })} active={false} /></>
              }
              {player.id !== 'somo' && <>
                <img className={classNames("fei-body", "fei-monday__body-6", { "fei-monday__body-6--after": afterEternity, })} src={body1} alt="body6" />
                <Thumbnail char={CHARS.somo} size="size-s" className={classNames("fei-monday__head-6", { "fei-monday__head-6--after": afterEternity, })} active={false} />
              </>
              }
              <div className="fei-deck fei-deck--layer-1" style={{ backgroundImage: `url(${bgLayer1})` }}></div>
              {player.id !== 'marc' && !afterEternity && <>
                <img className="fei-body fei-monday__body-3" src={body3} alt="body3" />
                <Thumbnail char={CHARS.marc} size="size-s" className="fei-monday__head-3" active={false} />
              </>}
              {player.id !== 'jose' && !afterEternity && <>
                <img className="fei-body fei-monday__body-4" src={body4} alt="body4" />
                <Thumbnail char={CHARS.jose} size="size-s" className="fei-monday__head-4" active={false} />
              </>}
              {player.id !== 'dani' && !afterEternity && <>
                <img className="fei-body fei-monday__body-5" src={body5} alt="body5" />
                <Thumbnail char={CHARS.dani} size="size-s" className="fei-monday__head-5" active={false} /></>
              }
              {player.id !== 'lilen' && !afterEternity && <>
                <img className="fei-body fei-monday__body-9" src={body5} alt="body9" />
                <Thumbnail char={CHARS.lilen} size="size-s" className="fei-monday__head-9" active={charActive === CHARS.lilen.id} />
              </>
              }
              {player.id !== 'dorian' && <>
                <img className="fei-body fei-monday__body-7" src={body3} alt="body7" />
                <Thumbnail char={CHARS.dorian} size="size-s" className="fei-monday__head-7" active={false} />
              </>
              }
              {player.id !== 'isaac' && <>
                <img className="fei-body fei-monday__body-8" src={body4} alt="body8" />
                <Thumbnail char={CHARS.isaac} size="size-s" className="fei-monday__head-8" active={false} />
              </>
              }
              {showCapi && <img className="fei-body fei-monday__capi" src={capi} alt="capi" />}
              <Player className="fei-monday__player" size="size-s" />
              <div className="fei-deck fei-deck--layer-2" style={{ backgroundImage: `url(${bgLayer2})` }}></div>
            </main>
            {showBubbles && <BubbleSet bubbleProps={secuenceBubbles[secuenceStage]} set={secuenceTexts[secuenceStage]} callback={secuenceCallback} show />}
            {showSecuence && <Dialog {...dialogProps[dialogIndex]} />}
          </div>}
      </FadeIn>
    </Page >
  );
};

export default Lunes;
