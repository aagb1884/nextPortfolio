interface modalProps {
  setStartModal: (filterTerm: boolean) => void;
  playHum: () => void;
}

import styles from "@/app/styles/randomiser.module.css";
import KoFiLink from "@/app/ui/KoFi";

const StartModal: React.FC<modalProps> = ({ setStartModal, playHum }) => {
  const begin = () => {
    setStartModal(false);
    playHum();
  };

  return (
    <div className={styles.startModalWrapper}>
      <div className={styles.startModal}>
        <h1 className={styles.modalTitle}>THE RANDOMISER</h1>
        <h2 className={styles.sModalTxt}>How to Use</h2>
        <p className={styles.sModalTxt}>
          If you aren&apos;t sure what Doctor Who story to watch...
        </p>
        <p className={styles.sModalTxt}>
          There&apos;s a red lever on the TARDIS console.
        </p>
        <p className={styles.sModalTxt}>
          If you pull it, you&apos;ll get a random Doctor Who story.
        </p>

        <p className={styles.sModalTxt}>You can watch it if you want.</p>
        <p className={styles.sModalTxt}>
          If you&apos;re in the UK, most Doctor Who stories are on BBC I-Player.
        </p>
        <br />
        <p className={styles.sModalTxt}>
          Please consider donating to help me cover my costs.
        </p>
        <p className={styles.sModalStr}>↓↓</p>
        <KoFiLink />
        <button className={styles.startBtn} onClick={begin}>
          Let's Get Random
        </button>
      </div>
    </div>
  );
};

export default StartModal;
