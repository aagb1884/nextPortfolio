import { Metadata } from "next";
import CreditsPage from "./credits_page";

export const metadata: Metadata = {
  title: "Credits Page",
  openGraph: {
    title: "Credits Page",
  },
};

const Credits = () => {
  return <CreditsPage />;
};

export default Credits;
