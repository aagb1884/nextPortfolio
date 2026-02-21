import BlogpostPage from "./blogpost_page";
import createClient from "../blog_components/client";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const postData = await createClient.fetch(
    `*[slug.current == $slug][0]{
      title,
      mainImage{
        asset->{
          url
        }
      },
      body[0]{
        children[0]{
          text
        }
      }
    }`,
    { slug }
  );

  if (!postData) {
    return {
      title: "Opinions Too Unpopular to Monetise - a blog",
    };
  }

  // Extract first bit of text for description
  const description =
    postData.body?.[0]?.children?.[0]?.text?.slice(0, 160) ||
    "A blog about pop culture, software development and poetry.";

  return {
    title: `${postData.title} | Opinions Too Unpopular to Monetise`,
    description,
    openGraph: {
      title: postData.title,
      description,
      images: postData.mainImage?.asset?.url
        ? [postData.mainImage.asset.url]
        : [],
    },
  };
}

const BlogPost = async ({ params }: Props) => {
  const { slug } = await params;
  return <BlogpostPage slug={slug} />;
};

export default BlogPost;
