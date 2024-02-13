import React, { useState, useEffect } from "react";
import { useRootContext, nextPage } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import duel from "../../assets/sounds/duel-oscar.mp3";
import "./duels.scss";
import classNames from "classnames";
import { CHARS, NPCS, sleep } from "../../utils/commons.js";
import BubbleSet from "../../components/bubble/bubble-set.tsx";
import Dialog from "../../components/dialog/dialog.tsx";
import bg from "../../assets/images/bgs/duel-andrea.png";
import Thumbnail from "../../components/thumbnail/thumbnail.tsx";

const DuelAndrea = () => {
  const { setSong, player } = useRootContext();
  const [bubbleActive, setBubbleActive] = useState(-1);
  const [showDialog, setShowDialog] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loadPage, setLoadPage] = useState('');
  const [points, setPoints] = useState(0);

  const options = [[
    { id: '0-a', text: "¿Khá?" },
    { id: '0-b', text: "Bombón, Burbuja y Bellota" },
    { id: '0-c', text: "Isi, Lilen y Dani" },
    { id: '0-d', text: "Pétalo, Burbuja y Cáctus" }

  ], [
    { id: '1-a', text: "Hay tantos diseños de una misma cosa que ya no sabes cuál es el bueno" },
    { id: '1-b', text: "Lo más probable es que tenga un filtro puesto y una rana en la cabeza" },
    { id: '1-c', text: (player.id === CHARS.lilen.id || player.id === CHARS.isi.id || player.id === CHARS.aitor.id) ? "Nostalgias de un tiempo pasado" : "Nostalgias de un tiempo pasado que no viví" },
    { id: '1-d', text: "Hay algo en un componente que no encaja con el diseño" }
  ], [
    { id: '2-a', text: "Cerveza 1906, por supuesto" },
    { id: '2-b', text: "Orujo de hierbas, ¿somos piratas o qué?" },
    { id: '2-c', text: "Albariño, que tampoco somos salvajes" },
    { id: '2-d', text: "Licor café, que calienta el cuerpo" }
  ]];

  const secuenceBubbles = [
    {
      delay: 2000,
      duration: [2800, 4000, 4500],
      endDelay: 500,
      color: NPCS.oscar.color,
      width: "410px",
      position: { top: 144, left: 8 }
    },
    {
      delay: 500,
      duration: [3000, 4000],
      endDelay: 500,
      color: NPCS.oscar.color,
      width: "410px",
      position: { top: 144, left: 8 }
    },
    {
      delay: 500,
      duration: [3000, 4000],
      endDelay: 500,
      color: NPCS.oscar.color,
      width: "410px",
      position: { top: 144, left: 8 }
    },
    {
      delay: 500,
      duration: [3200, 2000, 3500],
      endDelay: 500,
      color: NPCS.oscar.color,
      width: "410px",
      position: { top: 144, left: 8 }
    }
  ];

  function getAnswers(question) {
    switch (question) {
      case 0: switch (answers[question]) {
        case "0-a": return "Tienes tan poca cultura como tu capitán";
        case "0-b": return player.id === CHARS.lilen.id || player.id === CHARS.dorian.id ? "Conservas tus raíces! Me gusta." : "Pasas demasiado tiempo con Lilen";
        case "0-c": return (player.id === CHARS.lilen.id || player.id === CHARS.isi.id || player.id === CHARS.dani.id) ? "Girl power forever" : "¡Buena respuesta!";
        case "0-d": return player.id === CHARS.lilen.id || player.id === CHARS.dorian.id ? "La respuesta es correcta, pero me decepcionas" : "Correcto, pero no era la mejor respuesta";
        default: return "Meh...";
      }
      case 1: switch (answers[question]) {
        case "1-a": return "Tú te lías, pero yo no";
        case "1-b": return "Eso ya no me parece ni raro";
        case "1-c": return "Buenos tiempos...";
        case "1-d": return "Error, no era yo quien decía eso";
        default: return "Meh...";
      }
      case 2: switch (answers[question]) {
        case "2-a": return "Por supuesto";
        case "2-b": return "Somos, somos";
        case "2-c": return "Tienes buen gusto";
        case "2-d": return "Y el alma";
        default: return "Meh...";
      }
      case 3: switch (points) {
        case 0: return "0 points to Front, ¡al calaboso!";
        case 1: return "1 point to Front. Lamentable";
        case 2: return "2 points to Front. QUX MVP approved";
        case 3: return "3 points to Front. QUX passed";
        default: return "Meh...";
      }
      default: return "Meh...";
    }
  }

  const secuenceTexts = [[
    "Estás muy lejos de tu barco, percebe",
    "Soy la capitana Andrea, y no dais un paso sin que yo lo vea",
    "A ver: ¿quiénes son las supernenas?",
  ],
  [getAnswers(0), "Si te digo que: 'veo cosas raras', ¿qué significa?"],
  [getAnswers(1), "¿Cuál es el mejor caldo?"],
  [getAnswers(2), "La suerte es caprichosa, ahora largo de mi barco", getAnswers(3)]
  ]

  async function bubblesCallback() {
    setBubbleActive(-1)
    if (currentQuestion < options.length) { setShowDialog(true) }
    else {
      setFadeOut(true);
      await sleep(1500);
      setLoadPage(nextPage.duelAndrea);
    }
  }

  const selectionCallback = (option) => {
    setShowDialog(false);
    switch (currentQuestion) {
      case 0: if (option.id !== "0-a") { setPoints(points + 1) } break;
      case 1: if (option.id === "1-c") { setPoints(points + 1) } break;
      case 2: if (option.id === "2-c") { setPoints(points + 1) } break;
    }
    setAnswers([...answers, option.id]);
    setBubbleActive(currentQuestion + 1);
    setCurrentQuestion(currentQuestion + 1);
  }

  useEffect(() => {
    setSong(duel);
  }, []);

  return (
    <Page load={loadPage} fadeOut={fadeOut} className="fei-page--top" >
      <FadeIn
        callback={() => {
          setBubbleActive(0);
        }}
        delayStart={500}
      >
        <main className={classNames("fei-duels-andrea fei-bg")} style={{ backgroundImage: `url(${bg})` }}>
          <Thumbnail char={player} className="fei-duel__thumbnail" />
          {bubbleActive >= 0 && <BubbleSet bubbleProps={secuenceBubbles[bubbleActive]} set={secuenceTexts[bubbleActive]} callback={bubblesCallback} />}
        </main>
        {showDialog && <Dialog speaker={player} options={options[currentQuestion]} callback={selectionCallback} />}
      </FadeIn>
    </Page>
  );
};

export default DuelAndrea;
