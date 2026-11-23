import { Metadata } from "next";
import WhoTitleGenerator from "./WhoTitleGenerator";

export const metadata: Metadata = {
  title: "Doctor Who Title Generator",
  keywords: ["title cards", "doctor who", "episode names"],
  openGraph: {
    title: "Doctor Who Title Generator",
    description: "A test version of a Doctor Who title card generator.",
  },
};

const WhoTitleLandingPage = () => {
  return <WhoTitleGenerator />;
};
export default WhoTitleLandingPage;
