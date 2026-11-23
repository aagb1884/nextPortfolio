import { Metadata } from "next";
import BlogPage from "./blog_page";

export const metadata: Metadata = {
  title: "Opinions Too Unpopular to Monetise - a blog",
  keywords: [
    "doctor who",
    "poetry",
    "app development",
    "tv",
    "television",
    "movies",
    "books",
    "science fiction",
    "fantasy",
  ],
  openGraph: {
    title: "Opinions Too Unpopular to Monetise",
    description:
      "A blog about pop culture, poetry, software development and Doctor Who.",
  },
};

export default function Blog() {
  return (
    <div>
      <BlogPage />
    </div>
  );
}
