import { Metadata } from "next";
import BarlowContainer from "./BarlowContainer";

export const metadata: Metadata = {
  title: "Setting the Gary Bar Low - Demo",
  keywords: ["Gary Barlow", "Take That", "pop music", "UK Singles chart"],
  openGraph: {
    title: "Setting the Gary Bar Low - Demo",
    description: "A demo version of a game I've made.",
  },
};

const BarlowLandingPage = () => {
  return <BarlowContainer />;
};

export default BarlowLandingPage;
