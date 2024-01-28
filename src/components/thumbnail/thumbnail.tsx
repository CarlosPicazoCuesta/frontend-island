import React, { FC } from "react";
import classNames from "classnames";
import { CHARS } from "../../utils/commons.js";
import "./thumbnail.scss";

type ThumbnailProps = {
  char: {
    id: string;
    thumbnail: string;
    color: string;
  };
  className?: string;
  callback?: (string) => void;
  size?: "size-s" | "size-m" | "size-l" | "size-xl";
  labelEnabled?: boolean;
  free?: boolean;
  img?: string;
  active?: boolean;
  activeOnHover?: boolean;
};

const Thumbnail: FC<ThumbnailProps> = ({ char, callback, size = "size-m", labelEnabled = false, free = false, img, active = true, className = "", activeOnHover = false }) => {
  return (
    <div key={char.id} className={classNames(className, { "fei-thumbnail-wrapper": !free })} >
      <div className={classNames("fei-thumbnail", size, { "fei-thumbnail--event": callback, "fei-thumbnail--disabled": !active, "fei-thumbnail--active-on-hover": activeOnHover })} style={{ borderColor: char.color }} onClick={() => callback?.(char.id)}>
        <img src={img ? img : char.thumbnail} alt={char.id} className={classNames("fei-thumbnail__img", { "fei-thumbnail__img--dorian": char.id === CHARS.dorian.id, "fei-thumbnail__img--somo": char.id === CHARS.somo.id })} />
      </div >
      {labelEnabled && <span className="fei-thumbnail__name" style={{ color: char.color }}>{char.id}</span>}
    </div >
  );
};

export default Thumbnail;