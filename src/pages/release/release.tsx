import React, { useState } from "react";
import classNames from "classnames";
import { sleep, CHARS, NPCS } from "../../utils/commons.js";
import { useRootContext } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Thumbnail from "../../components/thumbnail/thumbnail.tsx";
import bg from "../../assets/images/bgs/party.jpg";
import body1 from '../../assets/images/chars/body-1.png';
import body2 from '../../assets/images/chars/body-2.png';
import body4 from '../../assets/images/chars/body-4.png';
import body5 from '../../assets/images/chars/body-5.png';
import laptop from '../../assets/images/things/laptop.png';
import dance from '../../assets/images/dance.mp4';
import trololo from '../../assets/sounds/trololo.mp3';
import BubbleSet from "../../components/bubble/bubble-set.tsx";

import "./release.scss";

const Release = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadPage, setLoadPage] = useState('');
  const [activeSecuence, setActiveSecuence] = useState(0);
  const [secuenceStage, setSecuenceStage] = useState(0);
  const { player, setSong } = useRootContext();
  const [music, setMusic] = useState(trololo);
  const [charActive, setCharActive] = useState("");

  const secuenceBubbles1 = [
    {
      delay: 0,
      duration: [1500],
      endDelay: 800,
      color: CHARS.isaac.color,
      width: "200px",
      position: { top: 212, left: 141 },
      initCallback: () => setCharActive(CHARS.isaac.id),
      className: "fei-bubble--bg"
    },
    {
      delay: 0,
      duration: [1500],
      endDelay: 800,
      color: CHARS.jose.color,
      width: "300px",
      position: { top: 320, left: 55 },
      initCallback: () => setCharActive(CHARS.jose.id),
      className: "fei-bubble--bg"
    },
    {
      delay: 0,
      duration: [1500],
      endDelay: 1200,
      color: CHARS.lilen.color,
      width: "200px",
      position: { top: 303, left: 340 },
      initCallback: () => setCharActive(CHARS.lilen.id),
      className: "fei-bubble--bg"
    },
    {
      delay: 0,
      duration: [4000],
      endDelay: 1200,
      color: "#fcfcfc",
      width: "438px",
      position: { top: 218, left: 361 },
      initCallback: () => setCharActive(CHARS.aitor.id),
      className: "fei-bubble--bg"
    },
    {
      delay: 0,
      duration: [2000],
      endDelay: 1500,
      color: NPCS.capi.color,
      width: "300px",
      position: { top: 132, left: 12 },
      initCallback: () => setCharActive(NPCS.capi.id),
      className: "fei-bubble--bg"
    },
    {
      delay: 0,
      duration: [3500, 2500],
      endDelay: 4000,
      color: NPCS.capi.color,
      width: "350px",
      position: { top: 132, left: 12 },
      initCallback: () => setCharActive(NPCS.capi.id),
      className: "fei-bubble--bg"
    }
  ]

  const secuenceTexts1 = [
    ["¡Bravo!"],
    ["Olé, Olé!"],
    ["Wooooo!"],
    ["¡Un poco de silencio! ¡Estoy sacando release!"],
    ["¡No olvides los MFE!"],
    ["Qué sería de nosotros sin este tío...", "¿Alguien me pasa el grog?"]
  ];


  const secuenceCallback1 = async () => {
    if (secuenceStage < secuenceBubbles1.length - 1) {
      setSecuenceStage(secuenceStage + 1);
    } else {
      setActiveSecuence(0);
      setSecuenceStage(0);
      setFadeOut(true);
      setMusic("");
      await sleep(5000);
      setLoadPage("/final");
    }
  }


  const Secuence = ({ texts, bubbles, callback = () => { } }) => {
    return <BubbleSet bubbleProps={bubbles[secuenceStage]} set={texts[secuenceStage]} callback={callback} show />;
  }

  // useEffect(() => {
  // setActiveSecuence(1);
  // }, []);

  return (
    <Page fadeOut={fadeOut} load={loadPage} className="fei-release fei-page--top" >
      <FadeIn
        callback={async () => {
          setSong("");
          await sleep(12500);
          setActiveSecuence(1);
        }}
        delayStart={600}
      >
        <div>
          <main className={classNames("fei-release", "fei-page--cursor-none")} style={{ backgroundImage: `url(${bg})` }}>
            <div>
              <Thumbnail char={CHARS.aitor} size="size-s" className={classNames("fei-release__head-1")} active={charActive === CHARS.aitor.id} />
              <img className={classNames("fei-body", "fei-release__body-2")} src={body2} alt="body2" />
              <Thumbnail char={CHARS.isi} size="size-s" className={classNames("fei-release__head-2")} active={false} />
              <img className={classNames("fei-body", "fei-release__body-6")} src={body1} alt="body6" />
              <Thumbnail char={CHARS.somo} size="size-s" className={classNames("fei-release__head-6")} active={false} />
              <img className="fei-body fei-release__body-4" src={body4} alt="body4" />
              <Thumbnail char={CHARS.jose} size="size-s" className="fei-release__head-4" active={charActive === CHARS.jose.id} />
              <img className="fei-body fei-release__body-9" src={body5} alt="body9" />
              <Thumbnail char={CHARS.lilen} size="size-s" className="fei-release__head-9" active={charActive === CHARS.lilen.id} />
              <Thumbnail char={CHARS.dorian} size="size-s" className="fei-release__head-7" active={false} />
              <Thumbnail char={CHARS.isaac} size="size-s" className="fei-release__head-8" active={charActive === CHARS.isaac.id} />
              <Thumbnail char={NPCS.capi} size="size-s" className="fei-release__capi" active={charActive === NPCS.capi.id} />
              <img src={laptop} className="fei-release__laptop" alt="laptop" />
              <video className="fei-release__dance" src={dance} autoPlay loop muted />
              <audio src={`${music}#t=00:01:46`} loop autoPlay />
            </div>
            {activeSecuence === 1 && <Secuence texts={secuenceTexts1} bubbles={secuenceBubbles1} callback={secuenceCallback1} />}
          </main>
        </div>
      </FadeIn >
    </Page >
  );
};

export default Release;
