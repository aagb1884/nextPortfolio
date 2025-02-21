import type { Metadata } from "next";
import localFont from "next/font/local";
import { Hubot_Sans, Sigmar, Tangerine, Oxanium, Notable,
  Della_Respira, Press_Start_2P, Londrina_Sketch, Londrina_Solid } from 'next/font/google';
import { GlobalStateProvider } from './context/GlobalStateContext';
import { GoogleAnalytics } from '@next/third-parties/google'
import "./styles/globals.css";

const sigmar = Sigmar({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sigmar',
})

const hubotSans = Hubot_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hubotsans',
})

const tangerine = Tangerine({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tangerine',
  weight: '400',
})

const oxanium = Oxanium({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oxanium',
})

const p2p = Press_Start_2P({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-p2p',
  weight: '400'
})

const dellaRespira = Della_Respira({
  subsets: ['latin'],
  variable: '--font-della-respira',
  weight: '400'
})

const londrina_sketch = Londrina_Sketch({
  subsets: ['latin'],
  variable: '--font-londrina-sketch',
  weight: '400'
})

const londrina_solid = Londrina_Solid({
  subsets: ['latin'],
  variable: '--font-londrina-solid',
  weight: '400'
})

const notable = Notable({
  subsets: ['latin'],
  variable: "--font-notable",
  weight: "400"
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andrew Blair's Website",
  generator: 'Next.js',
  openGraph: {
  title: "Andrew Blair's website",
  description: "Andrew Blair is a writer, performer and software developer from Scotland. He made this website to host his apps, blog and writing credits.",
  },
  icons: {
    icon: '/images/favicon.ico'
  }, 
  creator: 'Andrew Blair',
  keywords: ['Software Developer', 'blog', 'Poet', 'Performer', 'Edinburgh', 'Robert Pattinson', 'journalist', 'Den of Geek', 'Doctor Who', 'Eurovision Bingo', 'Big Finish Boxset Generator', 'Ideas too Unpopular to Monetise'],
  alternates: {
      types: {
        'application/rss+xml': 'https://andrewblair.co.uk/feed.xml',
      }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalStateProvider>
    <html lang='en' suppressHydrationWarning>
      <body className={`${hubotSans.variable} ${sigmar.variable} 
      ${geistSans.variable} ${geistMono.variable} ${tangerine.variable}
      ${oxanium.variable} ${p2p.variable} ${dellaRespira.variable} 
      ${londrina_sketch.variable} ${londrina_solid.variable} ${notable.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-HGEZ1SBR1R" />
    </html>
    </GlobalStateProvider>
  );
}
