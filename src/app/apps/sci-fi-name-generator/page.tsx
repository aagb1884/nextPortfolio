import { Metadata } from "next";
import SciFiNameContainer from "./SciFiNameContainer";

export const metadata: Metadata = {
  title: "The Science Fiction Name Generator",
  keywords: [
    "sci-fi",
    "science fiction",
    "made up name",
    "name generator",
    "character name",
  ],
  openGraph: {
    title: "The Science Fiction Name Generator",
    description:
      "If you're struggling to think of a name for your character let this app generate one for you instead.",
  },
};

const BarlowLandingPage = () => {
  return <SciFiNameContainer />;
};

export default BarlowLandingPage;
