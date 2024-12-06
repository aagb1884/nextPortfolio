import type { Metadata } from "next";
import localFont from "next/font/local";
import { Hubot_Sans } from 'next/font/google';
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
  description: "Software developer, journalist, poet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${hubotSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
