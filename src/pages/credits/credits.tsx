import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { sleep, CHARS, NPCS } from '../../utils/commons.js';
import Page from '../../pages/page/page';
import Banner from '../../components/banner/banner.tsx';
import bg from '../../assets/images/bgs/credits2.gif';
import Thumbnail from '../../components/thumbnail/thumbnail.tsx';
import capiCredits from '../../assets/images/npcs/capiCredits.png';

import "./credits.scss";

const Credits = () => {
  // const { setSong } = useRootContext();
  const [theEndFadeOut, setTheEndFadeOut] = useState(false);
  const [displaySGA, setDisplaySGA] = useState(false);
  const [BGFadeOut, setBGFadeOut] = useState(true);
  const [creditsStage, setCreditsStage] = useState(-1);

  const shots = [
    "Design, Script and Develop by: Capi",
    "Tested by: HAHAHAAAA",
    "In loving memory of: Z-Lux-themes",
  ]

  async function init() {
    await sleep(2000);
    setTheEndFadeOut(true);
    await sleep(2000);
    setBGFadeOut(false);
    await sleep(1400);
    setDisplaySGA(true);
    await sleep(800);
    setCreditsStage(0);
    await sleep(2500);
    setCreditsStage(-1);
    await sleep(500);
    setCreditsStage(1);
    await sleep(2500);
    setCreditsStage(-1);
    await sleep(500);
    setCreditsStage(2);
    await sleep(2500);
    setCreditsStage(-1);
    await sleep(500);
    setDisplaySGA(false);
    setCreditsStage(3);

  }

  useEffect(() => { init() }, []);

  return (
    <Page>
      <main className="fei-page fei-credits">
        <h1 className={classNames("fei-credits__super-title", { "fei-credits__super-title--is-active": displaySGA })}>S G A - L I B</h1>
        <Banner fadeOut={theEndFadeOut} text="The End?" />
        <div className={classNames("fei-credits__bg", { "fei-credits__bg--fade-out": BGFadeOut })} style={{ backgroundImage: `url(${bg})` }} />
        <div className={classNames("fei-credits__list", { "fei-credits__list--is-active": creditsStage >= 2, "fei-credits__list--blackout": creditsStage >= 3 })}>
          {(creditsStage >= 0 && creditsStage < 3) && <span className="fei-credits__shot">{shots[creditsStage]}</span>}
          <ul className={classNames("fei-credits__list-content", { "fei-credits__list-content--is-active": creditsStage >= 3 })}>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.isi} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: "#cf6eff" }}>
                <p>Isidora Reina 'Zombi'</p>
                <p>Contramaestre</p>
                <p>Resizer developer</p>
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: "#67a7e2" }}>
                <p>Aitor López Calvarro</p>
                <p>Maestro de armas</p>
                <p>Fuck-end developer</p>
              </div>
              <Thumbnail char={CHARS.aitor} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.somo} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.somo.color }}>
                <p>Alejandro 'PopOver' Somoano</p>
                <p>Infantería de los Tercios Viejos</p>
                <p>All-end developer</p>
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: CHARS.marc.color }}>
                <p>Marc 'TestMan' Albaro</p>
                <p>Infantería de marina</p>
                <p>Teach-end developer</p>
              </div>
              <Thumbnail char={CHARS.marc} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.dorian} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.dorian.color }}>
                <p>Dorian 'Enabler' López</p>
                <p>Infantería de marina</p>
                <p>Enabler developer</p>
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: CHARS.jose.color }}>
                <p>Jose 'PowerBi' DLR Methvin</p>
                <p>Reverendo</p>
                <p>Personal developer</p>
              </div>
              <Thumbnail char={CHARS.jose} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.lilen} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.lilen.color }}>
                <p>Lilen</p>
                <p>Reverendo</p>
                <p>Personal developer</p>
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: CHARS.isaac.color }}>
                <p>Isaac</p>
                <p>Reverendo</p>
                <p>Personal developer</p>
              </div>
              <Thumbnail char={CHARS.isaac} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.dani} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.dani.color }}>
                <p>Daniela</p>
                <p>Reverendo</p>
                <p>Personal developer</p>
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: NPCS.capi.color }}>
                <p>¿Capi?</p>
              </div>
              <Thumbnail char={NPCS.capi} size="size-l" img={capiCredits} />
            </li>
          </ul>
        </div>
      </main>
    </Page >
  )
}

export default Credits;

