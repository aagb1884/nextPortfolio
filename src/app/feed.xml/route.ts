import RSS from 'rss';
import { createClient } from '@sanity/client';
import { Post } from '../ui/types';


const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID, 
  dataset: 'production',
  useCdn: false, 
});

export async function GET() {

  const posts = await sanityClient.fetch<Post[]>(`
    *[_type == "post"]{
      title,
      slug,
      body,
      publishedAt,
      categories[]->{
      title
      },
    }
  `
);

console.log(JSON.stringify(posts, null, 2));

const feed = new RSS({
    title: "Andrew Blair's Website",
    description: 'Software development, app development, poetry, journalism.',
    site_url: 'https://andrewblair.co.uk',
    feed_url: `https://andrewblair.co.uk/feed.xml/`,
    copyright: `${new Date().getFullYear()}`,
    language: 'en',
    pubDate: new Date(),
  });

  posts.forEach((post: Post) => {
    feed.item({
      title: post.title || 'Untitled Post',
      guid: `https://andrewblair.co.uk/blog/${post?.slug?.current || 'unknown'}`,
      url: `https://andrewblair.co.uk/blog/${post?.slug?.current || 'unknown'}`,
      date: post.publishedAt || new Date().toISOString(),
      description: post?.body?.[0]?.children?.[0]?.text || 'No description available.',
      author: 'Andrew Blair',
      categories: post.categories?.map((category) => category.title) || [],
    });
  });
  

  return new Response(feed.xml({ indent: true }), {
        headers: {
          'Content-Type': 'application/atom+xml; charset=utf-8',
        },
      });
  }