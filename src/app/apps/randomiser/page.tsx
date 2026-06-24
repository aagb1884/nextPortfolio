import Randomiser from "./Randomiser";

export const metadata = {
  title: "randomiser",
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
