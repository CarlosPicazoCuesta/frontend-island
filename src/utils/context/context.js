import { createContext, useContext } from "react";
// import { getCharsArr } from "../commons.js";

export const RootContextInitial = {
  currentPage: "",
  activeSong: "",
  play: true,
  player: null,
};

export const RootContext = createContext({});

export const useRootContext = () => {
  const context = useContext(RootContext);
  return context;
};

export const nextPage = {
  login: "/intro",
  intro: "/intro-island",
  introIsland: "/dock",
  dock: "/bar",
  bar: "/intro",
};

export const getNextPageId = (page) => {
  return page
    .replace("/", " ")
    .replace("-", " ")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};
