import React, { FC, useEffect, useState } from 'react';
import { sleep } from '../..//utils/commons';
import './bubble.scss';

export type BubbleProps = {
  className?: string;
  delay?: number;
  duration: number[];
  endDelay?: number;
  callback?: () => void;
  initCallback?: () => void;
  color?: string;
  width?: string;
  position?: { top: number, left: number };
  children?: React.ReactNode;
}

const Bubble: FC<BubbleProps> = ({
  className = "",
  children,
  duration = [1000],
  delay = 0,
  endDelay = 200,
  callback = () => { },
  initCallback = () => { },
  color = '#fff',
  width = "80vh",
  position = { top: 0, left: 0 }
}) => {
  const [active, setActive] = useState(false);

  async function showBubble() {
    await sleep(delay);
    setActive(true);
    initCallback?.();
    await sleep(duration[0]);
    setActive(false);
    await sleep(endDelay);
    callback();
  }

  useEffect(() => {
    showBubble();
  }, [children]);

  return (
    <div className={`fei-bubble ${className} ${active ? 'fei-bubble--active' : ''}`} style={{
      color: color,
      width: width,
      top: `${position.top}px`,
      left: `${position.left}px`
    }} >
      {children}
    </div>
  );
}

export default Bubble;