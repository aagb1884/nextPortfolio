import { Metadata } from "next";
import AppsPage from "./components/apps_page";

export const metadata: Metadata = {
  title: "Andrew Blair's Apps Page",
  keywords: [
    "gary barlow",
    "setting the gary barlow",
    "big finish generator",
    "big finish boxset generator",
    "eurovision bingo",
    "doctor who quiz",
    "dr who quiz",
    "doctor who",
    "title card generator",
    "doctor who title generator",
    "wesley snipes",
    "wesley snopes",
    "rap name generator",
    "sci-fi name generator",
    "science fiction name generator",
    "randomiser",
    "poetry remixer",
    "poetremixer",
    "scottish football simulator",
    "rangers manager simulator",
    "derek adams management simulator",
  ],
  openGraph: {
    title: "Andrew Blair's Apps Page",
  },
};

const AppsLandingPage = () => {
  return <AppsPage />;
};

export default AppsLandingPage;
