import React from 'react';
import { useRootContext } from '../../utils/context/context.ts';
import { getCharsArr, CHARS } from '../../utils/commons.js';
import Thumbnail from '../thumbnail/thumbnail.tsx';
import "./players-menu.scss";

const PlayersMenu = () => {
  const { setPlayer } = useRootContext();
  const players = getCharsArr();

  return (
    <aside className="fei-players-menu">
      <h1 className="fei-players-menu__title">Elige tu personaje</h1>
      <ul className="fei-players-menu__list">
        {players.map((player) => {
          return (
            <li className="fei-players-menu__item" key={player}>
              <Thumbnail className="fei-players-menu__thumbnail" char={CHARS[player]} labelEnabled callback={() => setPlayer(CHARS[player])} />
            </li>
          )
        })}
      </ul>
    </aside >
  )
}

export default PlayersMenu;