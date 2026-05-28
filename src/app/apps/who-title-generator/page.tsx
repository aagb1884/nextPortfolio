import WhoTitleGenerator from "./WhoTitleGenerator";

export const metadata = {
  title: "Doctor Who Title Generator",
  openGraph: {
    title: "Doctor Who Title Generator",
    description: "A test version of a Doctor Who title card generator.",
  },
};

const WhoTitleLandingPage = () => {
  return <WhoTitleGenerator />;
};
export default WhoTitleLandingPage;
