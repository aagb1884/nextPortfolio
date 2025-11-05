"use client";
import styles from "@/app/styles/whoQuiz.module.css";
import { Question, DeathImages } from "../data/questions";

interface GoodgeProps {
  setModalOpen: (filterTerm: boolean) => void;
  setGoodgeGuess: (guess: boolean) => void;
  randomDeathImage: (qs: Question[]) => void;
  setShowScore: (show: boolean) => void;
}

const GoodgeChoiceModal: React.FC<GoodgeProps> = ({
  setModalOpen,
  setGoodgeGuess,
  randomDeathImage,
  setShowScore,
}) => {
  function isGoodge() {
    setGoodgeGuess(true);
    randomDeathImage(DeathImages);
    setShowScore(false);
     setModalOpen(false);
  }

  function isNotGoodge() {
    setGoodgeGuess(false);
    randomDeathImage(DeathImages);
    setShowScore(false);
    setModalOpen(false);
  }

  return (
    <div className={styles.startModalWrapper}>
      <div className={styles.startModal}>
        <h2 className={styles.sModalHTxt}>Is It Goodge?</h2>
        <p className={styles.sModalTxt}>
          At the end of this round, you will be shown a picture.
        </p>
        <p className={styles.sModalTxt}>
          The clarity of the picture will depend on how many questions you get
          right in this round.
        </p>
        <p className={styles.sModalTxt}>
          You get points for guessing which story the picture is from, BUT...
        </p>
        <p className={styles.sModalTxt}>
          If you play your &lsquo;IT&apos;S GOODGE&lsquo; card, and it IS GOODGE
          you could double your points...
        </p>
        <p className={styles.sModalTxt}>
          Or, in the event the picture IS NOT GOODGE, halve them.
        </p>
        <p className={styles.sModalTxt}>MAKE YOUR CHOICE</p>
        <button className={styles.btn} onClick={() => isGoodge()}>
          Yes, it&apos;s Goodge
        </button>
        <button className={styles.btn} onClick={() => isNotGoodge()}>
          No, it is not Goodge
        </button>
      </div>
    </div>
  );
};

export default GoodgeChoiceModal;
