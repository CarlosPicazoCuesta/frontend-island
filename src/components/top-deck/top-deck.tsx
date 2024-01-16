import React, { useState } from "react";
// import { useRootContext } from "../../utils/context/context.ts";
// import Page from "../pages/page.jsx";
import './top-deck.scss';

const TopDeck = ({ loadMap }) => {
  // const { map } = useRootContext();

  return (
    <div className="fei-top-deck">
      <div className="fei-top-deck__map" onClick={loadMap} />
    </div>
  )
}

export default TopDeck;