import React, { useState } from 'react';
import Minimise from '../../Minimise';
import styles from '../../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';
import Link from 'next/link';

const Podcasting = () => {
const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return ( 
    <section className={styles.project}>
      <h2 onClick={toggleVisibility}>Podcasting</h2>
      {isVisible && 
      <div className={styles.projectDescription}>
      <p>I co-produced the <i>Poetry as F*ck</i> podcast with <Link href="https://rossmccleary.wordpress.com/">Ross McCleary <ExternalLinkImage/></Link> between 2015 and 2020.</p>
      <br />
      <p>This was a monthly spoken word podcast that comprised of three different formats: <a href="https://www.theskinny.co.uk/festivals/edinburgh-fringe/comedy/poets-against-humanity-comedy-spotlight"><i>Poets Against Humanity <ExternalLinkImage/></i></a>  - a Creative Commons remix of &quot;Cards Against Humanity&quot; where we wrote fresh cards for each show and asked poets to ruin each others&apos; work with them. Secondly we had <i>Lies, Dreaming</i> which was a theme-driven submission show, where we asked people to send in their work on a certain theme (such as &quot;A piano, falling&quot; or &quot;Tim Henman&quot;).
      Thirdly we had <i>Eight Poems That, If You Had To Be Trapped In Some Way For a Prolonged Period of Time With Little Hope Of Rescue</i>, which was essentially <i>Desert Island Discs</i> but with poems.</p>
      <br />
      <p>We also produced podcasts where we asked poets and performers to produce either a feature set or a longform piece of spoken word. You can buy these <a href="https://poetryasfuck.bandcamp.com/">here <ExternalLinkImage/></a>.</p>
      <br />
      <p>In 2020 we stopped making the podcast due to time and budget constraints. The whole project was archived at the British Library but you can listen to
      four episodes of it <a href="https://soundcloud.com/poetryasfuck">here. <ExternalLinkImage/></a></p>
      <br />
      <p>In 2021/22 I was Writer-in-Residence at <a href="https://blogs.glowscotland.org.uk/nl/olhsmotherwell/">Our Lady&apos;s High School <ExternalLinkImage/></a> in Motherwell, working with an S3 class on podasting, sound design, audio storytelling and freewriting. This was financed through Scottish Book Trust&apos;s <a href="https://www.scottishbooktrust.com/writing-and-authors/live-literature/school-residencies">Schools Residency Programme <ExternalLinkImage/></a>.</p>
      
      <Minimise toggleVisibility={toggleVisibility} />
      </div>
}
      
      </section>
  )
}
    
 
export default Podcasting;