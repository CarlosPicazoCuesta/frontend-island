import { createContext, useContext } from "react";
import { CHARS } from "../commons.js";

type RootContextType = {
  currentPage: string;
  activeSong: string;
  player: any;
  setPlayer: (string) => void | null;
  addMissionAccomplished: (string) => void;
  day: string;
  missionsAccomplished: string[];
};

export const RootContextInitial = {
  currentPage: "",
  activeSong: "",
  play: true,
  player: CHARS.aitor,
  setPlayer: null,
  day: "day",
  missionsAccomplished: [],
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
  bar: "/departure",
  departure: "/day",
  day: "/lunes",
  lunes: "/martes",
  martes: "/miercoles",
  miercoles: "/jueves",
  jueves: "/viernes",
  viernes: "/release",
  release: "/final",
  map: "/fishing",
  fishing: "/day",
  topDeck: "/barracks",
  barracks: "/day",
  final: "/credits",
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
