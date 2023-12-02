import React, { FC, useEffect, useState } from 'react';
import classnames from 'classnames';
import Writter from '../../components/writter/writter.tsx';
import { sleep } from '../../utils/commons.js';
import './secuence.scss';

type SecuenceProps = {
  slides: string[];
  className?: string;
  callback?: () => void;
  itemsConfig?: {
    [key: string]: {
      className?: string;
    }
  };
}

const Secuence: FC<SecuenceProps> = ({ slides, className, callback, itemsConfig }) => {
  const [stage, setStage] = useState(0);
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const [isOff, setIsOff] = useState(true);
  const [currentText, setCurrentText] = useState(slides[0]);

  const noDelay = 1;

  const initAwait = 2000 * noDelay;
  const beforeTransition = 1200 * noDelay;
  const betweenTransitions = 600 * noDelay;
  const transitionDuration = 600 * noDelay;
  const afterTransition = 900 * noDelay;
  const endAwait = 1200 * noDelay;

  const slidesClassNames = slides.map((none, index) => {
    return itemsConfig?.[`_${index}`]?.className ? itemsConfig?.[`_${index}`]?.className : "";
  });

  async function transition() {
    await sleep(beforeTransition);
    setIsTransitionActive(true);
    await sleep(transitionDuration);
    setIsOff(true);
    await sleep(betweenTransitions);
    if (stage < slides.length - 1) {
      setIsTransitionActive(false);
      await sleep(transitionDuration);
      setIsOff(false);
      setStage(stage + 1);
      setCurrentText(slides[stage + 1]);
    } else {
      await sleep(endAwait);
      callback?.();
    }
    await sleep(afterTransition);
  }

  async function init() {
    await sleep(initAwait);
    setIsOff(false);
  }

  useEffect(() => {
    if (!slides.length) {
      console.error("slides is empty");
    } else {
      init();
    }
  }, []);

  return (
    <span className={classnames("fei-secuence", className, slidesClassNames[stage], {
      "fei-secuence--transition": isTransitionActive
    })} >
      {!isOff && <Writter text={currentText} callback={transition} />}
    </span >
  )
}

export default Secuence;