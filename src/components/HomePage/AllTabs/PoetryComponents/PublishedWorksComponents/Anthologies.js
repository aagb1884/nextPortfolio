import ExternalLink from "@/components/ExternalLink";
import styles from "../../../../../app/styles/tabs.module.css";

const Anthologies = () => {
  return (
    <section>
      <h3 className={styles.publishedWorksh3}>
        <u>Anthologies</u>
      </h3>
      <ul className={styles.anthologies}>
        <li>
          <i>Forty Voices Strong</i>, 2019 (Grayson Books)&nbsp; [Out of Print]
        </li>
        <li>
          <i>Umbrellas of Edinburgh</i>, 2020 (Shoreline of Infinity)&nbsp;
          <ExternalLink
            href="https://www.shorelineofinfinity.com/product/umbrellas-of-edinburgh/"
            text="[Buy Here]"
          />
        </li>
        <li>
          <i>The Last Song: Word for Frightened Rabbit</i>, 2023 (Broken Sleep
          Books)&nbsp;
          <ExternalLink
            href="https://www.brokensleepbooks.com/product-page/ed-aaron-kent-maria-sledmere-the-last-song-words-for-frightened-rabbit"
            text="[Buy Here]"
          />
        </li>
        <li>
          <i>Masculinity: an anthology of modern voices</i>, 2024 (Broken Sleep
          Books)&nbsp;
          <ExternalLink
            href="https://www.brokensleepbooks.com/product-page/masculinity-an-anthology-of-modern-voices"
            text="[Buy Here]"
          />
        </li>
        <li>
          <i>The Spec Book 2024</i>, 2024 (Speculative Books) [Out of Print]
        </li>
      </ul>
      <br />
    </section>
  );
};

export default Anthologies;
