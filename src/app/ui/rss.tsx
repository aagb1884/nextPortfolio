import Link from 'next/link';
import Image from 'next/image';
import styles from '../../app/styles/blog.module.css'
import blogtrotter from '../../../public/images/blogtrottr-button-91x17px.gif'
import rssIcon from '../../../public/images/icons8-rss-48.png'

export default function RSSFEED() {
  return (
    <div className={styles.rssDiv}>
      <h4>Subscribe</h4>
      <Link href="/feed.xml/" target="_blank" title='RSS Feed' rel="noopener noreferrer">
      <Image src={rssIcon} id={styles.rssIcon} height={45} width={45} alt='RSS Feed' /></Link>
      <Link href='https://blogtrottr.com/?subscribe=https://andrewblair.co.uk/feed.xml' title='Get this feed delivered by email'>
      <Image src={blogtrotter} id={styles.blogtrotterIcon} height={17} width={91} alt='Blogtrottr' /></Link>
    </div>
  );
}
