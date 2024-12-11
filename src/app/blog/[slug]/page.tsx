'use client'
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import createClient from '../blog_components/client';
import BlogNav from '../blog_components/blog-nav';
import LoadingPage from '@/app/ui/loading';
import styles from '../../styles/blog.module.css';
import { PortableText } from '@portabletext/react';
import {getImageDimensions} from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url';
import HomeFooter from '@/components/HomePage/Footer/HomeFooter';
import { useGlobalState } from '@/app/context/GlobalStateContext';

const Post = () => {
  const { goToContactForm, goToTab, contact, tabs } = useGlobalState();
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

  if (!postData) return <LoadingPage />;

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
        alt={value.alt || 'blog-image'}
        loading="lazy"
        style={{
          display: isInline ? 'inline-block' : 'block',
          marginLeft: 'auto', 
          marginRight: 'auto', 
          aspectRatio: width / height,
        }}
      />
    )
  }
  const components = {
    types: {
      image: SampleImageComponent,
    },
  }


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
        <div>
      <PortableText
          value={postData.body}
          components={components}
        />
        </div>
      </div>
      <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
    </div>
  );
}

export default Post