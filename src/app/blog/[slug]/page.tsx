import BlogpostPage from "./blogpost_page"

export const metadata = {
  title: 'Opinions Too Unpopular to Monetise - a blog',
  openGraph: {
    title: 'Opinions Too Unpopular to Monetise',
    description: 'A blog about pop culture, software development and poetry.'
  },
}

const BlogPost = () => {
 
  return (
    <BlogpostPage />
  )
}

export default BlogPost