import React, { useState, useEffect } from "react";
import { useRootContext, nextPage } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import duel from "../../assets/sounds/duel-oscar.mp3";
import "./duels.scss";
import classNames from "classnames";
import { NPCS, sleep } from "../../utils/commons.js";
import BubbleSet from "../../components/bubble/bubble-set.tsx";
import Dialog from "../../components/dialog/dialog.tsx";
import bg from "../../assets/images/bgs/duel-oscar.png";
import Thumbnail from "../../components/thumbnail/thumbnail.tsx";

const DuelOscar = () => {
  const { setSong, player } = useRootContext();
  const [bubbleActive, setBubbleActive] = useState(-1);
  const [showDialog, setShowDialog] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loadPage, setLoadPage] = useState('');
  const [points, setPoints] = useState(0);

  const options = [[
    { id: '0-a', text: "La declarativa define prototypes para instanciar y la imperativa objetos y callbacks" },
    { id: '0-b', text: "La imperativa utiliza MAYÚSCULAS y la declarativa una voz romántica" },
    { id: '0-c', text: "La imperativa define CÓMO conseguir un resultado y la declarativa QUÉ resultado conseguir" },
    { id: '0-d', text: "La imperativa es puramente secuencial y la declarativa es funcional" }

  ], [
    { id: '1-a', text: "No me pillas, te lo acabas de inventar" },
    { id: '1-b', text: "Cachear la respuesta de una función para un input y evitar el cálculo cada vez" },
    { id: '1-c', text: "Evitar el re-renderizado de un componente aunque cambien las props" },
    { id: '1-d', text: "Es memorization y sirve para guardar el estado en la sesión del navegador" }
  ], [
    { id: '2-a', text: "Una capa con shadowDOM para que nuestra librería se rompa en los MicroFronts" },
    { id: '2-b', text: "Me aburro de leer opciones tan largas" },
    { id: '2-c', text: "Una copia del DOM con los nodos en formato JS-Object" },
    { id: '2-d', text: "Estructura de punteros a las instancias físicas de los Nodos" }
  ]];

  const secuenceBubbles = [
    {
      delay: 2000,
      duration: [2800, 4000, 3200, 4500],
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
        case "0-a": return "Ja! Vas de tiburón y eres una sardinilla";
        case "0-b": return "Oh! Me matas de ternura";
        case "0-c": return "Sorprendente, sorprendente...";
        case "0-d": return "Debes ser de los que llaman barco a un tablón flotando";
        default: return "Meh...";
      }
      case 1: switch (answers[question]) {
        case "1-a": return "Por favor... no me hagas reír";
        case "1-b": return "Ah! Hasta un reloj roto acierta dos veces al día";
        case "1-c": return "Asustas a los niños con la performance de tus componentes";
        case "1-d": return "Se nota que lo has usado 0 unidades de veces";
        default: return "Meh...";
      }
      case 2: switch (answers[question]) {
        case "2-a": return "Mucho odio, poco conocimiento";
        case "2-b": return "Yo sí que estoy aburrido de ti";
        case "2-c": return "Genial, sabes leer y todo";
        case "2-d": return "Usas muchas palabras para equivocarte";
        default: return "Meh...";
      }
      case 3: switch (points) {
        case 0: return "Vuelve a tu barquito a lamerte las heridas. ¡No has dado ni una!";
        case 1: return "Al menos haces bulto mientras otros luchan";
        case 2: return "Eres competente, un buen rival";
        case 3: return "Cuando tu barco se hunda, únete a mi tripulación";
        default: return "Meh...";
      }
      default: return "Meh...";
    }
  }

  const secuenceTexts = player.gender === "male" ? [[
    "Uy, ¡mira! Un pepino de mar nos aborda",
    "Soy el capitán Lijó, el más temido de los mares",
    "Pongamos a prueba el filo de esa espada",
    "La diferencia entre programación imperativa y declarativa es...",
  ],
  [getAnswers(0), "Sigamos: ¿Qué es memoization?"],
  [getAnswers(1), "¡Levanta esa espada! ¿Qué es el virtual DOM?"],
  [getAnswers(2), "Ha sido un duelo divertido", getAnswers(3)]
  ] : [[
    "Uy, ¡mira! Un pepino de mar nos aborda",
    "Soy el capitán Lijó, el más temido de los mares",
    "Pongamos a prueba el filo de esa espada",
    "La diferencia entre programación imperativa y declarativa es...",
  ],
  [getAnswers(0), "Sigamos: ¿Qué es memoization?"],
  [getAnswers(1), "¡Levanta esa espada! ¿Qué es el virtual DOM?"],
  [getAnswers(2), "Ha sido un duelo divertido", getAnswers(3)]
  ];

  async function bubblesCallback() {
    setBubbleActive(-1)
    if (currentQuestion < options.length) { setShowDialog(true) }
    else {
      setFadeOut(true);
      await sleep(1500);
      setLoadPage(nextPage.DuelOScar);
    }
  }

  const selectionCallback = (option) => {
    setShowDialog(false);
    switch (currentQuestion) {
      case 0: if (option.id === "0-c") { setPoints(points + 1) } break;
      case 1: if (option.id === "1-b") { setPoints(points + 1) } break;
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
        <main className={classNames("fei-duels-muras fei-bg")} style={{ backgroundImage: `url(${bg})` }}>
          <Thumbnail char={player} className="fei-duel__thumbnail" />
          {bubbleActive >= 0 && <BubbleSet bubbleProps={secuenceBubbles[bubbleActive]} set={secuenceTexts[bubbleActive]} callback={bubblesCallback} />}
        </main>
        {showDialog && <Dialog speaker={player} options={options[currentQuestion]} callback={selectionCallback} />}
      </FadeIn>
    </Page>
  );
};

export default DuelOscar;
