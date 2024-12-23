'use client'
import styles from '../styles/blog.module.css';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import createClient from './blog_components/client';
import avatar from '../../../public/images/avatar_ab.png';
import HomeFooter from '../../components/HomePage/Footer/HomeFooter';
import CategorySelect from './blog_components/category-select';
import { useGlobalState } from '@/app/context/GlobalStateContext';
import { Post, PostBodyItem, PostChild } from '@/app/ui/types';
// import RSSFEED from '../ui/rss';

const BlogPage = () => {
    const { goToContactForm, goToTab, contact, tabs } = useGlobalState();
  const [allPostsData, setAllPosts] = useState([])
  const [allCategories, setCategories] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState("");
  const [postsOnDisplay, setPostsonDisplay] = useState(6);

  // Fetch posts
  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          body,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          categories[]->,
        }`
      )
      .then((data) => {
        const sortedPosts = data.sort((a: { publishedAt: string }, b: { publishedAt: string }) => 
          new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf());
        setAllPosts(sortedPosts);
      })
      .catch(console.error);
  }, []);

  // Fetch all categories
  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "category"] {
          title,
        }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
  };
  
  //filter and search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.currentTarget.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    handleCategoryFilter('All')
  }

  const toLowerCaseSafe = (str: string | null | undefined) => (str ? str.toLowerCase() : '');

  const searchInPostBody = (postBody: PostBodyItem[], searchTerm: string): boolean => {
    const searchTermLower = toLowerCaseSafe(searchTerm);
    return postBody.some((item: PostBodyItem) => 
      item.children?.some((child: PostChild) => 
        toLowerCaseSafe(child.text).includes(searchTermLower)
      )
    );
  };

  let filteredPosts = allPostsData;
  if (allPostsData && searchTerm.length > 0 || categoryFilter !== 'All' || 
    (allPostsData && searchTerm.length > 0 && categoryFilter !== 'All' ))
    filteredPosts = allPostsData?.filter((post: Post) => post?.categories?.some((category) => {
      
      const searchTermLower = toLowerCaseSafe(searchTerm)

      const categoryMatch = categoryFilter === 'All' || categoryFilter === category.title
      const bodyMatch = searchInPostBody(post.body, searchTerm);
      return (
        categoryMatch && (toLowerCaseSafe(post.title).includes(searchTermLower) ||
        bodyMatch)
      )
    })
  )   

  const postList = filteredPosts ?  filteredPosts.slice(0, postsOnDisplay) : [];

  const hasMorePosts = filteredPosts?.length > 0 ? postsOnDisplay < filteredPosts.length : false;

  const handleShowMorePosts = () => {
    setPostsonDisplay(prevPostsOnDisplay => prevPostsOnDisplay + 6)
}

  return (
    <section className={styles.blogContainer}>
      <div className={styles.blogTitles}>
        <div className={styles.blogTitleAvatar}>
          <h2 className={styles.blogTitle}>OPINIONS TOO UNPOPULAR TO MONETISE</h2>
          <div className={styles.avatarContainer}>
            <Image src={avatar} id={styles.blogAvatar} alt='avatar' width={100}/>
            <div className={styles.blogAvatarImgText}>with Andrew Blair</div>
          </div>
          {/* <RSSFEED/> */}
        </div>
        <h3 className={styles.blogSubtitle}>brain + unclogged = blogged</h3>
      </div>

      <div className={styles.blogSearchFilter}>
        <CategorySelect
          handleCategoryFilter={handleCategoryFilter}
          allCategories={allCategories}
          allPostsData={allPostsData}
          currentCategory={categoryFilter}
        />
      </div>
      <div className={styles.blogSearchFunction}>
               <input  id={styles.search}
                placeholder="Search..." 
                onChange={handleSearch}
                type="text"
                name="searchTerm"
                value={searchTerm}/>
                <button onClick={clearSearch}>
                    Clear Search/Filter
                </button>
      </div>

      <div className={styles.blogBody}>
        {/* Show filtered posts or "No posts found" message */}
        {filteredPosts && filteredPosts.length > 0 ? (
          postList.map((post: Post) => (
            <div className={styles.blogpostLink} key={post.slug.current}>
              <Link href={"/blog/" + post.slug.current}>
                <span className={styles.blogpostHrImgCr}>
                  <img
                    src={post.mainImage.asset.url}
                    alt="blogpost-header"
                    id={styles.blogpostHeaderImg}
                    // width={200} height={150}
                  />
                  <span>
                    <h2 className={styles.blogLinkText}>{post.title}</h2>
                  </span>
                </span>
              </Link>
              <div className={styles.blogpostInfo}>
                <p className={styles.blogPreview}>
                  {post.body[0]._type === 'block' ? 
                  post.body[0].children[0].text.split("").slice(0, 200).join("") : 
                  post.body[1].children[0].text.split("").slice(0, 200).join("")}
                </p>
                <p className={styles.blogDate}>
                  {post.publishedAt.split("").slice(0, 10).join("")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Posts loading...</p>
        )}
       
      </div>
      <div className={styles.morePostBtnDiv}>
        {hasMorePosts && (
                <button id={styles.morePostBtn} onClick={handleShowMorePosts}>Load More</button>
            )}
          </div>
      <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
    </section>
  );
}

 
export default BlogPage;