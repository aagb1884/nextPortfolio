import React from "react";

import EurovisionBingo from "../AllTabs/Projects/EurovisionBingo";
import AllApps from "../AllTabs/Projects/AllApps";
import ScottishFootballSims from "../AllTabs/Projects/ScottishFootballSims";
import PoetRemixer from "../AllTabs/Projects/PoetRemixer";
import styles from "../../../app/styles/tabs.module.css";

const FirstTab = () => {
  return (
    <section className={styles.FirstTab}>
      <summary>
        <p>
          I retrained as a software developer in 2023, applying for an intensive
          16 week development course at CodeClan.
        </p>
        <p>
          I spent my time after tthe course looking for work and developing my
          own projects, building this site to host them.
        </p>
        <p>
          My preference is for front end React coding, CSS, accessibility and
          design (but I&apos;m happy working anywhere across the stack).
        </p>
        <p> You can see a selection of my projects below.</p>
      </summary>
      <br />
      <aside>Click on project heading to see/hide further info.</aside>
      <br />
      <EurovisionBingo />
      <br />
      <AllApps />
      <br />
      <ScottishFootballSims />
      <br />
      <PoetRemixer />
    </section>
  );
};
export default FirstTab;
