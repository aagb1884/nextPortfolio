import SciFiNameContainer from "./SciFiNameContainer";

export const metadata = {
  title: "The Science Fiction Name Generator",
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
