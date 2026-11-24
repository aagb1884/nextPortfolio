import { Metadata } from "next";
import BfGenPage from "./bf_gen_page";

export const metadata: Metadata = {
  title: "The Big Finish Boxset Generator",
  keywords: [
    "Doctor Who",
    "audio",
    "Nick Briggs",
    "boxsets",
    "jackie tyler",
    "generator game",
  ],
  openGraph: {
    title: "The Big Finish Boxset Generator",
    description: "Generate your own Big Finish boxset blurbs.",
  },
};

const BigFinishGenerator = () => {
  return (
    <div>
      <BfGenPage />
    </div>
  );
};

export default BigFinishGenerator;
