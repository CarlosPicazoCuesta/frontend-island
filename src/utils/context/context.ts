import { createContext, useContext } from "react";
// import { getCharsArr } from "../commons.js";

type RootContextType = {
  currentPage: string;
  activeSong: string;
  play: boolean;
  player: any;
  setPlayer: (string) => void | null;
};

export const RootContextInitial = {
  currentPage: "",
  activeSong: "",
  play: true,
  player: null,
  setPlayer: null,
};

export const RootContext = createContext({});

export const useRootContext = (): RootContextType => {
  const context = useContext(RootContext);
  return context;
};

export const nextPage = {
  default: "/login",
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
