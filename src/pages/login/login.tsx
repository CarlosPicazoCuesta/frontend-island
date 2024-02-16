import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import classnames from 'classnames';
import { checkPass, handlePasswordChange } from '../../utils/core';
import { sleep } from '../../utils/commons.js';
import { useRootContext, nextPage } from '../../utils/context/context.ts';
import Page from '../page/page';
import login from '../../assets/sounds/login.mp3';
import "./login.scss";

import capiCredits from '../../assets/images/npcs/capiCredits.png';
import coru1 from '../../assets/images/credits/Coru1.png';
import coru2 from '../../assets/images/credits/Coru2-isi.png';
import coru3 from '../../assets/images/credits/Coru3.png';
import coru4 from '../../assets/images/credits/Coru4.png';
import coru5 from '../../assets/images/credits/Coru5-aitor.png';
import coru6 from '../../assets/images/credits/Coru6-aitor.png';
import coru7 from '../../assets/images/credits/Coru7.png';
import coru8 from '../../assets/images/credits/Coru8.png';
import coru9 from '../../assets/images/credits/Coru9.png';
import coru10 from '../../assets/images/credits/Coru10.png';
import coru11 from '../../assets/images/credits/Coru11.png';
import coru12 from '../../assets/images/credits/Coru12.png';
import coru13 from '../../assets/images/credits/Coru13.png';
import coru14 from '../../assets/images/credits/Coru14.png';
import coru16 from '../../assets/images/credits/Coru16.png';
import coru18 from '../../assets/images/credits/Coru18.png';
import coru20 from '../../assets/images/credits/Coru20.png';
import coru21 from '../../assets/images/credits/Coru21.png';
import coru22 from '../../assets/images/credits/Coru22.png';
import coru23 from '../../assets/images/credits/Coru23.png';
import coru24 from '../../assets/images/credits/Coru24.png';
import mad1 from '../../assets/images/credits/Mad1.png';
import mad2 from '../../assets/images/credits/Mad2.png';
import mad4 from '../../assets/images/credits/Mad4.png';
import mad5 from '../../assets/images/credits/Mad5.png';
import mad6 from '../../assets/images/credits/Mad6.png';
import mad9 from '../../assets/images/credits/Mad9.png';
import mad10 from '../../assets/images/credits/Mad10.png';
import mad11 from '../../assets/images/credits/Mad11.png';
import mad12 from '../../assets/images/credits/Mad12.png';
import mad13 from '../../assets/images/credits/Mad13.png';
import mad14 from '../../assets/images/credits/Mad14.png';
import mad15 from '../../assets/images/credits/Mad15.png';
import mad16 from '../../assets/images/credits/Mad16.png';
import mad17 from '../../assets/images/credits/Mad17.png';
import mad18 from '../../assets/images/credits/Mad18.png';
import mad19 from '../../assets/images/credits/Mad19.png';
import captura3 from '../../assets/images/credits/Captura3.png';
import captura4 from '../../assets/images/credits/Captura4.png';
import captura12 from '../../assets/images/credits/Captura12.png';
import carlosbichos from '../../assets/images/credits/CarlosBichos.png';
import cenapremio from '../../assets/images/credits/CenaPremio.jpg';
import JesusBro from '../../assets/images/credits/JesusBro2.png';
import JoseDani from '../../assets/images/credits/Jose-Dani.png';
import LaserTag from '../../assets/images/credits/LaserTag.png';
import LilenIsi from '../../assets/images/credits/Lilen-isi.png';
import Muras from '../../assets/images/credits/Muras.png';
import oldTimes from '../../assets/images/credits/oldTimes.png';
import PerroAitor from '../../assets/images/credits/Perro-aitor.png';
import Perroisaac from '../../assets/images/credits/Perro-isaac.png';
import Perroisaac2 from '../../assets/images/credits/Perro-isaac-2.png';
import premio from '../../assets/images/credits/premio.png';
import Premio2 from '../../assets/images/credits/Premio2.png';
import Premio4 from '../../assets/images/credits/Premio4.png';
import shotdaily1 from '../../assets/images/credits/Shot-daily-1.png';
import shotdaily2 from '../../assets/images/credits/Shot-daily-2.png';
import shotdaily3 from '../../assets/images/credits/Shot-daily-3.png';
import shotisi from '../../assets/images/credits/Shot-isi.png';
import shotjose from '../../assets/images/credits/Shot-jose.png';
import dailyPics2 from '../../assets/images/credits/daily-pics2.png';

