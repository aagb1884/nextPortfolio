import React, { useState } from "react";
import Minimise from "@/app/ui/Minimise";
import styles from "@/app/styles/tabs.module.css";
import ExternalLink from "@/app/components/ExternalLink";

const Podcasting = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={styles.project}>
      <h2 onClick={toggleVisibility}>Podcasting</h2>
      {isVisible && (
        <div className={styles.projectDescription}>
          <p>
            I co-produced the &nbsp;<i>Poetry as F*ck</i>&nbsp; podcast
            with&nbsp;
            <ExternalLink
              href="https://rossmccleary.wordpress.com/"
              text="Ross McCleary"
            />
            &nbsp; between 2015 and 2020.
          </p>
          <br />
          <p>
            This was a monthly spoken word podcast that comprised of three
            different formats:&nbsp;
            <ExternalLink
              href="https://www.theskinny.co.uk/festivals/edinburgh-fringe/comedy/poets-against-humanity-comedy-spotlight"
              text="Poets Against Humanity"
            />
            &nbsp; - a Creative Commons remix of &quot;Cards Against
            Humanity&quot; where we wrote fresh cards for each show and asked
            poets to ruin each others&apos; work with them. Secondly we had{" "}
            <i>Lies, Dreaming</i> which was a theme-driven submission show,
            where we asked people to send in their work on a certain theme (such
            as &quot;A piano, falling&quot; or &quot;Tim Henman&quot;). Thirdly
            we had&nbsp;
            <i>
              Eight Poems That, If You Had To Be Trapped In Some Way For a
              Prolonged Period of Time With Little Hope Of Rescue
            </i>
            , which was essentially <i>Desert Island Discs</i> but with poems.
          </p>
          <br />
          <p>
            We also produced podcasts where we asked poets and performers to
            produce either a feature set or a longform piece of spoken word. You
            can buy these&nbsp;
            <ExternalLink
              href="https://poetryasfuck.bandcamp.com/"
              text="here"
            />
            .
          </p>
          <br />
          <p>
            In 2020 we stopped making the podcast due to time and budget
            constraints. The whole project was archived at the British Library
            but you can listen to four episodes of it&nbsp;
            <ExternalLink
              href="https://soundcloud.com/poetryasfuck"
              text="here"
            />
            .
          </p>
          <br />
          <p>
            In 2021/22 I was Writer-in-Residence at&nbsp;
            <ExternalLink
              href="https://blogs.glowscotland.org.uk/nl/olhsmotherwell/"
              text="Our Lady's High School"
            />
            &nbsp;in Motherwell, working with an S3 class on podasting, sound
            design, audio storytelling and freewriting. This was financed
            through Scottish Book Trust&apos;s&nbsp;
            <ExternalLink
              href="https://www.scottishbooktrust.com/writing-and-authors/live-literature/school-residencies"
              text="Schools Residency Programme"
            />
            .
          </p>

          <Minimise toggleVisibility={toggleVisibility} />
        </div>
      )}
    </section>
  );
};

export default Podcasting;
