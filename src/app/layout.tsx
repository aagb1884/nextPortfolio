import type { Metadata } from "next";
import {
  oxanium,
  hubotSans,
  sigmar,
  tangerine,
  p2p,
  dellaRespira,
  londrina_sketch,
  londrina_solid,
  notable,
  tektur,
  oswald,
  digital,
  axiformaReg,
  eurostile,
  ContaxPro75Bold,
  futuraBold,
  futuraXtaBold,
  futuraBook,
  displayMedium,
  optiFormulaOne,
  univers,
  sfmovie,
} from "./fonts";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./styles/globals.css";

// const digital = localFont({
//   src: "./fonts/digital-7.ttf",
//   variable: "--font-digital",
//   weight: "100 400 900",
// });
// const axiformaReg = localFont({
//   src: "./fonts/AxiformaRegular.otf",
//   variable: "--font-axiformaReg",
//   weight: "100 400 900",
// });
// const eurostile = localFont({
//   src: "./fonts/Eurostile.otf",
//   variable: "--font-eurostile",
//   weight: "100 400 900",
// });
// const ContaxPro75Bold = localFont({
//   src: "./fonts/ContaxPro75Bold.otf",
//   variable: "--font-contaxpro",
//   weight: "100 400 900",
// });
// const futuraBold = localFont({
//   src: "./fonts/FuturaBold.otf",
//   variable: "--font-futuraBold",
//   weight: "100 400 900",
// });
// const futuraXtaBold = localFont({
//   src: "./fonts/FuturaExtraBold.otf",
//   variable: "--font-futuraXtaBold",
//   weight: "100 400 900",
// });
// const displayMedium = localFont({
//   src: "./fonts/Display-Medium.otf",
//   variable: "--font-displaymedium",
//   weight: "100 400 900",
// });
// const optiFormulaOne = localFont({
//   src: "./opti-formula-one.otf",
//   variable: "--font-optione",
//   weight: "100 400 900",
// });
// const univers = localFont({
//   src: "./Univers-Condensed-Light.otf",
//   variable: "--font-univers",
//   weight: "100 400 900",
// });
// const futuraBook = localFont({
//   src: "./fonts/Futura-Book.ttf",
//   variable: "--font-futuraBook",
//   weight: "100 400 900",
// });
// const sfmovie = localFont({
//   src: "./fonts/SFMoviePoster.ttf",
//   variable: "--font-sfmovie",
//   weight: "100 400 900",
// });

export const metadata: Metadata = {
  title: "Andrew Blair's Website",
  generator: "Next.js",
  openGraph: {
    title: "Andrew Blair's website",
    description:
      "Andrew Blair is a writer, performer and software developer from Scotland. He made this website to host his apps, blog and writing credits.",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  creator: "Andrew Blair",
  keywords: [
    "Software Developer",
    "blog",
    "Poet",
    "Performer",
    "Edinburgh",
    "Robert Pattinson",
    "journalist",
    "Den of Geek",
    "Doctor Who",
    "Eurovision Bingo",
    "Big Finish Boxset Generator",
    "Ideas too Unpopular to Monetise",
  ],
  alternates: {
    types: {
      "application/rss+xml": "https://andrewblair.co.uk/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalStateProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${hubotSans.variable} ${sigmar.variable} ${oswald.variable}
      ${digital.variable} ${tangerine.variable} ${tektur.variable}
      ${oxanium.variable} ${p2p.variable} ${dellaRespira.variable} 
      ${londrina_sketch.variable} ${londrina_solid.variable} ${notable.variable} 
      ${axiformaReg.variable} ${eurostile.variable} ${ContaxPro75Bold.variable}
      ${futuraBold.variable} ${futuraXtaBold.variable} ${futuraBook.variable}
      ${displayMedium.variable} ${optiFormulaOne.variable} ${univers.variable}
      ${sfmovie.variable}
      `}
        >
          {children}
        </body>
        <GoogleAnalytics gaId="G-HGEZ1SBR1R" />
      </html>
    </GlobalStateProvider>
  );
}
