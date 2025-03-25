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
