import { Metadata } from "next";
import WhoGamesTabs from "./WhoGamesTabs";

export const metadata: Metadata = {
  title: "Doctor Who Games",
  keywords: ["ranking", "appreciation index", "ratings", "fan poll"],
  openGraph: {
    title: "Doctor Who Games",
    description: "Help an angel complete its quest.",
  },
};

export default function DrWhoDND() {
  return (
    <div>
      <WhoGamesTabs />
    </div>
  );
}
