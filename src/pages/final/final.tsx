import React from 'react';
import { useNavigate } from 'react-router-dom';
import { nextPage } from '../../utils/context/context.ts';
import Page from '../../pages/page/page.jsx';
import Speech from './speech.tsx';
import './final.scss';

const IntroPage = () => {
  const navigate = useNavigate();

  const text = [
    "Un hogar no es una isla, ni un barco.",
    "No es una ciudad, ni una casa.",
    "Hogar es una emoción.",
    "Y lo encontrarás allí donde están",
    "quienes hacen que sientas",
    "que estás en tu lugar en el mundo.",
    " ",
    "Capi.",
    "LibFrontSGA.",
  ];

  function loadNextPage() {
    navigate(nextPage.final);
  }

  return (
    <Page >
      <main className="fei-page fei-final">
        <Speech text={text} callback={loadNextPage} />
      </main>
    </Page>
  )
}

export default IntroPage;