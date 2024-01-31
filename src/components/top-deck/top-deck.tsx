import React from "react";
import { useRootContext } from "../../utils/context/context.ts";
// import Page from "../pages/page.jsx";
import './top-deck.scss';

const TopDeck = ({ loadMap, loadBarracks }) => {
  const { missionsAccomplished } = useRootContext();
  // console.log(missionsAccomplished);
  // console.log(!missionsAccomplished.includes("fishing"));
  // console.log(!missionsAccomplished.includes("barracks"));

  return (
    <div className="fei-top-deck">
      {!missionsAccomplished.includes("fishing") && <div className="fei-top-deck__map" onClick={loadMap} />}
      {!missionsAccomplished.includes("barracks") && <div className="fei-top-deck__barracks" onClick={loadBarracks} />}
    </div>
  )
}

export default TopDeck;