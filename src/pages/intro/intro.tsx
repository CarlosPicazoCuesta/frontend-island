import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { nextPage } from '../../utils/context/context.ts';
import Page from '../../pages/page/page.jsx';
import Secuence from '../../components/secuence/secuence.tsx';
import { useRootContext } from '../../utils/context/context.ts';
import './intro.scss';

const IntroPage = () => {
  const navigate = useNavigate();
  const { setSong } = useRootContext();
  const secuences = [
    "En algún lugar de Softtek...",
    "...un grupo de insensatos vivirán la más memorable aventura",
    "F R O N T E N D technologies presents",
    "Untested Entertainment production",
    "An EndlessLoop original story",
    "RocaSolidaAsFuck experience",
    "- Basado en hechos reales -",
    "_",
    "_",
    "_",
    "npm start |",
  ];

  const secuenceConfig = {
    _6: { className: 'fei-italic' },
    _10: { className: 'fei-green fei-consolas fei-28' }
  }

  function loadNextPage() {
    navigate(nextPage.intro);
  }

  useEffect(() => {
    setSong("");
  }, []);

  return (
    <Page>
      <main className="fei-page fei-intro">
        <h2 className="fei-intro__title">
          <Secuence slides={secuences} callback={loadNextPage} itemsConfig={secuenceConfig} />
        </h2>
      </main>
    </Page>
  )
}

export default IntroPage;