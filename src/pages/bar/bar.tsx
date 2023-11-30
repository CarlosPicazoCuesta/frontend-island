import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRootContext } from "../../utils/context/context.js";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Player from "../../components/player/player.tsx";
import bg1 from "../../assets/images/bgs/barfinal-ai-isi.jpg";
// import bg2 from "../../assets/images/bgs/bar2-short.png";
// import bg3 from "../../assets/images/bgs/bar2-short.png";
import bar from "../../assets/sounds/bar.mp3";
import "./bar.scss";
import classNames from "classnames";
import { NPCS } from "../../utils/commons.js";
import BubbleSet from "../../components/bubble/bubble-set.tsx";

const Bar = () => {
  const [activeSecuence, setActiveSecuence] = useState(false);
  const { setSong, player } = useRootContext();
  const navigate = useNavigate();
  // const secuences = [
  //   "La suerte y todos los demás se fueron.",
  //   "¿Qué hago ahora?",
  //   "Seguro que en este antro hay una agradable tripulación a la que unirse...",
  // ];

  // const showCrew = () => {
  //   setCartelEnabled(true);
  // }

  const secuenceDone = () => {
    navigate("/bar");
  }

  // const Secuence = () => {
  //   console.log(player.name);
  //   const bubbleProps = {
  //     delay: 11000,
  //     duration: 2500,
  //     endDelay: 2000,
  //     color: NPCS.capi.color,
  //     maxWidth: "600px",
  //     position: { top: 200, left: 1300 + 120 }
  //   }
  //   const setCapi = player.gender === 'male' ?
  //     [
  //       `¡Eh, tú! `,
  //       `¡¡ ${player.name?.toUpperCase()} !!`,
  //       "Te estabamos buscando.",
  //       "Te necesitamos en nuestra tripulación.",
  //       "Zarpamos al amanecer.",
  //       "¿Te apuntas?"
  //     ] : [
  //       `¡Eh, tú! `,
  //       `¡¡ ${player.name?.toUpperCase()} !!`,
  //       "Te estabamos buscando.",
  //       "Te necesitamos en nuestra tripulación.",
  //       "Zarpamos al amanecer.",
  //       "¿Te apuntas?"
  //     ]
  //   return <BubbleSet bubbleProps={bubbleProps} set={setCapi} callback={secuenceDone} />;
  // }


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
        <main className={classNames("fei-bg fei-bar", { "fei-bar--slide": activeSecuence })} style={{ backgroundImage: `url(${bg1})` }}>
          <Player className="fei-bar__player" />
          {/* <Secuence /> */}
        </main>
      </FadeIn>
    </Page>
  );
};

export default Bar;
