export type SampleImageComponentProps = {
    value: { alt: string };
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