const LoginPage = () => {
  // const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [tip, setTip] = useState("");
  const [joke, setJoke] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [loadPage, setLoadPage] = useState('');
  const { setSong } = useRootContext();
  const tips = [
    "Adivina, adivinanza...",
    "Habrá que ir probando cosas y más cosas...",
    "¿Qué tal si pruebas con 'password'?",
    "¿Y si pruebas con '123456'?",
    "¿Para qué me haces caso?",
    "Me abuuuuurroooooooo...",
    "'MurasGuapo' no es una buena opción.",
    "Lo mismo es algo relacionado con el equipo...",
    "Hasta Muras acertaría esto...",
    "Ya estamos tardando un poquito...",
    "¿Si lo golpeas con una PIEDRA muy dura?",
    "Vamos, vamos...",
    "¿Te he sugerido ya que una PIEDRA podría funcionar?",
    "¿No te sabrás por casualidad el lema de TU PROPIO EQUIPO?",
    "Quien dice una piedra, dice una ROCA, que parece que no estáis muy inspirados...",
    "Una R O C A ...",
    "¿S Ó L I D A?",
    "¿Y si me haces caso y usas una ROCA SÓLIDA?",
    "Algo así como ROCASOLIDA...",
    "Me rindo, no sé qué más decirte...",
    "Equipo 'ROCASOLIDA', ¿te suena?",
    "¿ROCASOLIDA?",
    "Dios Santo, si no entráis ya voy a pedir que os despidan a todos...",
    "Me estáis tomando el pelo, ¿verdad?",
    "Venga, que este tiempo vale dinero.",
    "Ponlo ya: ROCASOLIDA"
  ]

  async function tipsLoader() {
    for (const tip of tips) {
      await sleep(7000);
      setTip(tip);
    }
  }
  const [cookies, setCookie] = useCookies(["PWD"]);

  const onChangePass = (e) => {
    if (e.target.value.toLowerCase().indexOf("password") >= 0) {
      setJoke("Vaya, vaya, alguien no se ha leído la ISO 27001...");
    }
    if (e.target.value.toLowerCase().indexOf("1234") >= 0) {
      setJoke("La madre que te parió...");
    }
    if (e.target.value.toLowerCase().indexOf("murasguapo") >= 0) {
      setJoke("Muras?? En serio??");
    }
    if (e.target.value.toLowerCase().indexOf("inditex") >= 0) {
      setJoke("Inditex... hay que ser pelota.");
    }
    if (e.target.value.toLowerCase().indexOf("softtek") >= 0) {
      setJoke("Espera, que llamo a Ramis para que te ponga una medalla.");
    }
    if (e.target.value.toLowerCase().indexOf("piedra") >= 0) {
      setJoke("A ver, lo de PIEDRA era una pista, no hay que ser tan literal.");
    }
    setPassword(e.target.value);
  }

  async function allowAccess(hash) {
    setCookie("PWD", hash, { path: "/" });
    setSong(login);
    await sleep(1000);
    setFadeOut(true);
    setLoadPage(nextPage.login);
  }

  useEffect(() => {
    handlePasswordChange(password.toLowerCase()).then(
      hash => {
        const passwordCheck = checkPass(hash);
        if (passwordCheck) {
          allowAccess(hash);
        }
      }
    );
  }, [password]);

  useEffect(() => {
    tipsLoader();
  }, []);

  return (
    <Page fadeOut={fadeOut} load={loadPage}>
      <main className={classnames("fei-page fei-login-page", { 'fei-page--fade-out': fadeOut })}>
        <input className="fei-login-page__password" autoFocus type="password" placeholder="Password" onChange={onChangePass} />
        <p className="fei-login-page__joke">{joke}</p>
        <p className="fei-login-page__tip">{tip}</p>
      </main>
      <aside className="fei-cacheator">
        <img className="fei-credits__slide-img" src={capiCredits} alt="" />
        <img className="fei-credits__slide-img" src={coru1} alt="" />
        <img className="fei-credits__slide-img" src={coru2} alt="" />
        <img className="fei-credits__slide-img" src={coru3} alt="" />
        <img className="fei-credits__slide-img" src={coru4} alt="" />
        <img className="fei-credits__slide-img" src={coru5} alt="" />
        <img className="fei-credits__slide-img" src={coru6} alt="" />
        <img className="fei-credits__slide-img" src={coru7} alt="" />
        <img className="fei-credits__slide-img" src={coru8} alt="" />
        <img className="fei-credits__slide-img" src={coru9} alt="" />
        <img className="fei-credits__slide-img" src={coru10} alt="" />
        <img className="fei-credits__slide-img" src={coru11} alt="" />
        <img className="fei-credits__slide-img" src={coru12} alt="" />
        <img className="fei-credits__slide-img" src={coru13} alt="" />
        <img className="fei-credits__slide-img" src={coru14} alt="" />
        <img className="fei-credits__slide-img" src={coru16} alt="" />
        <img className="fei-credits__slide-img" src={coru18} alt="" />
        <img className="fei-credits__slide-img" src={coru20} alt="" />
        <img className="fei-credits__slide-img" src={coru21} alt="" />
        <img className="fei-credits__slide-img" src={coru22} alt="" />
        <img className="fei-credits__slide-img" src={coru23} alt="" />
        <img className="fei-credits__slide-img" src={coru24} alt="" />
        <img className="fei-credits__slide-img" src={mad1} alt="" />
        <img className="fei-credits__slide-img" src={mad2} alt="" />
        <img className="fei-credits__slide-img" src={mad4} alt="" />
        <img className="fei-credits__slide-img" src={mad5} alt="" />
        <img className="fei-credits__slide-img" src={mad6} alt="" />
        <img className="fei-credits__slide-img" src={mad9} alt="" />
        <img className="fei-credits__slide-img" src={mad10} alt="" />
        <img className="fei-credits__slide-img" src={mad11} alt="" />
        <img className="fei-credits__slide-img" src={mad12} alt="" />
        <img className="fei-credits__slide-img" src={mad13} alt="" />
        <img className="fei-credits__slide-img" src={mad14} alt="" />
        <img className="fei-credits__slide-img" src={mad15} alt="" />
        <img className="fei-credits__slide-img" src={mad16} alt="" />
        <img className="fei-credits__slide-img" src={mad17} alt="" />
        <img className="fei-credits__slide-img" src={mad18} alt="" />
        <img className="fei-credits__slide-img" src={mad19} alt="" />
        <img className="fei-credits__slide-img" src={captura3} alt="" />
        <img className="fei-credits__slide-img" src={captura4} alt="" />
        <img className="fei-credits__slide-img" src={captura12} alt="" />
        <img className="fei-credits__slide-img" src={carlosbichos} alt="" />
        <img className="fei-credits__slide-img" src={cenapremio} alt="" />
        <img className="fei-credits__slide-img" src={JesusBro} alt="" />
        <img className="fei-credits__slide-img" src={JoseDani} alt="" />
        <img className="fei-credits__slide-img" src={LaserTag} alt="" />
        <img className="fei-credits__slide-img" src={LilenIsi} alt="" />
        <img className="fei-credits__slide-img" src={Muras} alt="" />
        <img className="fei-credits__slide-img" src={oldTimes} alt="" />
        <img className="fei-credits__slide-img" src={PerroAitor} alt="" />
        <img className="fei-credits__slide-img" src={Perroisaac} alt="" />
        <img className="fei-credits__slide-img" src={Perroisaac2} alt="" />
        <img className="fei-credits__slide-img" src={premio} alt="" />
        <img className="fei-credits__slide-img" src={Premio2} alt="" />
        <img className="fei-credits__slide-img" src={Premio4} alt="" />
        <img className="fei-credits__slide-img" src={shotdaily1} alt="" />
        <img className="fei-credits__slide-img" src={shotdaily2} alt="" />
        <img className="fei-credits__slide-img" src={shotdaily3} alt="" />
        <img className="fei-credits__slide-img" src={shotisi} alt="" />
        <img className="fei-credits__slide-img" src={shotjose} alt="" />
        <img className="fei-credits__slide-img" src={dailyPics2} alt="" />
      </aside>
    </Page>
  );
}

export default LoginPage;
