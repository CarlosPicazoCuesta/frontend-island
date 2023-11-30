import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import classnames from 'classnames';
import { checkPass, handlePasswordChange } from '../../utils/core';
import { sleep } from '../../utils/commons.js';
import { useRootContext, nextPage } from '../../utils/context/context.js';
import Page from '../page/page';
import login from '../../assets/sounds/login.mp3';
import "./login.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [tip, setTip] = useState("");
  const [joke, setJoke] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
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
      await sleep(10000);
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
    setFadeOut(true);
    // sleep(2400).then(() => navigate(nextPage.login));
    navigate(nextPage.login);
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
    <Page>
      <main className={classnames("fei-page fei-login-page", { 'fei-page--fade-out': fadeOut })}>
        <input className="fei-login-page__password" autoFocus type="password" placeholder="Password" onChange={onChangePass} />
        <p className="fei-login-page__joke">{joke}</p>
        <p className="fei-login-page__tip">{tip}</p>
      </main>
    </Page>
  );
}

export default LoginPage;
