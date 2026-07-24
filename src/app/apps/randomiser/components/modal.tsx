interface modalProps {
  setStartModal: (filterTerm: boolean) => void;
  playHum: () => void;
}

import styles from "@/app/styles/randomiser.module.css";
import Link from "next/link";

const StartModal: React.FC<modalProps> = ({ setStartModal, playHum }) => {
  const begin = () => {
    setStartModal(false);
    playHum();
  };

  return (
    <div className={styles.startModalWrapper} onClick={begin}>
      <div className={styles.outerModal}>
        <div className={styles.startModal} onClick={(e) => e.stopPropagation()}>
          <h1 className={styles.modalTitle}>THE RANDOMISER</h1>
          <h2 className={styles.sModalTxt}>
            If you aren&apos;t sure what Doctor Who story to watch...
          </h2>
          <p className={styles.sModalTxt}>
            There&apos;s a red lever on the TARDIS console. If you pull it,
            you&apos;ll get a random Doctor Who story.
          </p>
          <p className={styles.sModalTxt}>You can then watch it if you want.</p>
          <p className={styles.sModalTxt}>
            If you want to limit your search results, there are filter options.
          </p>
          <br />
          <ul>
            <li className={styles.sModalLi}>
              UK: most Doctor Who stories are on{" "}
              <Link href="https://www.bbc.co.uk/iplayer" target="_blank">
                BBC I-Player
              </Link>
              .
            </li>
            <li className={styles.sModalLi}>
              America: most 1963 - 1996 Doctor Who stories are on{" "}
              <Link href="https://www.britbox.com/" target="_blank">
                Britbox
              </Link>
              , 2005 - 2022 stories are on{" "}
              <Link href="https://www.amcplus.com/" target="_blank">
                AMC
              </Link>
              , and 2023 - 2025 stories are on{" "}
              <Link href="https://www.disneyplus.com/" target="_blank">
                Disney +
              </Link>
              .
            </li>
            <li className={styles.sModalLi}>
              Australia: most 1963 - 1996 Doctor Who stories are on{" "}
              <Link href="https://www.britbox.com/" target="_blank">
                Britbox
              </Link>{" "}
              and 2023 - 2025 stories are on{" "}
              <Link href="https://www.disneyplus.com/" target="_blank">
                Disney +
              </Link>
              .
            </li>
            <li className={styles.sModalLi}>
              The show is also available on physical media.
            </li>
          </ul>
          <br />
          <button className={styles.startBtn} onClick={begin}>
            Let&apos;s Get Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
