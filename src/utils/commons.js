import aitor1 from "../assets/images/chars/aitor1.png";
import jose1 from "../assets/images/chars/jose1.png";
import isaac1 from "../assets/images/chars/isaac1.png";
import somo1 from "../assets/images/chars/somo1.png";
import isi1 from "../assets/images/chars/isi3.png";
import marc1 from "../assets/images/chars/marc3.png";
import dorian1 from "../assets/images/chars/dorian2.png";
import lilen1 from "../assets/images/chars/lilen1.png";
import dani1 from "../assets/images/chars/dani1.png";
import capi1 from "../assets/images/npcs/capi1.png";
import muras from "../assets/images/npcs/recorte-muras.png";
import oscar from "../assets/images/npcs/recorte-muras.png";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const NPCS = {
  capi: { id: "capi", thumbnail: capi1, color: "goldenrod", gender: "male", name: "Capi" },
  muras: { id: "muras", thumbnail: muras, color: "chocolate", gender: "male", name: "Muras" },
  oscar: { id: "oscar", thumbnail: oscar, color: "aquamarine", gender: "male", name: "Oscar" },
};

export const CHARS = {
  isi: { id: "isi", name: "Isi", thumbnail: isi1, color: "#9932cc", gender: "female" },
  aitor: { id: "aitor", name: "Aitor", thumbnail: aitor1, color: "#fcfcfc", gender: "male" },
  somo: { id: "somo", name: "Somo", thumbnail: somo1, color: "#c63232", gender: "male" },
  marc: { id: "marc", name: "Marc", thumbnail: marc1, color: "#ff0000", gender: "male" },
  dorian: { id: "dorian", name: "Dorian", thumbnail: dorian1, color: "#ffa500", gender: "male" },
  jose: { id: "jose", name: "Jose", thumbnail: jose1, color: "#87ceeb", gender: "male" },
  lilen: { id: "lilen", name: "Lilen", thumbnail: lilen1, color: "#ff1493", gender: "female" },
  isaac: { id: "isaac", name: "Isaac", thumbnail: isaac1, color: "#09ac6f", gender: "male" },
  dani: { id: "dani", name: "Dani", thumbnail: dani1, color: "#ff00ff", gender: "female" },
};

export function getCharsArr() {
  return Object.keys(CHARS);
}
