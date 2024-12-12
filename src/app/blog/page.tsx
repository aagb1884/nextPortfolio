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
import type { Metadata } from 'next'

export default function Blog() {
  const { goToContactForm, goToTab, contact, tabs } = useGlobalState();
  const [allPostsData, setAllPosts] = useState(null);
  const [allCategories, setCategories] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');

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
        const sortedPosts = data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
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

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const metadata: Metadata = {
    title: "Andrew Blair's Blog",
    description: "Essays and articles about pop culture, poetry and software development.",
  };

  const filteredPosts = categoryFilter === 'All'
    ? allPostsData 
    : allPostsData?.filter((post: {}) =>
        post.categories.some((category) => category.title === categoryFilter)
      );

  return (
    <section className={styles.blogContainer}>
      <div className={styles.blogTitles}>
        <div className={styles.blogTitleAvatar}>
          <h2 className={styles.blogTitle}>OPINIONS TOO UNPOPULAR TO MONETISE</h2>
          <div className={styles.avatarContainer}>
            <Image src={avatar} id={styles.blogAvatar} alt='avatar' width={100}/>
            <div className={styles.blogAvatarImgText}>with Andrew Blair</div>
          </div>
        </div>
        <h3 className={styles.blogSubtitle}>brain + unclogged = blogged</h3>
      </div>

      <div className={styles.blogSearchFilter}>
        <CategorySelect
          handleCategoryFilter={handleCategoryFilter}
          allCategories={allCategories}
          allPostsData={allPostsData}
        />
      </div>

      <div className={styles.blogBody}>
        {/* Show filtered posts or "No posts found" message */}
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div className={styles.blogpostLink} key={post.slug.current}>
              <Link href={"/blog/" + post.slug.current}>
                <span className={styles.blogpostHrImgCr}>
                  <img
                    src={post.mainImage.asset.url}
                    alt="blogpost-header"
                    id={styles.blogpostHeaderImg}
                  />
                  <span>
                    <h2 className={styles.blogLinkText}>{post.title}</h2>
                  </span>
                </span>
              </Link>
              <div className={styles.blogpostInfo}>
                <p className={styles.blogPreview}>
                  {post.body[0].children[0].text.split("").slice(0, 200).join("")}...
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

      <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
    </section>
  );
}
