import React, { useState, useEffect, FC } from 'react';

export type WritterProps = {
  text: string;
  time?: number;
  callback?: () => void;
}

const Writter: FC<WritterProps> = ({ text = '', time, callback }) => {
  const [textPartial, setTextPartial] = useState('');
  const timer = time ? time / text.length : 100;

  function addChar(textLoopValue, originalText, index) {
    setTextPartial(textLoopValue + originalText[index]);
  }

  function addCharLoop(text, originalText, index) {
    if (text.length && index >= originalText.length) { callback?.(); return; }
    setTimeout(() => {
      addChar(text, originalText, index);
      addCharLoop(text + originalText[index], originalText, index + 1);
    }, timer);
  }

  useEffect(() => {
    addCharLoop('', text, 0);
  }, [text]);

  // useEffect(() => {
  //   addCharLoop(textPartial, text, 0);
  // }, []);

  return (
    <>
      {textPartial ? textPartial : ''}
    </>
  )
}

export default Writter; 