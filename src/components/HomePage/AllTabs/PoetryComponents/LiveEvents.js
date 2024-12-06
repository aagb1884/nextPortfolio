import React, { useState } from 'react';
import Minimise from '../../Minimise';
import styles from '../../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';

const LiveEvents = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
    return ( 
      <section className={styles.project}>
      <h2 onClick={toggleVisibility}>Live Events</h2>
      {isVisible && 
        <div className={styles.projectDescription}>
          <br />
      <ul className={styles.liveEventsList}>
        <li>Auld Enemies - July 2014 – Poetry (Collaboration with <a href="https://www.kirstennorrie.com/">McGillivray <ExternalLinkImage/></a>)<br />
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w8Pz-z8z8_w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></li>
        <br />
        <li>Knife Whimsy - PBH Free Fringe 2014</li>
        <li>is this poetry? - PBH Free Fringe 2015</li>
        <li>McCleary and Blair Panda to the Audience (A Show About Death) - PBH Free Fringe 2016</li>
        <li>The R-Pattz Facttz - Hidden Door 2017</li>
        <li>The Ambassador's Reception - Poetry as F*ck/Interrobang 2017, Hidden Door 2018</li>
        <li>Necessarily Looking Backwards - Stanza 2018 <a href="https://stanzapoetry.org/archive/necessarily-looking-backward/">[Read More<ExternalLinkImage/>]</a></li>
        <li>Beyond Any Curtain - Stanza 2021 - 22 <a href="https://artarsenal.in.ua/en/laboratory/proekt/ukraine-scotland-collaborative-literary-project/">[Read More<ExternalLinkImage/>]</a></li>
      </ul>
      <Minimise toggleVisibility={toggleVisibility} />
      </div>
}    
        </section>
     );
}
 
export default LiveEvents;