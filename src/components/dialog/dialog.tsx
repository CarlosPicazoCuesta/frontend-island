import React from 'react';
import classNames from 'classnames';
import Thumbnail from '../thumbnail/thumbnail.tsx';
import './dialog.scss';

const Dialog = ({ speaker, options, callback = () => { }, disabled = false, className = "" }) => {
  return (
    <div className={classNames("fei-dialog", className)}>
      <div className="fei-dialog__speaker">
        <Thumbnail char={speaker} size="size-xl" />
      </div>
      <div className="fei-dialog__content">
        <ul className="fei-dialog__options">
          {options.map((option) => {
            return (
              <li
                key={option.id}
                className={classNames("fei-dialog__option", { "fei-dialog__option--disabled": disabled })}
                style={{ color: speaker.color }}
                onClick={!disabled && callback ? () => callback(option) : () => { }}
              >
                {option.text}
              </li>
            )
          })
          }
        </ul>
      </div>
    </div >
  )
}

export default Dialog;