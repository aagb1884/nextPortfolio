 type ImageValue = {
    width: number;
    height: number;
    alt?: string;
    asset: { url: string };
  };

  export type SampleImageComponentProps = {
    value: ImageValue;
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