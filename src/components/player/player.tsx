import React from 'react';
import { useRootContext } from '../../utils/context/context.ts';
import classNames from 'classnames';
import Thumbnail from '../thumbnail/thumbnail.tsx';
import './player.scss';

const Player = ({ className = "" }) => {
  const { player } = useRootContext();

  return (
    <div className={classNames("fei-player", className, `fei-player--${player.gender}`)}>
      <Thumbnail className="fei-player--bar" char={player} free />
    </div>
  );
}

export default Player;