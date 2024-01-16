import React from 'react';
import './banner.scss';

const Banner = ({ text, fadeOut = false, className = "" }) => {
  return <h1 className={`fei-banner ${className} ${fadeOut ? "fei-banner--fade-out" : ""}`}>{text}</h1>
}

export default Banner;