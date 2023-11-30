import React, { FC } from "react";
import classNames from "classnames";
import "./thumbnail.scss";

type ThumbnailProps = {
  char: {
    id: string;
    thumbnail: string;
    color: string;
  };
  className?: string;
  callback?: () => void;
  size?: "size-s" | "size-m" | "size-l";
  labelEnabled?: boolean;
  free?: boolean;
};

const Thumbnail: FC<ThumbnailProps> = ({ char, className, callback, size = "size-m", labelEnabled = false, free = false }) => {
  return (
    <div key={char.id} className={`${free ? '' : "fei-thumbnail-wrapper"}`} >
      <div className={classNames("fei-thumbnail", size, { "fei-thumbnail--event": callback })} style={{ borderColor: char.color }} onClick={callback}>
        <img src={char.thumbnail} alt={char.id} className="fei-thumbnail__img" />
      </div >
      {labelEnabled && <span className="fei-thumbnail__name" style={{ color: char.color }}>{char.id}</span>}
    </div >
  );
};

export default Thumbnail;