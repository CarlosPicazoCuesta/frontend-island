import React from 'react';
import classNames from 'classnames';
import { useRootContext } from '../../utils/context/context.ts';
import './days-selector.scss';

const DaysSelector = () => {
  const { day, setDay } = useRootContext();

  function changeDay(newDay) {
    setDay(newDay);
  }

  return (
    <ul className="fei-days-selector">
      <li className={classNames("fei-days-selector__item", { 'fei-days-selector__item--active': day === "lunes" })} onClick={() => changeDay('lunes')}>Lunes</li>
      <li className={classNames("fei-days-selector__item", { 'fei-days-selector__item--active': day === "martes" })} onClick={() => changeDay('martes')}>Martes</li>
      <li className={classNames("fei-days-selector__item", { 'fei-days-selector__item--active': day === "miercoles" })} onClick={() => changeDay('miercoles')}>Miércoles</li>
      <li className={classNames("fei-days-selector__item", { 'fei-days-selector__item--active': day === "jueves" })} onClick={() => changeDay('jueves')}>Jueves</li>
      <li className={classNames("fei-days-selector__item", { 'fei-days-selector__item--active': day === "viernes" })} onClick={() => changeDay('viernes')}>Viernes</li>
    </ul>
  );
};

export default DaysSelector;