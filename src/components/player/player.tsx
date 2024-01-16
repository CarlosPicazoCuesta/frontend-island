import React from 'react';
import { useRootContext } from '../../utils/context/context.ts';
import classNames from 'classnames';
import Thumbnail from '../thumbnail/thumbnail.tsx';
import './player.scss';

const Player = ({ className = "", size = "size-m", active = true }) => {
  const { player } = useRootContext();

  return (
    <div className={classNames("fei-player", className, size, `fei-player--${player.gender}`)}>
      <Thumbnail className="fei-player--bar" char={player} free active={active} size={size} />
    </div>
  );
}

export default Player;