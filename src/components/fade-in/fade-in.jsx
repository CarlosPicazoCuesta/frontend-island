import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { sleep } from "../../utils/commons.js";
import "./fade-in.scss";

const FadeIn = ({ callback = () => {}, delayStart = 800, delayEnd = 400, children }) => {
  const effectDuration = 1200;
  const [isFadeInActive, setIsFadeInActive] = useState(false);

  async function effect() {
    // await sleep(delayStart);
    setIsFadeInActive(true);
    // await sleep(effectDuration);
    // await sleep(delayEnd);
    callback();
  }

  useEffect(() => {
    effect();
  }, []);

  return <div className={classNames("fei-fade-in", { "fei-fade-in--is-active": isFadeInActive })}>{children}</div>;
};

export default FadeIn;
