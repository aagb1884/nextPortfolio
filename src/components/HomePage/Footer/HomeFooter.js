"use client";
import ExternalLinkImage from "@/app/ui/ExternalLink";
import styles from "../../../app/styles/footer.module.css";
import Link from "next/link";
import KoFiLink from "@/app/ui/KoFi";
import createClient from "../../../app/blog/blog_components/client";
import React, { useEffect, useState } from "react";

const HomeFooter = ({ goToContactForm, goToTab, contact, tabs }) => {
  const [allPostsData, setAllPosts] = useState([]);
  //   const [showNav, setShowNav] = useState(false)

  // Fetch posts
  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "post"]{
              title,
              slug,
              publishedAt,
            }`
      )
      .then((data) => {
        const sortedPosts = data
          .sort(
            (a, b) =>
              new Date(b.publishedAt).valueOf() -
              new Date(a.publishedAt).valueOf()
          )
          .slice(0, 3);
        setAllPosts(sortedPosts);
      })
      .catch(console.error);
  }, []);

  const blogLinks = allPostsData.map((post) => (
    <ul className={styles.blogClmLinks} key={post.slug.current}>
      <li>
        <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
      </li>
    </ul>
  ));

  // const showHide = showNav ? 'Hide Nav' : 'Show Nav'

  return (
    <nav className={styles.homeFooter}>
      {/* <button className={styles.showHideBtn}
        onClick={() => {setShowNav(!showNav)}}>{showHide}</button>
        {showNav && ( 
            <> */}
      <div className={styles.rowOfNavColumns}>
        <div className={styles.homeClm}>
          <Link href="/">Home</Link>
          <br />
          <ul className={styles.homeClmLinks}>
            <li
              onClick={() => {
                goToTab(tabs, "tab1");
              }}
            >
              Software Development
            </li>
            <li
              onClick={() => {
                goToTab(tabs, "tab2");
              }}
            >
              Freelance Writing
            </li>
            <li
              onClick={() => {
                goToTab(tabs, "tab3");
              }}
            >
              Poetry/Spoken Word
            </li>
            <li
              onClick={() => {
                goToContactForm(contact);
              }}
            >
              Contact Form
            </li>
          </ul>
        </div>

        <div className={styles.appsClms}>
          <Link href="/apps">Apps</Link>
          <br />
          <div className={styles.appClmRow}>
            <ul className={styles.appsClmLinks1}>
              <li>
                <Link href="/apps/big-finish-generator">
                  Big Finish Boxset Generator
                </Link>
              </li>
              <li>
                <Link href="/apps/light">Doctor Who Game Page</Link>
              </li>
              <li>
                <Link href="/apps/eurovision-bingo">Eurovision Bingo</Link>
              </li>
              <li>
                <Link href="/apps/poetremixer">PoetRemixer Tool</Link>
              </li>
              <li>
                <Link href="/apps/drwhoquiz">Doctor Who Quizzes</Link>
              </li>
            </ul>
            <ul className={styles.appsClmLinks2}>
              <li>
                <Link href="/apps/rap-name-generator">Rap Name Generator</Link>
              </li>
              <li>
                <Link href="/apps/sci-fi-name-generator">
                  Science Fiction Name Generator
                </Link>
              </li>
              {/* <li>
                <Link href="/apps/barlow">Setting the Gary Bar Low</Link>
            </li> */}
              <li>
                <Link href="/apps/wesley-snopes">Wesley Snopes</Link>
              </li>
              <li>
                <Link href="https://scottish-football-simulators.co.uk/">
                  Scottish Football Simulators <ExternalLinkImage />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.blogClm}>
          <Link
            href={{
              pathname: "/blog",
              query: {
                state: {
                  goToContactForm,
                  goToTab,
                  contact,
                  tabs,
                },
              },
            }}
          >
            Blog
          </Link>
          {blogLinks}
          <Link href="/credits">Credits</Link>
        </div>
      </div>
      <KoFiLink />
    </nav>
  );
};

export default HomeFooter;
