import RSS from 'rss';
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID, 
  dataset: 'production',
  useCdn: false, 
});

export async function GET() {

  const posts = await sanityClient.fetch(`
    *[_type == "post"]{
      title,
      slug,
      body,
      publishedAt,
      categories[]->{
        title
      }
    }
  `);

const feed = new RSS({
    title: "Andrew Blair's Website",
    description: 'Software development, app development, poetry, journalism.',
    site_url: 'https://localhost:3000',
    feed_url: `https://localhost:3000/feed.xml`,
    // site_url: 'https://andrewblair.co.uk',
    // feed_url: `https://andrewblair.co.uk/feed.xml/route`,
    copyright: `${new Date().getFullYear()}`,
    language: 'en',
    pubDate: new Date(),
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      guid: `https://andrewblair.co.uk/blog/${post.slug.current}`,
      url: `https://andrewblair.co.uk/blog/${post.slug.current}`,
      date: post.publishedAt,
      description: post.body[0]?.children[0]?.text, 
      author: 'Andrew Blair', 
      categories: post.categories?.map(category => category.title) || [],
    });
  });

  return new Response(feed.xml({ indent: true }), {
        headers: {
          'Content-Type': 'application/atom+xml; charset=utf-8',
        },
      });
  }