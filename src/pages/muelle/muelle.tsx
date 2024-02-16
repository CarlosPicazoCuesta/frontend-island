import React, { useState, useEffect } from "react";
import { useRootContext } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Secuence from "../../components/secuence/secuence.tsx";
import bg from "../../assets/images/bgs/bar2-short.png";
import cartel from "../../assets/images/things/cartel.png";
import ocean from "../../assets/sounds/ocean1.mp3";
import "./muelle.scss";
import classNames from "classnames";
import Cartel from "./comps/cartel.jsx";

const Muelle = () => {
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const [cartelEnabled, setCartelEnabled] = useState(false);
  const { setSong } = useRootContext();
  const secuences = [
    "La suerte y todos los demás se fueron.",
    "¿Qué hago ahora?",
    "Seguro que en este antro hay una agradable tripulación a la que unirse...",
  ];

  const showCrew = () => {
    setCartelEnabled(true);
  }

  useEffect(() => {
    setSong(ocean);
  }, []);

  return (
    <Page className="fei-page--muelle">
      <FadeIn
        callback={() => {
          setActiveSecuence(true);
        }}
        delayStart={1000}
      >
        <main className={classNames("fei-bg fei-page-muelle ", { "fei-page--cursor-none": !cursorEnabled })} style={{ backgroundImage: `url(${bg})` }}>
          {cartelEnabled && <Cartel />}
          <img src={cartel} className={classNames("fei-page-muelle__cartel fei-interact", { "fei-interact--active": cursorEnabled && !cartelEnabled })} onClick={showCrew} alt="" />
          <h2 className="fei-page__title">{activeSecuence && <Secuence slides={secuences} className="fei-secuence--left" callback={() => setCursorEnabled(true)} />}</h2>
        </main>
      </FadeIn>
    </Page>
  );
};

export default Muelle;
