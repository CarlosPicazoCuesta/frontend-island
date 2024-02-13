import React from "react";
import { useRootContext } from "../../utils/context/context.ts";
import './top-deck.scss';

const TopDeck = ({ loadMap, loadBarracks }) => {
  const { missionsAccomplished } = useRootContext();

  return (
    <div className="fei-top-deck">
      {(!missionsAccomplished.includes("fishing") || !missionsAccomplished.includes("duels")) && <div className="fei-top-deck__map" onClick={loadMap} />}
      {!missionsAccomplished.includes("barracks") && <div className="fei-top-deck__barracks" onClick={loadBarracks} />}
    </div>
  )
}

export default TopDeck;