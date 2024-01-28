import React, { FC, useState, useEffect } from 'react';
import Bubble, { BubbleProps } from './bubble.tsx';

type BubbleSetProps = {
  set: string[];
  bubbleProps: BubbleProps;
  callback?: () => void;
  show?: boolean;
}

const BubbleSet: FC<BubbleSetProps> = ({ set, bubbleProps, callback, show = true }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [set]);

  function bubbleLoop() {
    if (index < set.length - 1) {
      setIndex(index + 1);
    } else {
      callback?.();
    }
  }

  // async function showBubble() {
  //   await sleep(bubbleProps.delay);
  //   bubbleLoop();
  // }

  // const keyDownEvent = (e) => {
  //   if (e.code === 'Enter' || e.code === 'Space') {
  //     bubbleLoop();
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('keydown', keyDownEvent);
  // }, []);

  return (
    <>{show &&
      <Bubble
        {...bubbleProps}
        duration={[bubbleProps.duration?.[index]]}
        delay={index === 0 ? bubbleProps.delay : 0}
        endDelay={index < set.length - 1 ? 400 : bubbleProps.endDelay}
        callback={bubbleLoop}
      >
        {set[index]}
      </Bubble >
    }</>
  );
}

export default BubbleSet;