import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRootContext } from '../../utils/context/context.ts';
import Page from '../page/page.jsx';
import FadeIn from '../../components/fade-in/fade-in.jsx';
import { sleep, NPCS } from '../../utils/commons.js';
import "./fishing.scss";
import Dialog from '../../components/dialog/dialog.tsx';

const Fishing = ({ }) => {
  const { player } = useRootContext();
  const [level, setLevel] = useState(0);
  const [dialogStage, setDialogStage] = useState(0);
  const [playingItems, setPlayingItems] = useState<any[]>([]);
  const [points, setPoints] = useState(0);
  const [start, setStart] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [loadPage, setLoadPage] = useState("");

  const colorCSS = "--pink";
  const colorJS = "--yellow";
  const colorReact = "--blue";
  const colorNeutral = "--black";

  const CSS = [
    "border",
    "display",
    "flex",
    "order",
    "px",
    "absolute",
    "font-family",
    "color",
    "background",
    "rgba",
    "transform",
    "opacity",
    "z-index",
    "transition",
    "ease-in-out",
    "pointer-events",
    "inline",
    "@media",
    "backdrop-filter",
    "blur",
    "red",
    "var(--value)",
    "calc()",
    "!important",
    "width",
    "visibility",
    ":hover",
    ":disabled",
    ":after",
    ":before",
    ":focus",
    ":active",
  ]

  const JS = [
    "const",
    "let",
    "var",
    "function",
    "return",
    "export",
    "while",
    "Object",
    "Math",
    "boolean",
    "true",
    "false",
    "null",
    "undefined",
    "window",
    "document",
    "console",
    "alert",
    "classList",
    "length",
    "XMLHttpRequest",
    "new",
    "this",
    "prototype",
    "constructor",
    "fetch",
    "Promise",
    "async",
    "SetTimeout",
    "SetInterval",
    "Event",
    "click",
    "focus",
    "change",
    "map"
  ];

  const ReactWords = [
    "React",
    "useState",
    "useEffect",
    "useContext",
    "useRef",
    "useReducer",
    "useMemo",
    "useCallback",
    "Provider",
    "FC",
    "Props",
    "Children",
    "Component",
    "render",
    "context",
    "Router",
    "ReactDOM",
    "hook",
    "ref",
    "className",
    "onClick",
    "onFocus",
    "onChange",
    "useTransition",
    "hydrate",
  ];

  const levels = [
    { timeDelay: 1, timeActive: 1, animation: "static", items: 30 },
    { timeDelay: 0.8, timeActive: 5, animation: "vertical", items: 30 },
    { timeDelay: 0.6, timeActive: 4, animation: "both", items: 30 }
  ]
  // const levels = [
  //   { timeDelay: 1, timeActive: 1, animation: "static", items: 30 },
  //   { timeDelay: 0.2, timeActive: 2, animation: "vertical", items: 30 },
  //   { timeDelay: 0.2, timeActive: 2, animation: "both", items: 30 }
  // ]

  const staticPositions = [
    { top: 0, left: 0 },
    { top: 50, left: 0 },
    { top: 100, left: 0 },
    { top: 150, left: 0 },
    { top: 200, left: 0 },
    { top: 250, left: 0 },
    { top: 300, left: 0 },
    { top: 350, left: 0 },
    { top: 400, left: 0 },
    { top: 450, left: 0 },
    { top: 500, left: 0 },
    { top: 550, left: 0 },
    // { top: 0, left: 100 },
    // { top: 50, left: 100 },
    // { top: 100, left: 100 },
    // { top: 150, left: 100 },
    // { top: 200, left: 100 },
    // { top: 250, left: 100 },
    // { top: 300, left: 100 },
    // { top: 350, left: 100 },
    // { top: 400, left: 100 },
    // { top: 450, left: 100 },
    // { top: 500, left: 100 },
    // { top: 550, left: 100 },
    { top: 0, left: 200 },
    { top: 50, left: 200 },
    { top: 100, left: 200 },
    { top: 150, left: 200 },
    { top: 200, left: 200 },
    { top: 250, left: 200 },
    { top: 300, left: 200 },
    { top: 350, left: 200 },
    { top: 400, left: 200 },
    { top: 450, left: 200 },
    { top: 500, left: 200 },
    { top: 550, left: 200 },
    // { top: 0, left: 300 },
    // { top: 50, left: 300 },
    // { top: 100, left: 300 },
    // { top: 150, left: 300 },
    // { top: 200, left: 300 },
    // { top: 250, left: 300 },
    // { top: 300, left: 300 },
    // { top: 350, left: 300 },
    // { top: 400, left: 300 },
    // { top: 450, left: 300 },
    // { top: 500, left: 300 },
    // { top: 550, left: 300 },
    { top: 0, left: 400 },
    { top: 50, left: 400 },
    { top: 100, left: 400 },
    { top: 150, left: 400 },
    { top: 200, left: 400 },
    { top: 250, left: 400 },
    { top: 300, left: 400 },
    { top: 350, left: 400 },
    { top: 400, left: 400 },
    { top: 450, left: 400 },
    { top: 500, left: 400 },
    { top: 550, left: 400 },
    // { top: 0, left: 500 },
    // { top: 50, left: 500 },
    // { top: 100, left: 500 },
    // { top: 150, left: 500 },
    // { top: 200, left: 500 },
    // { top: 250, left: 500 },
    // { top: 300, left: 500 },
    // { top: 350, left: 500 },
    // { top: 400, left: 500 },
    // { top: 450, left: 500 },
    // { top: 500, left: 500 },
    // { top: 550, left: 500 },
    { top: 0, left: 600 },
    { top: 50, left: 600 },
    { top: 100, left: 600 },
    { top: 150, left: 600 },
    { top: 200, left: 600 },
    { top: 250, left: 600 },
    { top: 300, left: 600 },
    { top: 350, left: 600 },
    { top: 400, left: 600 },
    { top: 450, left: 600 },
    { top: 500, left: 600 },
    { top: 550, left: 600 },
    // { top: 0, left: 700 },
    // { top: 50, left: 700 },
    // { top: 100, left: 700 },
    // { top: 150, left: 700 },
    // { top: 200, left: 700 },
    // { top: 250, left: 700 },
    // { top: 300, left: 700 },
    // { top: 350, left: 700 },
    // { top: 400, left: 700 },
    // { top: 450, left: 700 },
    // { top: 500, left: 700 },
    // { top: 550, left: 700 }
  ]

  function getRandomWords() {
    const css2 = [...CSS.sort(() => Math.random() - 0.5).slice(0, 10)];
    const js2 = [...JS.sort(() => Math.random() - 0.5).slice(0, 10)];
    const ReactWords2 = [...ReactWords.sort(() => Math.random() - 0.5).slice(0, 10)];
    return { css: css2, js: js2, react: ReactWords2 };
  }

  function getLevel1(target = "css") {
    const words = getRandomWords();
    let items = {
      css: words.css.map(word => { return { id: word, value: 0, top: 0, left: 0, delay: 0, color: colorCSS, off: false, style: {} } }),
      js: words.js.map(word => { return { id: word, value: 0, top: 0, left: 0, delay: 0, color: colorJS, off: false, style: {} } }),
      react: words.react.map(word => { return { id: word, value: 0, top: 0, left: 0, delay: 0, color: colorReact, off: false, style: {} } })
    };
    switch (target) {
      case "css": items.css = items.css.map((word) => { return { ...word, value: 10 } }); break;
      case "js": items.js = items.js.map((word) => { return { ...word, value: 10 } }); break;
      case "react": items.react = items.react.map((word) => { return { ...word, value: 10 } }); break;
    }
    const pos = [...staticPositions.sort(() => Math.random() - 0.5).slice(0, levels[0].items)];
    const itemsShuffled = [...items.css, ...items.js, ...items.react].sort(() => Math.random() - 0.5);
    itemsShuffled.forEach((item, index) => {
      item.top = pos[index].top;
      item.left = pos[index].left;
    });
    itemsShuffled.forEach((item, index) => {
      // item.delay = levels[0].timeDelay * index + 1
      item.style = {
        top: `${item.top}px`,
        left: `${item.left}px`,
        transitionDelay: `${levels[0].timeDelay * index + 1}s`,
      };
    });
    return itemsShuffled;
  }

  function getLevel2(target = "css") {
    console.log("getLevel2: target > ", target);
    const words = getRandomWords();
    let items = {
      css: words.css.map(word => { return { id: word, value: 0, top: 0, left: 0, delay: 0, color: colorNeutral, off: false, style: {} } }),
      js: words.js.map(word => { return { id: word, value: 0, top: 0, left: 0, delay: 0, color: colorNeutral, off: false, style: {} } }),
      react: words.react.map(word => { return { id: word, value: 0, top: 0, left: 0, delay: 0, color: colorNeutral, off: false, style: {} } })
    };
    switch (target) {
      case "css": items.css = items.css.map((word) => { return { ...word, value: 10 } }); break;
      case "js": items.js = items.js.map((word) => { return { ...word, value: 10 } }); break;
      case "react": items.react = items.react.map((word) => { return { ...word, value: 10 } }); break;
    }
    const pos = [...staticPositions.sort(() => Math.random() - 0.5).slice(0, levels[1].items)];
    const itemsShuffled = [...items.css, ...items.js, ...items.react].sort(() => Math.random() - 0.5);
    // itemsShuffled.forEach((item, index) => {
    //   item.left = pos[index].left;
    // });
    itemsShuffled.forEach((item, index) => {
      // item.delay = levels[1].timeDelay * index + 1
      item.style = {
        left: `${pos[index].left}px`,
        transitionDelay: `${levels[1].timeDelay * index + 1}s`,
      }
    });
    return itemsShuffled;
  }

  function getLevel3(target = "css") {
    const words = getRandomWords();
    let items = {
      css: words.css.map(word => { return { id: word, value: -10, top: 0, left: 0, delay: 0, color: [colorCSS, colorJS, colorReact].sort(() => Math.random() - 0.5)[0], off: false, style: {} } }),
      js: words.js.map(word => { return { id: word, value: -10, top: 0, left: 0, delay: 0, color: [colorCSS, colorJS, colorReact].sort(() => Math.random() - 0.5)[0], off: false, style: {} } }),
      react: words.react.map(word => { return { id: word, value: -10, top: 0, left: 0, delay: 0, color: [colorCSS, colorJS, colorReact].sort(() => Math.random() - 0.5)[0], off: false, style: {} } })
    };
    switch (target) {
      case "css": items.css = items.css.map((word) => { return { ...word, value: 10 } }); break;
      case "js": items.js = items.js.map((word) => { return { ...word, value: 10 } }); break;
      case "react": items.react = items.react.map((word) => { return { ...word, value: 10 } }); break;
    }
    const pos = [...staticPositions.sort(() => Math.random() - 0.5).slice(0, levels[2].items)];
    const itemsShuffled = [...items.css, ...items.js, ...items.react].sort(() => Math.random() - 0.5);
    // itemsShuffled.forEach((item, index) => {
    //   item.left = pos[index].left;
    // });
    itemsShuffled.forEach((item, index) => {
      // item.delay = levels[1].timeDelay * index + 1
      item.style = {
        left: `${pos[index].left}px`,
        transitionDelay: `${levels[2].timeDelay * index + 1}s`,
      }
    });
    return itemsShuffled;
  }

  const dialogProps = [{
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_00", text: "Vamos a ver qué tal pescas los peCSS. Solo esos!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_01", text: "Venga, busca JavaScript (no React)" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_02", text: "¿Será que sabes algo de React?" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_03", text: "Fin del entrenamiento. A ver qué podemos esperar de ti. Ya sabes: primero CSS, luego JS y por en la última ronda: React." }],
    className: 'fei-dialog--xl'
  },
  {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_04", text: "Ahora JavaScript!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_05", text: "A pescar React!" }],
    className: 'fei-dialog--xl'
  }, {

    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_06", text: "Ahora la prueba de verdad, en aguas revueltas. Los errores restan. Empezamos por CSS." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_07", text: "Sigue intentádolo con JavaScript." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_08", text: "Terminamos con React. ¡Concéntrate!" }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_09", text: "Sí, sí, sí. Ya sabemos que la espada no pincha muy bien. Menos quejas." }],
    className: 'fei-dialog--xl'
  }, {
    speaker: NPCS.capi,
    disabled: true,
    options: [{ id: "_10", text: `Hemos terminado, ${player.name}. Tu puntuación ha sido de ${points}. No ha estado mal, pero si fuera por ti moriríamos de hambre.` }],
    className: 'fei-dialog--xl'
  }
  ];

  const dialogTimes = [4200, 3000, 3000, 6000, 3000, 3000, 5000, 3000, 3500, 4000, 7000];

  async function setLevel1() {
    setLevel(1);
    // Nivel 1.1
    await sleep(1500);
    setDialogStage(0);
    setShowDialog(true);
    await sleep(dialogTimes[0]);
    setShowDialog(false);
    setPlayingItems(getLevel1("css"));
    await sleep(1000);
    setStart(true);
    await sleep(levels[0].items * levels[0].timeActive * 1000 + 1000);
    setStart(false);
    // Nivel 1.2
    await sleep(800);
    setDialogStage(1);
    setShowDialog(true);
    await sleep(dialogTimes[1]);
    setShowDialog(false);
    setPlayingItems(getLevel1("js"));
    await sleep(1200);
    setStart(true);
    await sleep(levels[0].items * levels[0].timeActive * 1000 + 1000);
    setStart(false);
    // nivel 1.3
    await sleep(1000);
    setDialogStage(2);
    setShowDialog(true);
    await sleep(dialogTimes[2]);
    setShowDialog(false);
    setPlayingItems(getLevel1("react"));
    await sleep(500);
    setStart(true);
    await sleep(levels[0].items * levels[0].timeActive * 1000 + 1000);
    setStart(false);
    setLevel2();
  }

  async function setLevel2() {
    // Nivel 2.1 CSS
    setLevel(2);
    await sleep(500);
    setDialogStage(3);
    setShowDialog(true);
    await sleep(dialogTimes[3]);
    setShowDialog(false);
    setPlayingItems(getLevel2("css"));
    // Nivel 2.2 JAVASCRIPT
    console.log("playingItems 2.1> ", getLevel2("css"));
    await sleep(1500);
    setStart(true);
    await sleep((levels[1].items * levels[1].timeDelay * 1000) + (levels[1].timeActive * 1000) + 1000);
    setStart(false);
    await sleep(500);
    setDialogStage(4);
    setShowDialog(true);
    await sleep(dialogTimes[4]);
    setShowDialog(false);
    setPlayingItems(getLevel2("js"));
    await sleep(500);
    setStart(true);
    // Nivel 2.3 REACT
    await sleep((levels[1].items * levels[1].timeDelay * 1000) + (levels[1].timeActive * 1000) + 1000);
    setStart(false);
    await sleep(500);
    setDialogStage(5);
    setShowDialog(true);
    await sleep(dialogTimes[5]);
    setShowDialog(false);
    setPlayingItems(getLevel2("react"));
    await sleep(500);
    setStart(true);
    await sleep((levels[1].items * levels[1].timeDelay * 1000) + (levels[1].timeActive * 1000) + 1000);
    setStart(false);
    setLevel3();
  }

  async function setLevel3() {
    setLevel(3);
    await sleep(500);
    setDialogStage(6);
    setShowDialog(true);
    await sleep(dialogTimes[6]);
    setShowDialog(false);
    setPlayingItems(getLevel3("css"));
    await sleep(1500);
    setStart(true);
    await sleep((levels[2].items * levels[2].timeDelay * 1000) + (levels[2].timeActive * 1000) + 1000);
    setStart(false);
    setDialogStage(7);
    setShowDialog(true);
    await sleep(dialogTimes[7]);
    setShowDialog(false);
    await sleep(500);
    setPlayingItems(getLevel3("js"));
    await sleep(500);
    setStart(true);
    await sleep((levels[2].items * levels[2].timeDelay * 1000) + (levels[2].timeActive * 1000) + 1000);
    setStart(false);
    await sleep(500);
    setDialogStage(8);
    setShowDialog(true);
    await sleep(dialogTimes[8]);
    setShowDialog(false);
    setPlayingItems(getLevel3("react"));
    await sleep(500);
    setStart(true);
    await sleep((levels[2].items * levels[2].timeDelay * 1000) + (levels[2].timeActive * 1000) + 1000);
    setStart(false);
    setDialogStage(9);
    setShowDialog(true);
    await sleep(dialogTimes[9]);
    setStart(false);
    setDialogStage(10);
    setShowDialog(true);
    await sleep(dialogTimes[10]);
    setFadeOut(true);
    setLoadPage("/day");
  }

  function addPoints(value) {
    setPoints(points + value);
  }

  return (
    <Page className="fei-page--top" fadeOut={fadeOut} load={loadPage}>
      <FadeIn
        callback={() => {
          setLevel1();
        }}
        delayStart={600}
      >
        <main className={classNames("fei-fishing", { "fei-fishing--start": start, "fei-fishing--level1": level === 1, "fei-fishing--level2": level === 2, "fei-fishing--level3": level === 3 })}>
          <div className="fei-fishing__items">
            {playingItems.map((item) => {
              return (
                <span key={item.id} style={{ display: item.off ? 'none' : 'block' }}>
                  <input id={item.id} className="fei-fishing__item-input" type="checkbox" onChange={() => addPoints(start ? item.value : 0)} />
                  <label
                    key={item.id}
                    htmlFor={item.id}
                    className={`fei-fishing__item fei-fishing__item${item.color}`}
                    style={item.style}
                  >
                    {item.id}
                  </label>
                </span>)
            })}
          </div>
          <div className='fei-fishing__points'>{points}</div>
        </main>
        {dialogStage >= 0 && showDialog && <Dialog {...dialogProps[dialogStage]} />}
      </FadeIn>
    </Page >
  );
}

export default Fishing;