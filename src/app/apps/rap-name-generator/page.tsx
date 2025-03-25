import RapNameGenerator from "./components/rap_name_generator";

export const metadata = {
  title: "Rap Name Generator",
  openGraph: {
    title: "Rap Name Generator",
    description: "Find out what your name would be if you were a rap person.",
  },
};

const RapNameGeneratorLandingPage = () => {
  return <RapNameGenerator />;
};

export default RapNameGeneratorLandingPage;
