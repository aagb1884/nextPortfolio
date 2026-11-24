import ExternalLink from "@/components/ExternalLink";
import styles from "../../../../../app/styles/tabs.module.css";

const CollectionsPamphlets = () => {
  return (
    <section>
      <h3 className={styles.publishedWorksh3}>
        <u>Collections/Pamphlets</u>
      </h3>
      <ul className={styles.collections}>
        <li>
          <i>An Intense Young Man at An Open Mic Night</i>, 2017 (House of Three
          Press) [Out of Print]
        </li>
        <li>
          <i>The R-Pattz Facttz 2020</i>, 2020 (Speculative Books) [Out of
          Print]{" "}
          <ExternalLink
            href="https://andrewblair.bigcartel.com/product/the-r-pattz-facttz-2020"
            text="[Buy Here]"
          />
          <br />
          <ExternalLink
            href="https://emmalee1.wordpress.com/2020/11/04/the-r-pattz-facttz-andrew-blair-speculative-books-book-review/"
            text="Emma Lee Review"
          />
          <br />
          <ExternalLink
            href="https://www.sphinxreview.co.uk/index.php/opoi-reviews-2020/andrew-blair-the-r-pattz-facttz"
            text="OPOI Review"
          />
        </li>
        <li>
          <i>An Intense Young Man at An Open Mic Night</i>, 2024 (ebook,
          Self-Published)&nbsp;
          <ExternalLink
            href="https://ko-fi.com/s/582ed13a4b"
            text="[Buy Here]"
          />
          <br />
        </li>
        <li>
          <i>The R-Pattz Facttz 2020</i>, 2025 (ebook, Self-Published)&nbsp;
          <ExternalLink
            href="https://ko-fi.com/s/096171bd41"
            text="[Buy Here]"
          />
          <br />
        </li>
        <li>
          <i>polblar Tmolkop</i>, 2026 (The Braag)&nbsp;
          <ExternalLink
            href="https://thebraag.co/product/polblar-tmolkop/"
            text="[Buy Here]"
          />
          <br />
        </li>
      </ul>
    </section>
  );
};

export default CollectionsPamphlets;
