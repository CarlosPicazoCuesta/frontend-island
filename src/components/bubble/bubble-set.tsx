import React, { FC, useState, useEffect } from 'react';
import Bubble, { BubbleProps } from './bubble.tsx';
import { sleep } from '../../utils/commons';

type BubbleSetProps = {
  set: string[];
  bubbleProps: BubbleProps;
  callback?: () => void;
}

const BubbleSet: FC<BubbleSetProps> = ({ set, bubbleProps, callback = () => { } }) => {
  const [index, setIndex] = useState(0);

  function bubbleLoop() {
    if (index < set.length - 1) {
      setIndex(index + 1);
    } else {
      callback();
    }
  }

  async function showBubble() {
    await sleep(bubbleProps.delay);
  }

  useEffect(() => {
    showBubble();
    window.addEventListener('keyDown', (e) => {
      console.log(e.key);
      if (e.key === 'Enter') {
        bubbleLoop();
      }
    });
  }, []);

  return (
    <Bubble {
      ...bubbleProps}
      delay={index === 0 ? bubbleProps.delay : 0}
      endDelay={index < set.length - 1 ? bubbleProps.endDelay : 0}
      callback={bubbleLoop}
    >
      {set[index]}
    </Bubble >
  );
}

export default BubbleSet;