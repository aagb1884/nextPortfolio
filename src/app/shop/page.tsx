import { Metadata } from "next";
import ShopPage from "./shop_page";

export const metadata: Metadata = {
  title: "Andrew Blair - Shop",
  keywords: [
    "poetry",
    "spoken word",
    "robert pattinson",
    "speculative books",
    "braag",
    "intense young man at an open mic night",
    "r-pattz facttz",
    "kevin james",
    "paul blart mall cop",
    "polblar tmolkop",
  ],
  openGraph: {
    title: "Andrew Blair - Shop",
    description: `A list of places you can buy things I've made or written.`,
  },
};

export default function Shop() {
  return (
    <div>
      <ShopPage />
    </div>
  );
}
