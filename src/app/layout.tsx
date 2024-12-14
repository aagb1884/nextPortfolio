import type { Metadata } from "next";
import localFont from "next/font/local";
import { Hubot_Sans } from 'next/font/google';
import { GlobalStateProvider } from './context/GlobalStateContext';
import "./styles/globals.css";

const hubotSans = Hubot_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hubotsans',
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
  description: "Andrew Blair is a writer, performer and software developer from Scotland. He made this website to host his apps, blog and writing credits.",
  icons: {
    icon: '/images/favicon.ico'
  },
  creator: 'Andrew Blair',
  keywords: ['Software Developer', 'Poet', 'Performer', 'Edinburgh', 'journalist', 'Den of Geek', 'Doctor Who'],
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
      <body className={`${hubotSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
    </GlobalStateProvider>
  );
}
