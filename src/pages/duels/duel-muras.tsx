import React, { useState, useEffect } from "react";
import { useRootContext, nextPage } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import duel from "../../assets/sounds/duels.mp3";
import { sleep } from '../../utils/commons.js';
import "./duels.scss";
import classNames from "classnames";
import { NPCS } from "../../utils/commons.js";
import BubbleSet from "../../components/bubble/bubble-set.tsx";
import Dialog from "../../components/dialog/dialog.tsx";
import bg from "../../assets/images/bgs/duel-muras2.png";
import Thumbnail from "../../components/thumbnail/thumbnail.tsx";

const DuelMuras = () => {
  const { setSong, player, addMissionAccomplished } = useRootContext();
  const [bubbleActive, setBubbleActive] = useState(-1);
  const [showDialog, setShowDialog] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loadPage, setLoadPage] = useState('');
  const [points, setPoints] = useState(0);

  const options = [[
    { id: '0-a', text: "Siempre" },
    { id: '0-b', text: "Nunca" },
    { id: '0-c', text: "Depende" },
    { id: '0-d', text: "Eso no existe" }
  ], [
    { id: '1-a', text: "LaLiga EA Sports" },
    { id: '1-b', text: "LaLiga Hypermotion" },
    { id: '1-c', text: "Primera Federación" },
    { id: '1-d', text: "Jugar dice..." }
  ], [
    { id: '2-a', text: "Alberto" },
    { id: '2-b', text: "A. Muras" },
    { id: '2-c', text: "A. M. Geada" },
    { id: '2-d', text: "El infame trepa y traidor de Picazo que se hace llamar Capi porque no llega ni a CAPITÁN" }
  ]];

  const secuenceBubbles = [
    {
      delay: 2000,
      duration: [2500, 3000, 2600, 3200],
      endDelay: 500,
      color: NPCS.muras.color,
      width: "410px",
      position: { top: 144, left: 8 }
    },
    {
      delay: 500,
      duration: [2500, 2500],
      endDelay: 500,
      color: NPCS.muras.color,
      width: "410px",
      position: { top: 144, left: 8 }
    },
    {
      delay: 500,
      duration: [2500, 2800],
      endDelay: 500,
      color: NPCS.muras.color,
      width: "410px",
      position: { top: 144, left: 8 }
    },
    {
      delay: 500,
      duration: [2500, 2300, 3500],
      endDelay: 500,
      color: NPCS.muras.color,
      width: "410px",
      position: { top: 144, left: 8 }
    }
  ];

  function getAnswers(question) {
    switch (question) {
      case 0: switch (answers[question]) {
        case "0-a": return "Qué mala suerte has tenido";
        case "0-b": return "Eso es que no los has probado";
        case "0-c": return "¡Bien!";
        case "0-d": return "Ignorante de la vida";
      } break;
      case 1: switch (answers[question]) {
        case "1-a": return "Nah, era muy aburrida";
        case "1-b": return "Eso nos viene pequeño";
        case "1-c": return "Nos gusta formar a los jóvenes";
        case "1-d": return "Hoy duermes con los tiburones, grumete";
      } break;
      case 2: switch (answers[question]) {
        case "2-a": return "Veo que sabes de capitanes";
        case "2-b": return "Veo que sabes de capitanes";
        case "2-c": return "Veo que sabes de capitanes";
        case "2-d": return "Pobre alma, no sabes nada del mar";
      } break;
      case 3: switch (points) {
        case 0: return "Espero que hayas aprendido algo, porque vaya tela...";
        case 1: return "Sigue intenándolo, te queda mucho por aprender";
        case 2: return "No ha estado mal, tienes potencial";
        case 3: return "Lo has hecho bien. Serás un gran pirata";
      } break;
      default: return "";
    }
  }

  const secuenceTexts = player.gender === "male" ? [[
    "Vaya, vaya, vaya...",
    `¡¡${player.name?.toUpperCase()}!! ¡Volvemos a encontrarnos!`,
    "Vamos allá:",
    "Los pimientos de Padrón... ¿Pican?",
  ],
  [getAnswers(0), "El Club Deportivo Lugo juega en..."],
  [getAnswers(1), "El mejor capitán de las aguas del front es..."],
  [getAnswers(2), "Hasta aquí nuestro duelo", getAnswers(3)]
  ] : [[
    "Vaya, vaya, vaya...",
    `¡¡${player.name?.toUpperCase()}!! ¡Volvemos a encontrarnos!`,
    "Vamos allá:",
    "Los pimientos de Padrón...",
  ],
  [getAnswers(0), "El Club Deportivo Lugo juega en..."],
  [getAnswers(1), "El mejor capitán de las aguas del front es..."],
  [getAnswers(2), "Hasta aquí nuestro duelo", getAnswers(3)]
  ];

  async function bubblesCallback() {
    setBubbleActive(-1)
    if (currentQuestion < options.length) { setShowDialog(true) }
    else {
      setFadeOut(true);
      await sleep(1500);
      setLoadPage(nextPage.duels);
    }
  }

  const selectionCallback = (option) => {
    setShowDialog(false);
    switch (currentQuestion) {
      case 0: if (option.id === "0-c") { setPoints(points + 1) } break;
      case 1: if (option.id === "1-c") { setPoints(points + 1) } break;
      case 2: if (option.id !== "2-d") { setPoints(points + 1) } break;
    }
    setAnswers([...answers, option.id]);
    setBubbleActive(currentQuestion + 1);
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <Page load={loadPage} fadeOut={fadeOut} className="fei-page--top" >
      <FadeIn
        callback={() => {
          addMissionAccomplished("duels");
          setBubbleActive(0);
          setSong(duel);
        }}
        delayStart={500}
      >
        <main className={classNames("fei-duels-muras fei-bg")} style={{ backgroundImage: `url(${bg})` }}>
          <Thumbnail char={player} className="fei-duel__thumbnail" />
          {bubbleActive >= 0 && <BubbleSet bubbleProps={secuenceBubbles[bubbleActive]} set={secuenceTexts[bubbleActive]} callback={bubblesCallback} />}
        </main>
        {showDialog && <Dialog speaker={player} options={options[currentQuestion]} callback={selectionCallback} />}
      </FadeIn>
    </Page>
  );
};

export default DuelMuras;
