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
import { NPCS } from "../../utils/commons.js";
import BubbleSet from "../../components/bubble/bubble-set.tsx";

const Bar = () => {
  const { setSong, player, setFadeOut } = useRootContext();
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [secuenceStage, setSecuenceStage] = useState(0);
  const navigate = useNavigate();
  const bg = player.id === "isi" ? bg2 : player.id === "aitor" ? bg3 : bg1;

  const secuenceBubbles = [
    {
      delay: 12000,
      duration: [2400, 3000, 2600, 4500, 2200, 2500, 2000],
      endDelay: 2000,
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
      duration: [1200, 3000],
      endDelay: 2000,
      color: NPCS.capi.color,
      width: "475px",
      position: { top: 275, left: 1300 }
    }
  ]

  const secuenceTexts = player.gender === "male" ? [[
    `¡Hey! ¡¡${player.name?.toUpperCase()}!!`,
    "¿Viste el cartel de la puerta?",
    "!Te estabamos esperando!",
    "Vamos a emprender un viaje hacia lo desconocido.",
    "Viviremos mil peligros y...",
    "probablemente moriremos.",
    "¿Te apuntas?"
  ], ["Estooo, ¿no?"], ["Bienvenidooo!!",
    "Zarparemos antes de que salga el sol...",
  ]
  ] : [[
    `¡Hey! ¡¡${player.name?.toUpperCase()}!!`,
    "¿Viste el cartel de la puerta?",
    "!Te estabamos esperando!",
    "Vamos a emprender un viaje hacia lo desconocido.",
    "Viviremos mil peligros y...",
    "probablemente moriremos.",
    "¿Te apuntas?"
  ],
  ["Estooo, ¿no?"],
  ["Bienvenidaaa!!",
    "Zarparemos antes de que salga el sol...",
  ]];

  async function secuenceDone() {
    setFadeOut();
    // navigate(nextPage.introIsland);
  }

  const secuenceCallback = () => {
    if (secuenceStage < secuenceBubbles.length - 1) {
      setSecuenceStage(secuenceStage + 1);
    } else {
      secuenceDone();
    }
  }

  const Secuence = () => {
    return <BubbleSet bubbleProps={secuenceBubbles[secuenceStage]} set={secuenceTexts[secuenceStage]} callback={secuenceCallback} />;
  }


  useEffect(() => {
    setSong(bar, true);
  }, []);

  return (
    <Page className="fei-page--bar">
      <FadeIn
        callback={() => {
          setActiveSecuence(true);
        }}
        delayStart={500}
      >
        <main className={classNames("fei-bg fei-bar", { "fei-bar--slide": activeSecuence })} style={{ backgroundImage: `url(${bg})` }}>
          <Player className="fei-bar__player" />
          <Secuence />
        </main>
      </FadeIn>
    </Page>
  );
};

export default Bar;
