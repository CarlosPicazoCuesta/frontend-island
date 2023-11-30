import React from 'react';
import { useRootContext } from '../../utils/context/context';
import classNames from 'classnames';
import Thumbnail from '../thumbnail/thumbnail.tsx';
import './player.scss';

const Player = ({ className = "" }) => {
  console.log("player");
  const { player } = useRootContext();

  return (
    <div className={classNames("fei-player", className, `fei-player--${player.gender}`)}>
      <Thumbnail className="fei-player--bar" char={player} free />
    </div>
  );
}

export default Player;