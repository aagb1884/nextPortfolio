import { useState } from "react";
import Link from "next/link";
import Minimise from "../../Minimise";
import styles from "../../../../app/styles/tabs.module.css";
import ExternalLink from "@/components/ExternalLink";

const PoetRemixer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className={styles.project}>
      <h2 onClick={toggleVisibility}>PoetRemixer Tool</h2>
      {isVisible && (
        <div className={styles.projectDescription}>
          <br />
          <p>
            A text manipulation app, designed to make remixing poems easier.
          </p>
          <p>
            Initially built to simply break texts down into individual words or
            letters, I added more functions to it so the user can manipulate the
            text in different ways.
          </p>
          <br />

          <h4 className={styles.techStack}>The Tech Stack</h4>

          <ul>
            <li>React JS</li>
            <li>CSS</li>
          </ul>
          <br />
          <ExternalLink
            href="https://github.com/aagb1884/poetrEMIXERtool"
            text="Github Repo"
          />
          <br />
          <Link href="/apps/poetremixer">Link</Link>
          <Minimise toggleVisibility={toggleVisibility} />
        </div>
      )}
    </section>
  );
};

export default PoetRemixer;
