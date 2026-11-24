import ExternalLink from "@/components/ExternalLink";
import styles from "../../../../../app/styles/tabs.module.css";

const Journals = () => {
  return (
    <section>
      <h3 className={styles.publishedWorksh3}>
        <u>Journals</u>
      </h3>
      <ul className={styles.journals}>
        <li>Valve #3 [Out of Print]</li>
        <li>Valve #4 [Out of Print]</li>
        <li>
          Gutter #13{" "}
          <ExternalLink
            href="https://www.guttermag.co.uk/getgutter/gutter-13"
            text="[Buy Here]"
          />
        </li>
        <li>
          Gutter #14{" "}
          <ExternalLink
            href="https://www.guttermag.co.uk/getgutter/gutter-14"
            text="[Buy Here]"
          />
        </li>
        <li>Gutter #15 [Out of Print]</li>
        <li>
          Gutter #17{" "}
          <ExternalLink
            href="https://www.guttermag.co.uk/getgutter/gutter-17"
            text="[Buy Here]"
          />
        </li>
        <li>
          Gutter #20{" "}
          <ExternalLink
            href="https://www.guttermag.co.uk/getgutter/09z+xga28buddvcfjmby7z8kh0xz6e0"
            text="[Buy Here]"
          />
        </li>
        <li>Gutter #22 [Out of Print]</li>
        <li>404 Ink #3 [Out of Print]</li>
      </ul>
      <br />
    </section>
  );
};

export default Journals;
