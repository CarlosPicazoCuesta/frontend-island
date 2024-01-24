import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { sleep } from '../../utils/commons.js';
import { useRootContext } from '../../utils/context/context.ts';
import Writter from '../../components/writter/writter.tsx';
import Banner from '../../components/banner/banner.tsx';
import finalText from '../../assets/sounds/final.mp3';
import credits from '../../assets/sounds/credits2.mp3';

const Speech = ({ text, callback }) => {
  const { setSong } = useRootContext();
  const [indexStage, setIndexStage] = useState(-1);
  const [theEndFadeOut, setTheEndFadeOut] = useState(true);
  const [questionFadeOut, setQuestionFadeOut] = useState(true);
  const [resolved, setResolved] = useState(false);

  const [itemsConfig, setItemsConfig] = useState({
    _0: { className: '' },
    _1: { className: '' },
    _2: { className: '' },
    _3: { className: '' },
    _4: { className: '' },
    _5: { className: '' },
    _6: { className: '' },
    _7: { className: 'fei-right fei-goldenrod' },
    _8: { className: 'fei-right fei-goldenrod' }
  });

  // TODO: Use this times *100
  const times = [
    5000,
    4000,
    3500,
    4000,
    3500,
    4000,
    500,
    1000,
    2500,
  ];

  function loadLine() {
    if (indexStage < text.length - 1) {
      setIndexStage(indexStage + 1);
    } else {
      outEffect();
    }
  }

  async function outEffect() {
    // TODO: Use this times *100
    await sleep(3000);
    setItemsConfig({
      _0: { className: 'fei-final__title--fade-out' },
      _1: { className: 'fei-final__title--fade-out' },
      _2: { className: 'fei-final__title--fade-out' },
      _3: { className: 'fei-final__title--fade-out' },
      _4: { className: 'fei-final__title--fade-out' },
      _5: { className: 'fei-final__title--fade-out' },
      _6: { className: 'fei-final__title--fade-out' },
      _7: { className: 'fei-right fei-goldenrod' },
      _8: { className: 'fei-right fei-goldenrod' }
    });
    await sleep(2000);
    setItemsConfig({
      _0: { className: 'fei-final__title--fade-out' },
      _1: { className: 'fei-final__title--fade-out' },
      _2: { className: 'fei-final__title--fade-out' },
      _3: { className: 'fei-final__title--fade-out' },
      _4: { className: 'fei-final__title--fade-out' },
      _5: { className: 'fei-final__title--fade-out' },
      _6: { className: 'fei-final__title--fade-out' },
      _7: { className: 'fei-right fei-goldenrod fei-final__title--fade-out' },
      _8: { className: 'fei-right fei-goldenrod' }
    });
    await sleep(2000);
    setItemsConfig({
      _0: { className: 'fei-final__title--fade-out' },
      _1: { className: 'fei-final__title--fade-out' },
      _2: { className: 'fei-final__title--fade-out' },
      _3: { className: 'fei-final__title--fade-out' },
      _4: { className: 'fei-final__title--fade-out' },
      _5: { className: 'fei-final__title--fade-out' },
      _6: { className: 'fei-final__title--fade-out' },
      _7: { className: 'fei-right fei-goldenrod fei-final__title--fade-out' },
      _8: { className: 'fei-right fei-goldenrod fei-final__title--fade-out' },
    });
    await sleep(1000);
    setTheEndFadeOut(false);
    await sleep(3500);
    setQuestionFadeOut(false);
    await sleep(600);
    setSong(credits);
    await sleep(1500);
    setResolved(true);
  }

  async function initate() {
    // TODO: Use this times *100
    setSong(finalText)
    await sleep(1500);
    setIndexStage(0)
  }

  useEffect(() => {
    if (resolved) {
      callback();
    }
  }, [resolved]);

  useEffect(() => { initate() }, []);

  return (
    <>{
      text.map((textLine, index) => {
        return (
          index <= indexStage ? (
            <h2 key={index} className={classNames("fei-final__title", itemsConfig[`_${index}`].className)}>
              <Writter text={textLine} callback={loadLine} time={times[index]} />
            </h2>
          ) : null
        )
      })
    }
      <Banner fadeOut={theEndFadeOut} text="The End" className="fei-banner--first" />
      <Banner fadeOut={questionFadeOut} text="The End?" />
    </>
  )
}

export default Speech;