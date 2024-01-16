import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRootContext, nextPage } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Player from "../../components/player/player.tsx";
import bg1 from "../../assets/images/bgs/barfinal-ai-isi.jpg";
import bg2 from "../../assets/images/bgs/barfinal-ai-lilen.jpg";
import bg3 from "../../assets/images/bgs/barfinal-so-isi.jpg";
import bar from "../../assets/sounds/bar.mp3";
import "./bar.scss";
import classNames from "classnames";
import { NPCS, CHARS, sleep } from "../../utils/commons.js";
import BubbleSet from "../../components/bubble/bubble-set.tsx";
import Dialog from "../../components/dialog/dialog.tsx";

const Bar = () => {
  const { setSong, player } = useRootContext();
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [activeSlide, setActiveSlide] = useState(false);
  const [active2Secuence, setActive2Secuence] = useState(false);
  const [secuenceStage, setSecuenceStage] = useState(0);
  const [secuence2Stage, setSecuence2Stage] = useState(0);
  const navigate = useNavigate();
  const bg = player.id === "isi" ? bg2 : player.id === "aitor" ? bg3 : bg1;
  const [showDialog, setShowDialog] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [answer, setAnswer] = useState('');

  const options = [
    { id: 'front', text: "Quiero vivir en el paraíso desarrollando front-end" },
    { id: 'back', text: "Quiero sufrir eternamente en el calabozo del black-end" },
    { id: 'ux', text: "Quiero vivir un eterno viaje psicodélico en el mundo del UX" }
  ];

  const secuenceBubbles = [
    {
      delay: 12000,
      duration: [1800, 3000, 2600, 4000, 2200],
      endDelay: 500,
      color: NPCS.capi.color,
      width: "475px",
      position: { top: 275, left: 1300 }
    },
    {
      delay: 0,
      duration: [2500],
      endDelay: 100,
      color: player.id !== "isi" ? CHARS.isi.color : CHARS.lilen.color,
      width: "300px",
      position: { top: 260, left: 1500 }
    },
    {
      delay: 0,
      duration: [2000],
      endDelay: 200,
      color: NPCS.capi.color,
      width: "475px",
      position: { top: 275, left: 1300 }
    },
    {
      delay: 0,
      duration: [1600],
      endDelay: 200,
      color: player.color,
      width: "400px",
      position: { top: 230, left: 1300 + 370 }
    },
    {
      delay: 0,
      duration: [1200, 3000, 2500],
      endDelay: 500,
      color: NPCS.capi.color,
      width: "475px",
      position: { top: 275, left: 1300 }
    }
  ]

  const secuenceTexts = player.gender === "male" ? [[
    `¡Hey! ¡¡${player.name?.toUpperCase()}!!`,
    "¿Viste el cartel de la puerta?",
    "¡Te estábamos esperando!",
    "Vamos a emprender un viaje hacia lo desconocido.",
    "Buscaremos tesoros y..."
  ],
  ["Probablemente moriremos."],
  ["¿Te apuntas?"],
  ["Estooo, ¿no?"],
  ["Bienvenidooo!!",
    "Zarparemos antes de que salga el sol...",
    "Por ser tú te vamos a dejar elegir profesión:"
  ]
  ] : [[
    `¡Hey! ¡¡${player.name?.toUpperCase()}!!`,
    "¿Viste el cartel de la puerta?",
    "¡Te estábamos esperando!",
    "Vamos a emprender un viaje hacia lo desconocido.",
    "Buscaremos tesoros y..."
  ],
  ["Probablemente moriremos."],
  ["¿Te apuntas?"],
  ["Estooo, ¿no?"],
  ["Bienvenidaaa!!",
    "Zarparemos antes de que salga el sol...",
    "Por ser tú te vamos a dejar elegir profesión:"
  ]];

  const secuence2Bubbles = [{
    delay: 200,
    duration: [3000],
    endDelay: 1000,
    color: player.color,
    width: "475px",
    position: { top: 200, left: 1600 }
  }, {
    delay: 50,
    duration: [1000, 3000, 1800, 3000],
    endDelay: 1000,
    color: NPCS.capi.color,
    width: "475px",
    position: { top: 275, left: 1300 }
  },];

  const secuence2Texts = player.gender === "male" ? [
    [
      answer === 'front' || answer === 'ux' ? options[2].text : options[1].text
    ],
    [
      "Khá?",
      answer === 'front' || answer === 'ux' ? "Qué rarito eres. Tenemos una cofia." : "Te abandonaremos en la isla de las cabezas menguadas.",
      "Allí serás feliz.",
      "¡Ahora a beber! Que mañana hay que madrugar."
    ]] : [
    [
      answer === 'front' || answer === 'ux' ? options[2].text : options[1].text
    ],
    [
      "Khá?",
      answer === 'front' || answer === 'ux' ? "Qué rarita eres. Tenemos una cofia." : "Te abandonaremos en la isla de las cabezas menguadas.",
      "Allí serás feliz.",
      "¡Ahora a beber! Que mañana hay que madrugar."
    ]
  ];

  async function secuenceDone() {
    setFadeOut(true);
    await sleep(1000);
    navigate(nextPage.bar);
  }

  const secuenceCallback = () => {
    if (secuenceStage < secuenceBubbles.length - 1) {
      setSecuenceStage(secuenceStage + 1);
    } else {
      setActiveSecuence(false);
      setShowDialog(true);
    }
  }
  const secuence2Callback = () => {
    if (secuence2Stage < secuence2Bubbles.length - 1) {
      setSecuence2Stage(secuence2Stage + 1);
    } else {
      setActive2Secuence(false);
      secuenceDone();
    }
  }

  const Secuence = () => {
    return <BubbleSet bubbleProps={secuenceBubbles[secuenceStage]} set={secuenceTexts[secuenceStage]} callback={secuenceCallback} />;
  }

  const selectionCallback = (option) => {
    setShowDialog(false);
    setAnswer(option.id);
    setActive2Secuence(true);
  }
  useEffect(() => {
    setSong(bar, true);
  }, []);

  return (
    <Page className="fei-page--bar fei-page--top" fadeOut={fadeOut}>
      <FadeIn
        callback={() => {
          setActiveSlide(true);
          setActiveSecuence(true);
        }}
        delayStart={500}
      >
        <main className={classNames("fei-bg fei-bar", { "fei-bar--slide": activeSlide })} style={{ backgroundImage: `url(${bg})` }}>
          <Player className="fei-bar__player" />
          {activeSecuence && <Secuence />}
          {active2Secuence && <BubbleSet bubbleProps={secuence2Bubbles[secuence2Stage]} set={secuence2Texts[secuence2Stage]} callback={secuence2Callback} />}
        </main>
        {showDialog && <Dialog speaker={player} options={options} callback={selectionCallback} />}
      </FadeIn>
    </Page>
  );
};

export default Bar;
