import { Metadata } from "next";
import Randomiser from "./Randomiser";

export const metadata: Metadata = {
  title: "randomiser",
  keywords: ["random", "doctor who", "pick story", "choose story"],
  openGraph: {
    title: "randomiser",
    description: "Picks a random Doctor Who story for you to watch.",
  },
};

const RandomiserPage = () => {
  return (
    <div>
      <Randomiser />
    </div>
  );
};

export default RandomiserPage;
