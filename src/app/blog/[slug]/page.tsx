'use client'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import createClient from '../blog_components/client';
import BlogNav from '../blog_components/blog-nav';
import styles from '../../blog.module.css';
import { PortableText } from '@portabletext/react';
import {getImageDimensions} from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'

const Post = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    createClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        categories[]->
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div className={styles.blogLoad}>Loading...</div>;

  const SampleImageComponent = ({value, isInline}) => {
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlBuilder(createClient)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',
  
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
  }
  const components = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  }

  console.log(postData.body)

  const categories = postData.categories.map((category => `${category.title}; `))
  
  return (
    <div className={styles.blogpostContainer}>

      <div>
        <h1 className={styles.blogpostTitle}>{postData.title}</h1>
      </div>
        <div></div>
      <div className={styles.blogpostHeaderContainer}>
      <BlogNav />
      <img 
      src={postData.mainImage.asset.url} 
      alt="blog-header-image"
      id={styles.blogpostHeaderImageWide} />
      </div>
      <div className={styles.blogpostContent}> 
      <p className={styles.blogpostDate}>Published on: {postData.publishedAt.split('').slice(0, 10).join('')}</p>
      <p className={styles.blogpostCategories}>Categories: {categories}</p>
      
      <PortableText
          value={postData.body}
          components={components}
        />
      </div>
      {/* <HomeFooter 
           goToContactForm={goToContactForm}
           goToTab={goToTab}  
           contact={contact}
           tabs={tabs}
           /> */}
    </div>
  );
}

export default Post