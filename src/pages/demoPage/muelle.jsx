import React, { useState, useEffect } from "react";
import { useRootContext } from "../../utils/context/context.ts";
import Page from "../page/page.jsx";
import FadeIn from "../../components/fade-in/fade-in.jsx";
import Secuence from "../../components/secuence/secuence.tsx";
import bg from "../assets/images/bgs/bar2-short.png";
import ocean from "../../assets/sounds/ocean1.mp3";
import "./muelle.scss";
import classNames from "classnames";

const Muelle = () => {
  const [activeSecuence, setActiveSecuence] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const { setSong } = useRootContext();
  const secuences = [];

  useEffect(() => {
    setSong(ocean);
  }, []);

  return (
    <Page>
      <FadeIn
        callback={() => {
          setActiveSecuence(true);
        }}
        delayStart={1000}
      >
        <main className={classNames("fei-page fei-muelle fei-bg", { "fei-page--cursor-none": !cursorEnabled })} style={{ backgroundImage: `url(${bg})` }}>
          <h2 className="fei-page__title">{activeSecuence && <Secuence slides={secuences} className="fei-secuence--left" callback={() => setCursorEnabled(true)} />}</h2>
        </main>
      </FadeIn>
    </Page>
  );
};

export default Muelle;
