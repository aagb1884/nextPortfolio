import BlogPage from './blog_page';

export const metadata = {
  title: 'Opinions Too Unpopular to Monetise - a blog',
  openGraph: {
    title: 'Opinions Too Unpopular to Monetise',
    description: 'A blog about pop culture, poetry, software development and Doctor Who.'
  },
}

export default function Blog() {

  return (
    <div>
      <BlogPage />
    </div>
  );
}
