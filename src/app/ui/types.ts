import type { SanityImageAsset } from "@/sanity/types";

export type SampleImageComponentProps = {
    value: SanityImageAsset;
    isInline: boolean;
  };

  export type Post = {
    title: string;
    body: string;
    publishedAt: string;
    slug: { current: string };
    categories: { title: string }[];
    mainImage: { asset: { url: string } };
  };