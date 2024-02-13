import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { sleep, CHARS, NPCS } from "../../utils/commons.js";
import { nextPage, useRootContext } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Player from "../../components/player/player.tsx";
import Thumbnail from "../../components/thumbnail/thumbnail.tsx";
// import Secuence from "../../components/secuence/secuence.tsx";
import bg from "../../assets/images/bgs/deck-0.jpg";
import bgLayer1 from "../../assets/images/bgs/deck-1.png";
import bgLayer2 from "../../assets/images/bgs/deck-2.png";
import body1 from '../../assets/images/chars/body-1.png';
import body2 from '../../assets/images/chars/body-2.png';
import body3 from '../../assets/images/chars/body-3.png';
import body4 from '../../assets/images/chars/body-4.png';
import body5 from '../../assets/images/chars/body-5.png';
import capi from '../../assets/images/npcs/capi-body.png';
import priest from '../../assets/images/things/priest.gif';
import BubbleSet from "../../components/bubble/bubble-set.tsx";

import "./friday.scss";

const Viernes = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadPage, setLoadPage] = useState('');
  const [activeSecuence, setActiveSecuence] = useState(0);
  const [secuenceStage, setSecuenceStage] = useState(0);
  const [gifSecuence, setGifSecuence] = useState(false);
  const { player, setSong } = useRootContext();
  const [charActive, setCharActive] = useState("");

  const secuenceBubbles1 = [
    {
      delay: 3000,
      duration: [3000, 3000, 2600],
      endDelay: 500,
      color: NPCS.capi.color,
      width: "475px",
      position: { top: 620, left: 20 },
      className: "fei-bubble--bg"
    },
    {
      delay: 500,
      duration: [900],
      endDelay: 200,
      color: player.id === "isaac" ? CHARS.aitor.color : CHARS.isaac.color,
      initCallback: () => setCharActive(player.id === "isaac" ? CHARS.aitor.id : CHARS.isaac.id),
      width: "200px",
      position: player.id === "isaac" ? { top: 147, left: 112 } : { top: 297, left: 625 },
      className: "fei-bubble--bg"
    },
    {
      delay: 500,
      duration: [900],
      endDelay: 200,
      color: player.id === "dani" ? CHARS.lilen.color : CHARS.dani.color,
      initCallback: () => setCharActive(player.id === "dani" ? CHARS.lilen.id : CHARS.dani.id),
      width: "200px",
      position: player.id === "dani" ? { top: 263, left: 580 } : { top: 286, left: 494 },
      className: "fei-bubble--bg"
    },
    {
      delay: 500,
      duration: [900],
      endDelay: 200,
      color: player.id === "marc" ? CHARS.somo.color : CHARS.marc.color,
      initCallback: () => setCharActive(player.id === "marc" ? CHARS.somo.id : CHARS.marc.id),
      width: "200px",
      position: player.id === "marc" ? { top: 63, left: 367 } : { top: 258, left: 244 },
      className: "fei-bubble--bg"
    },
    {
      delay: 2000,
      duration: [2500, 2800],
      endDelay: 500,
      color: NPCS.capi.color,
      width: "475px",
      position: { top: 620, left: 20 },
      className: "fei-bubble--bg"
    }
  ]

  const secuenceTexts1 = player.gender === "male" ? [[
    "Nos hemos ganado un descanso",
    "Ha sido una buena semana",
    `¡Bienvenido a tu nuevo hogar, ${player.name}!`
  ],
  ["¡Bravo!"],
  ["¡Bravo!"],
  ["¡Bravo!"],
  ["...tengo la sensación...",
    "...de que se me olvida algo..."],
  ] : [[
    "Nos hemos ganado un descanso",
    "Ha sido una buena semana",
    `¡Bienvenida a tu nuevo hogar, ${player.name}!`
  ],
  ["¡Bravo!"],
  ["¡Bravo!"],
  ["¡Bravo!"],
  ["...tengo la sensación...",
    "...de que se me olvida algo..."]];

  const secuenceTexts2 = [
    ["jejeje", "Reverendo, nos debe usted unas palabras"],
    [
      `Cada día me siento más unido,
      me enseñaste que somos más que compañeros,
      no solo el respeto fue lo prometido,
      y sin embargo somos los primeros.`,
      `Los primeros en ayudar,
      los primeros en aprender,
      los primeros en avanzar,
      los primeros en crecer.`,
      `No se es primero sin humildad,
      lo importante para ti lo es para mí,
      respeto sin importar la edad,
      no existe el nosotros sin mí.`,
      `Un equipo debe tener sus valores,
      no es fácil ser roca sólida,
      pues sí! para ti todas las flores,
      ahora FRONTSGA es nuestra vida.`
    ],
    ["Gran discurso", "Ahora sí: ¡Buen finde, tripulación!"],
  ];

  const secuenceBubbles2 = [
    {
      delay: 3000,
      duration: [1800, 2500],
      endDelay: 0,
      color: NPCS.capi.color,
      width: "475px",
      position: { top: 620, left: 20 },
      className: "fei-bubble--bg"
    },
    {
      delay: 1500,
      duration: [7000, 7000, 7000, 7000],
      endDelay: 0,
      color: CHARS.jose.color,
      initCallback: () => setCharActive(CHARS.jose.id),
      width: "580px",
      position: player.id === CHARS.jose.id ? { top: 90, left: 20 } : { top: 125, left: 20 },
      className: "fei-bubble--bg fei-bubble--speech"
    },
    {
      delay: 2000,
      duration: [2500, 3000],
      endDelay: 2000,
      color: NPCS.capi.color,
      initCallback: () => setCharActive(""),
      width: "475px",
      position: { top: 620, left: 20 },
      className: "fei-bubble--bg"
    }
  ];

  const secuenceCallback1 = async () => {
    if (secuenceStage < secuenceBubbles1.length - 1) {
      setSecuenceStage(secuenceStage + 1);
    } else {
      setActiveSecuence(0);
      setGifSecuence(true);
      await sleep(3800);
      setGifSecuence(false);
      setSecuenceStage(0);
      setActiveSecuence(2);
    }
  }

  const secuenceCallback2 = async () => {
    if (secuenceStage < secuenceBubbles2.length - 1) {
      setSecuenceStage(secuenceStage + 1);
    } else {
      setActiveSecuence(0);
      setFadeOut(true);
      await sleep(2000);
      // setLoadPage("/release");
      setLoadPage("/day");
    }
  }

  const Secuence = ({ texts, bubbles, callback = () => { } }) => {
    return <BubbleSet bubbleProps={bubbles[secuenceStage]} set={texts[secuenceStage]} callback={callback} show />;
  }

  return (
    <Page fadeOut={fadeOut} load={loadPage} className="fei-friday fei-page--top" >
      <FadeIn
        callback={async () => {
          setSong("");
          await sleep(2000);
          setActiveSecuence(1);
        }}
        delayStart={600}
      >
        <div>
          <main className={classNames("fei-deck", "fei-page--cursor-none")} style={{ backgroundImage: `url(${bg})` }}>
            <div>
              {player.id !== 'aitor' && <>
                <img className={classNames("fei-body", "fei-friday__body-1")} src={body1} alt="body1" />
                <Thumbnail char={CHARS.aitor} size="size-s" className={classNames("fei-friday__head-1")} active={false} />
              </>
              }
              {player.id !== 'isi' && <>
                <img className={classNames("fei-body", "fei-friday__body-2")} src={body2} alt="body2" />
                <Thumbnail char={CHARS.isi} size="size-s" className={classNames("fei-friday__head-2")} active={false} /></>
              }
              {player.id !== 'somo' && <>
                <img className={classNames("fei-body", "fei-friday__body-6")} src={body1} alt="body6" />
                <Thumbnail char={CHARS.somo} size="size-s" className={classNames("fei-friday__head-6")} active={false} />
              </>
              }
              <div className="fei-deck fei-deck--layer-1" style={{ backgroundImage: `url(${bgLayer1})` }}></div>
              {player.id !== 'marc' && <>
                <img className="fei-body fei-friday__body-3" src={body3} alt="body3" />
                <Thumbnail char={CHARS.marc} size="size-s" className="fei-friday__head-3" active={false} />
              </>}
              {player.id !== 'jose' && <>
                <img className="fei-body fei-friday__body-4" src={body4} alt="body4" />
                <Thumbnail char={CHARS.jose} size="size-s" className="fei-friday__head-4" active={false} />
              </>}
              {player.id !== 'dani' && <>
                <img className="fei-body fei-friday__body-5" src={body5} alt="body5" />
                <Thumbnail char={CHARS.dani} size="size-s" className="fei-friday__head-5" active={false} /></>
              }
              {player.id !== 'lilen' && <>
                <img className="fei-body fei-friday__body-9" src={body5} alt="body9" />
                <Thumbnail char={CHARS.lilen} size="size-s" className="fei-friday__head-9" active={false} />
              </>
              }
              {player.id !== 'dorian' && <>
                <img className="fei-body fei-friday__body-7" src={body3} alt="body7" />
                <Thumbnail char={CHARS.dorian} size="size-s" className="fei-friday__head-7" active={false} />
              </>
              }
              {player.id !== 'isaac' && <>
                <img className="fei-body fei-friday__body-8" src={body4} alt="body8" />
                <Thumbnail char={CHARS.isaac} size="size-s" className="fei-friday__head-8" active={false} />
              </>
              }
              <img className="fei-body fei-friday__capi" src={capi} alt="capi" />
            </div>

            <Player className="fei-friday__player" size="size-s" />
            {activeSecuence === 1 && <Secuence texts={secuenceTexts1} bubbles={secuenceBubbles1} callback={secuenceCallback1} />}
            {activeSecuence === 2 && <Secuence texts={secuenceTexts2} bubbles={secuenceBubbles2} callback={secuenceCallback2} />}
            {gifSecuence && <img src={priest} className="fei-friday__priest" alt="priest" />}
            <div className="fei-deck fei-deck--layer-2" style={{ backgroundImage: `url(${bgLayer2})` }}></div>
          </main>
        </div>
      </FadeIn>
    </Page >
  );
};

export default Viernes;
