import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useRootContext } from "../../utils/context/context.ts";
import { sleep, CHARS, NPCS } from '../../utils/commons.js';
import Page from '../../pages/page/page';
import Banner from '../../components/banner/banner.tsx';
import ocean from "../../assets/sounds/ocean1.mp3";
import bg from '../../assets/images/bgs/credits2.gif';
import Thumbnail from '../../components/thumbnail/thumbnail.tsx';
import capiCredits from '../../assets/images/npcs/capiCredits.png';
import coru1 from '../../assets/images/credits/Coru1.png';
import coru2 from '../../assets/images/credits/Coru2-isi.png';
import coru3 from '../../assets/images/credits/Coru3.png';
import coru4 from '../../assets/images/credits/Coru4.png';
import coru5 from '../../assets/images/credits/Coru5-aitor.png';
import coru6 from '../../assets/images/credits/Coru6-aitor.png';
import coru7 from '../../assets/images/credits/Coru7.png';
import coru8 from '../../assets/images/credits/Coru8.png';
import coru9 from '../../assets/images/credits/Coru9.png';
import coru10 from '../../assets/images/credits/Coru10.png';
import coru11 from '../../assets/images/credits/Coru11.png';
import coru12 from '../../assets/images/credits/Coru12.png';
import coru13 from '../../assets/images/credits/Coru13.png';
import coru14 from '../../assets/images/credits/Coru14.png';
import coru16 from '../../assets/images/credits/Coru16.png';
import coru18 from '../../assets/images/credits/Coru18.png';
import coru20 from '../../assets/images/credits/Coru20.png';
import coru21 from '../../assets/images/credits/Coru21.png';
import coru22 from '../../assets/images/credits/Coru22.png';
import coru23 from '../../assets/images/credits/Coru23.png';
import coru24 from '../../assets/images/credits/Coru24.png';
import mad1 from '../../assets/images/credits/Mad1.png';
import mad2 from '../../assets/images/credits/Mad2.png';
import mad4 from '../../assets/images/credits/Mad4.png';
import mad5 from '../../assets/images/credits/Mad5.png';
import mad6 from '../../assets/images/credits/Mad6.png';
import mad9 from '../../assets/images/credits/Mad9.png';
import mad10 from '../../assets/images/credits/Mad10.png';
import mad11 from '../../assets/images/credits/Mad11.png';
import mad12 from '../../assets/images/credits/Mad12.png';
import mad13 from '../../assets/images/credits/Mad13.png';
import mad14 from '../../assets/images/credits/Mad14.png';
import mad15 from '../../assets/images/credits/Mad15.png';
import mad16 from '../../assets/images/credits/Mad16.png';
import mad17 from '../../assets/images/credits/Mad17.png';
import mad18 from '../../assets/images/credits/Mad18.png';
import mad19 from '../../assets/images/credits/Mad19.png';
import captura3 from '../../assets/images/credits/Captura3.png';
import captura4 from '../../assets/images/credits/Captura4.png';
import captura12 from '../../assets/images/credits/Captura12.png';
import carlosbichos from '../../assets/images/credits/CarlosBichos.png';
import cenapremio from '../../assets/images/credits/CenaPremio.jpg';
import JesusBro from '../../assets/images/credits/JesusBro2.png';
import JoseDani from '../../assets/images/credits/Jose-Dani.png';
import LaserTag from '../../assets/images/credits/LaserTag.png';
import LilenIsi from '../../assets/images/credits/Lilen-isi.png';
import Muras from '../../assets/images/credits/Muras.png';
import oldTimes from '../../assets/images/credits/oldTimes.png';
import PerroAitor from '../../assets/images/credits/Perro-aitor.png';
import Perroisaac from '../../assets/images/credits/Perro-isaac.png';
import Perroisaac2 from '../../assets/images/credits/Perro-isaac-2.png';
import premio from '../../assets/images/credits/premio.png';
import Premio2 from '../../assets/images/credits/Premio2.png';
import Premio4 from '../../assets/images/credits/Premio4.png';
import shotdaily1 from '../../assets/images/credits/Shot-daily-1.png';
import shotdaily2 from '../../assets/images/credits/Shot-daily-2.png';
import shotdaily3 from '../../assets/images/credits/Shot-daily-3.png';
import shotisi from '../../assets/images/credits/Shot-isi.png';
import shotjose from '../../assets/images/credits/Shot-jose.png';
import dailyPics2 from '../../assets/images/credits/daily-pics2.png';
import finalGif from '../../assets/images/bgs/finalgif.webp';
import "./credits.scss";

