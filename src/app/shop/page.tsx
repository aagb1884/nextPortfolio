import ShopPage from "./shop_page";

export const metadata = {
  title: "Andrew Blair - Shop",
  openGraph: {
    title: "Andrew Blair - Shop",
    description: `A list of places you can buy things I've made or written.`,
  },
};

export default function Blog() {
  return (
    <div>
      <ShopPage />
    </div>
  );
}
