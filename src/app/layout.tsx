import type { Metadata } from "next";
import localFont from "next/font/local";
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
} from "./fonts";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./styles/globals.css";

const digital = localFont({
  src: "./fonts/digital-7.ttf",
  variable: "--font-digital",
  weight: "100 400 900",
});

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
      ${londrina_sketch.variable} ${londrina_solid.variable} ${notable.variable}`}
        >
          {children}
        </body>
        <GoogleAnalytics gaId="G-HGEZ1SBR1R" />
      </html>
    </GlobalStateProvider>
  );
}
