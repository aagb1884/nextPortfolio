import React from "react";
import Podcasting from "../AllTabs/PoetryComponents/Podcasting";
import PublishedWorks from "../AllTabs/PoetryComponents/PublishedWorks";
import LiveEvents from "../AllTabs/PoetryComponents/LiveEvents";
import styles from '../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const ThirdTab = () => {
  return (
    <section className={styles.ThirdTab}>
      <summary>
      <p>I started writing and performing poetry around 2012, and am regularly published across the UK.</p> 
      <p>I'm on the <a href="https://www.scottishbooktrust.com/authors/andrew-blair">Scottish Book Trust's Live Literature Author Directory <ExternalLinkImage/></a>.</p>
      <p>If you want to book me an author event (I can do readings and workshops on poetry, writing and podcasting) visit their website to look into funding options.</p>
      <p>There's a list of projects, events and publications I've been involved in below.</p>
      </summary>
      <br />
      <aside>Click on project heading to see/hide further info.</aside>
      <br />
      <Podcasting />
      <br />
     <PublishedWorks />
     <br />
     <LiveEvents />
    </section>
  );
};
export default ThirdTab;
