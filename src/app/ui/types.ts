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

  export interface Category  {
    title: string;
    }
    
    export interface PostChild {
      text: string;
      _type: string;
      _key: string;
      marks?: string[];
    }

    export interface PostBodyItem {
      children: PostChild[];
      _type: string;
      _key: string;
    }
  export interface Post {
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: {
        asset: {
        url: string;
        };
    };
    body: PostBodyItem[]; 
    name?: string;
    categories?: Category[];
    }

  export type QueryResult = {
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: {
        asset: { url: string };
    };
    body: PostBodyItem[]; 
    name?: string;
    categories: { title: string }[];
    };

  