const Credits = () => {
  const { setSong } = useRootContext();
  const [theEndFadeOut, setTheEndFadeOut] = useState(false);
  const [displaySGA, setDisplaySGA] = useState(false);
  const [displayThanks, setDisplayThanks] = useState(false);
  const [BGFadeOut, setBGFadeOut] = useState(true);
  const [creditsStage, setCreditsStage] = useState(-1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideActive, setSlideActive] = useState(false);
  const [backgroundOverlay, setBackgroundOverlay] = useState(false);

  const shots = [
    "Design, Script and Develop by: Capi",
    "Tested by: HAHAHAAAA",
    "In loving memory of: Z-Lux-themes",
  ];

  const stageOff = -1;
  const stageLegend0 = 0;
  const stageLegend1 = 1;
  const stageLegend2 = 2;
  const stageCrew = 3;
  const stageSlideShow = 4;
  const stageFinal = 5;

  const slides = [
    { src: coru13, time: 5000 },
    { src: mad4, time: 2500 },
    { src: shotdaily2, time: 2500 },
    { src: coru14, time: 2500 },
    { src: coru3, time: 2500 },
    { src: coru5, time: 2000 },
    { src: Perroisaac, time: 2500 },
    { src: coru7, time: 2500 },
    { src: shotdaily1, time: 3000 },
    { src: coru8, time: 2500 },
    { src: coru6, time: 2000 },
    { src: mad19, time: 3000 },
    { src: coru10, time: 3000 },
    { src: shotdaily3, time: 3000 },
    { src: coru12, time: 3000 },
    { src: mad10, time: 3000 },
    { src: coru20, time: 3000 },
    { src: coru21, time: 3000 },
    { src: mad16, time: 3000 },
    { src: coru22, time: 3000 },
    { src: Premio2, time: 3000 },
    { src: coru24, time: 3000 },
    { src: mad15, time: 3000 },
    { src: mad14, time: 3000 },
    { src: coru9, time: 3000 },
    { src: coru18, time: 3000 },
    { src: coru1, time: 2000 },
    { src: LilenIsi, time: 2000 },
    { src: mad9, time: 3000 },
    { src: coru4, time: 3000 },
    { src: Perroisaac2, time: 2000 },

    { src: JesusBro, time: 4500 },
    { src: Muras, time: 4500 },
    { src: oldTimes, time: 5000 },
    { src: LaserTag, time: 4500 },

    { src: PerroAitor, time: 2000 },
    { src: mad1, time: 3000 },
    { src: mad2, time: 3000 },
    { src: mad17, time: 3000 },
    { src: coru2, time: 2500 },
    { src: carlosbichos, time: 3000 },
    { src: mad5, time: 3000 },
    { src: mad6, time: 3000 },

    { src: mad11, time: 3000 },
    { src: captura12, time: 2000 },
    { src: mad12, time: 3000 },
    { src: coru16, time: 3000 },
    { src: coru23, time: 3000 },
    { src: captura4, time: 3000 },
    { src: mad13, time: 3000 },
    { src: shotjose, time: 2000 },
    { src: dailyPics2, time: 3000 },
    { src: coru11, time: 3000 },
    { src: mad18, time: 3000 },
    { src: captura3, time: 3000 },
    { src: cenapremio, time: 4500 },
    { src: JoseDani, time: 2000 },
    { src: Premio4, time: 5000 },
    { src: shotisi, time: 2000 },
    { src: premio, time: 13000 },
  ]

  async function init() {
    await sleep(2000);
    setTheEndFadeOut(true);
    await sleep(2000);
    setBGFadeOut(false);
    await sleep(1400);
    setDisplaySGA(true);
    await sleep(1200);
    setCreditsStage(stageLegend0);
    setBackgroundOverlay(true);
    await sleep(2500);
    setCreditsStage(stageOff);
    await sleep(500);
    setCreditsStage(stageLegend1);
    await sleep(2500);
    setCreditsStage(stageOff);
    await sleep(500);
    setCreditsStage(stageLegend2);
    await sleep(2500);
    setCreditsStage(stageOff);
    await sleep(500);
    setDisplaySGA(false);
    setCreditsStage(stageCrew);
    await sleep(48000);
    setCreditsStage(stageSlideShow);
  }

  async function showSlide(slideIndex = 0) {
    setSlideActive(true);
    await sleep(slides[slideIndex].time);
    setSlideActive(false);
    await sleep(500);
    if (slideIndex < slides.length - 1) {
      setActiveSlide(slideIndex + 1);
      showSlide(slideIndex + 1);
    } else {
      setCreditsStage(stageFinal);
    }
  }

  async function oceanStage() {
    await sleep(2000);
    setDisplaySGA(true);
    await sleep(1200);
    setDisplayThanks(true);
    await sleep(24500);
    setSong(ocean);
  }

  useEffect(() => {
    if (creditsStage === stageSlideShow) { showSlide(0); }
    if (creditsStage === stageFinal) { oceanStage(); }
  }, [creditsStage]);

  useEffect(() => { init() }, []);

  return (
    <Page>
      <main className="fei-page fei-credits">
        <h1 className={classNames("fei-credits__super-title", { "fei-credits__super-title--is-active": displaySGA })}>S G A - L I B</h1>
        <Banner fadeOut={theEndFadeOut} text="The End?" />
        <div className={classNames("fei-credits__bg", { "fei-credits__bg--fade-out": BGFadeOut || creditsStage === stageFinal })} style={{ backgroundImage: `url(${bg})` }} />
        {(creditsStage < stageSlideShow) && (<div className={classNames("fei-credits__list", { "fei-credits__list--is-active": creditsStage === stageCrew, "fei-credits__list--blackout": backgroundOverlay })}>
          {(creditsStage >= stageLegend0 && creditsStage <= stageLegend2) && <span className="fei-credits__shot">{shots[creditsStage]}</span>}
          <ul className={classNames("fei-credits__list-content", { "fei-credits__list-content--is-active": creditsStage === stageCrew })}>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: "#67a7e2" }}>
                <p>Aitor López Calvarro</p>
                {/* <p>Maestro de armas</p> */}
                <p>Release-end developer</p>
              </div>
              <Thumbnail char={CHARS.aitor} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.isi} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: "#cf6eff" }}>
                <p>Isidora Reina 'Zombi'</p>
                {/* <p>Contramaestre</p> */}
                <p>Resizer developer</p>
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: CHARS.isaac.color }}>
                <p>Isaac 'GifProvider' Martí</p>
                {/* <p>Marinero</p> */}
                <p>QAmikaze developer</p>
              </div>
              <Thumbnail char={CHARS.isaac} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.lilen} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.lilen.color }}>
                <p>Lilen 'Holis' Campodonico</p>
                {/* <p>Marinera</p> */}
                <p>LindoEsCSS developer</p>
              </div>
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.somo} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.somo.color }}>
                <p>Alejandro 'PopOver' Somoano</p>
                <p>Infantería de los Tercios</p>
                {/* <p>All-end developer</p> */}
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: CHARS.jose.color }}>
                <p>Jose 'Reverendo' DLR Methvin</p>
                {/* <p>Reverendo</p> */}
                <p>Personal developer</p>
              </div>
              <Thumbnail char={CHARS.jose} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.dorian} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.dorian.color }}>
                <p>Dorian 'Enabler' López</p>
                <p>Mercenario</p>
                {/* <p>Enabler developer</p> */}
              </div>
            </li>
            <li className="fei-credits__list-item">
              <div className="fei-credits__list-item-text" style={{ color: CHARS.marc.color }}>
                <p>Marc 'Bachata' Albatros</p>
                {/* <p>Infantería de marina</p> */}
                <p>Coach developer</p>
              </div>
              <Thumbnail char={CHARS.marc} size="size-l" />
            </li>
            <li className="fei-credits__list-item">
              <Thumbnail char={CHARS.dani} size="size-l" />
              <div className="fei-credits__list-item-text" style={{ color: CHARS.dani.color }}>
                <p>Daniela H. 'Gallarda' Tortolero</p>
                {/* <p>Marinera</p> */}
                <p>Sewing developer</p>
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
        )}
        {(creditsStage === stageSlideShow) && (
          <div className={classNames("fei-credits__slideshow")}>
            <div className={classNames("fei-credits__slide", { "fei-credits__slide--is-active": slideActive })}>
              <img className="fei-credits__slide-img" src={slides[activeSlide].src} alt="" />
            </div>
          </div>
        )}
        <div className={classNames("fei-credits__final", { "fei-credits__final--is-active": creditsStage === stageFinal })}>
          <h2 className={classNames("fei-credits__thanks", { "fei-credits__thanks--is-active": displayThanks })}>Gracias</h2>
          <img className="fei-credits__final-img" src={finalGif} alt="" />
        </div>
      </main>
    </Page >
  )
}

export default Credits;
