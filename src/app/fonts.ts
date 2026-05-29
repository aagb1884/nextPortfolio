import {
  Hubot_Sans,
  Sigmar,
  Tangerine,
  Oxanium,
  Notable,
  Della_Respira,
  Press_Start_2P,
  Londrina_Sketch,
  Londrina_Solid,
  Tektur,
  Oswald,
} from "next/font/google";
import localFont from "next/font/local";

export const sigmar = Sigmar({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sigmar",
});

export const hubotSans = Hubot_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hubotsans",
});

export const tangerine = Tangerine({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tangerine",
  weight: "400",
});

export const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

export const p2p = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-p2p",
  weight: "400",
});

export const dellaRespira = Della_Respira({
  subsets: ["latin"],
  variable: "--font-della-respira",
  weight: "400",
});

export const londrina_sketch = Londrina_Sketch({
  subsets: ["latin"],
  variable: "--font-londrina-sketch",
  weight: "400",
});

export const londrina_solid = Londrina_Solid({
  subsets: ["latin"],
  variable: "--font-londrina-solid",
  weight: "400",
});

export const notable = Notable({
  subsets: ["latin"],
  variable: "--font-notable",
  weight: "400",
});

export const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
  weight: "400",
});

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: "400",
});

export const digital = localFont({
  src: "./fonts/digital-7.ttf",
  variable: "--font-digital",
  weight: "lighter 100 400 900",
});
export const axiformaReg = localFont({
  src: "./fonts/AxiformaRegular.otf",
  variable: "--font-axiformaReg",
  weight: "lighter 100 400 900",
});
export const eurostile = localFont({
  src: "./fonts/Eurostile.otf",
  variable: "--font-eurostile",
  weight: "lighter 100 400 900",
});
export const ContaxPro75Bold = localFont({
  src: "./fonts/Contax.ttf",
  variable: "--font-contaxpro",
  weight: "lighter 100 400 900",
});
export const futuraBold = localFont({
  src: "./fonts/FuturaBold.otf",
  variable: "--font-futuraBold",
  weight: "lighter 100 400 900",
});
export const futuraXtaBold = localFont({
  src: "./fonts/FuturaExtraBold.otf",
  variable: "--font-futuraXtaBold",
  weight: "lighter 100 400 900",
});
export const displayMedium = localFont({
  src: "./fonts/Display-Medium.otf",
  variable: "--font-displaymedium",
  weight: "lighter 100 400 900",
});
export const optiFormulaOne = localFont({
  src: "./fonts/opti-formula-one.otf",
  variable: "--font-optione",
  weight: "100 400 900",
});
export const univers = localFont({
  src: "./fonts/Univers-Condensed-Light.otf",
  variable: "--font-univers",
  weight: "lighter 100 400 900",
});
export const futuraBook = localFont({
  src: "./fonts/Futura-Book.ttf",
  variable: "--font-futuraBook",
  weight: "lighter 100 400 900",
});
export const sfmovie = localFont({
  src: "./fonts/SFMoviePoster.ttf",
  variable: "--font-sfmovie",
  weight: "lighter 100 400 900",
});
export const heroic = localFont({
  src: "./fonts/heroic-condensed-book.ttf",
  variable: "--font-heroic",
  weight: "lighter 100 400 900",
});
export const postant = localFont({
  src: "./fonts/postant1.ttf",
  variable: "--font-postant",
  weight: "lighter 100 400 900",
});
