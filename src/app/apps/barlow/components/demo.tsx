interface modalProps {
  setDemoModal: (filterTerm: boolean) => void;
}

import styles from "@/app/styles/barlow.module.css";

const DemoModal: React.FC<modalProps> = ({ setDemoModal }) => {
  return (
    <div className={styles.startModalWrapper}>
      <div className={styles.startModal}>
        <h2 className={styles.sModalTxt}>What&apos;s in the full version?</h2>
        <p className={styles.sModalTxt}>
          You get 60 seconds per <i>guess</i>, not 60 seconds per game.
        </p>
        <p className={styles.sModalTxt}>Works offline.</p>
        <p className={styles.sModalTxt}>High Scores.</p>
        <p className={styles.sModalTxt}>Original music.</p>
        <button
          className={styles.barlowBtn}
          onClick={() => setDemoModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DemoModal;
