import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRootContext, nextPage } from "../../../utils/context/context.ts";
import Thumbnail from "../../../components/thumbnail/thumbnail.tsx";
import { getCharsArr, CHARS, sleep } from "../../../utils/commons.js";
import "./cartel.scss";

const Cartel = () => {
  let [shuffledChars, setShuffledChars] = React.useState([]);
  const { setPlayer } = useRootContext();
  const navigate = useNavigate();

  async function selectPlayer(player) {
    // console.log("select player", player);
    setPlayer(player);
    navigate(nextPage.dock);
  }

  useEffect(() => {
    setShuffledChars(getCharsArr().sort((a, b) => 0.5 - Math.random()));
  }, []);

  return (
    <aside className="fei-cartel">
      <h2 className="fei-cartel__title">Se busca tripulación!</h2>
      {shuffledChars.map((charRdm) => {
        return <Thumbnail key={charRdm.id} char={CHARS[charRdm]} callback={() => selectPlayer(CHARS[charRdm])} labelEnabled />;
      })}
    </aside>
  );
};

export default Cartel;
