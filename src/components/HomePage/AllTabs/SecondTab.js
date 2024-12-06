import React from "react";
import Image from "next/image";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const images = [
  '/images/slideshow/lotr_fandom.png',
  '/images/slideshow/inside_out_review.png',
  '/images/slideshow/drwho_adams.png',
  '/images/slideshow/why_does_the_empire_keep_building_deathstars.png',
  '/images/slideshow/yonderland_interviews.png',
  '/images/slideshow/james_mcavoy_interview.png',
  '/images/slideshow/top_50_arseholes.png',
  '/images/slideshow/yr_heroes_r_terrible.png',
];


const SecondTab = () => {
  return (
    <section className={styles.SecondTab}>
      <summary>
      <p>I began blogging about <i>Doctor Who</i> around 2008 to get into the habit of writing regularly, and then submitted work elsewhere.</p>
      <p>Since then I've covered film and TV festivals, filing reviews and interviews with actors, directors, writers and artists.</p>
      </summary>
      <br />
      <section className={styles.project}>
      <h2>Published Works</h2>
      <br />
      <ul className={styles.projectDescription}>
        <li>My articles at <a href="https://www.denofgeek.com/author/andrew-blair/">Den of Geek <ExternalLinkImage/></a> (2011 - Present Day)</li>
        <li>My articles at <a href="https://cultbox.co.uk/author/andrew-blair">Cultbox <ExternalLinkImage/></a> (2013 - 2019)</li>
        <li>Movie Geek: The Den of Geek Guide to the Movieverse, 2017 (Cassell) <a href="https://www.octopusbooks.co.uk/titles/den-of-geek/movie-geek/9781844039357/">[Buy Here <ExternalLinkImage/>]</a></li>
      </ul>
      </section>
      <br />
      <div className={styles.centeredDiv}>
      <div className={styles.slideContainer}>
        <Zoom scale={0.4}>
          
          {
            images.map((each, index) => <Image key={index} src={each} width={600} height={400} alt={`Slide ${index + 1}`}/>)
          }
        </Zoom>
      </div>
      </div>
    </section>
  );
};
export default SecondTab;
