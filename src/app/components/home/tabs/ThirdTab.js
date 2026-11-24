import React from "react";
import Podcasting from "@/app/components/home/tabs/Poetry/Podcasting";
import PublishedWorks from "@/app/components/home/tabs/Poetry/PublishedWorks";
import LiveEvents from "@/app/components/home/tabs/Poetry/LiveEvents";
import styles from "@/app/styles/tabs.module.css";
import ExternalLink from "@/app/components/ExternalLink";

const ThirdTab = () => {
  return (
    <section className={styles.ThirdTab}>
      <summary>
        <p>
          I started writing and performing poetry around 2012, and am regularly
          published across the UK.
        </p>
        <p>
          I&apos;m on the&nbsp;
          <ExternalLink
            href="https://www.scottishbooktrust.com/authors/andrew-blair"
            text="Scottish Book Trust's Live Literature Author Directory"
          />
          .
        </p>
        <p>
          If you want to book me an author event (I can do readings and
          workshops on poetry, writing and podcasting) visit their website to
          look into funding options.
        </p>
        <p>
          There&apos;s a list of projects, events and publications I&apos;ve
          been involved in below.
        </p>
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
