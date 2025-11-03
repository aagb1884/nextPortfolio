"use client";
import styles from "@/app/styles/whoQuiz.module.css";
import { Question, DeathImages } from "../data/questions";

interface GoochProps {
  setModalOpen: (filterTerm: boolean) => void;
  setGoochGuess: (guess: boolean) => void;
  questions: Question[];
  set10Questions: (qs: Question[]) => void;
  randomDeathImage: (qs: Question[]) => void;
  setShowScore: (show: boolean) => void;
}

const GoochChoiceModal: React.FC<GoochProps> = ({
  setModalOpen,
  setGoochGuess,
  questions,
  set10Questions,
  randomDeathImage,
  setShowScore,
}) => {
    
  function isGooch() {
    setModalOpen(false);
    setGoochGuess(true);
    set10Questions(questions);
    randomDeathImage(DeathImages);
    setShowScore(false)
  }

  function isNotGooch() {
    setModalOpen(false);
    setGoochGuess(false);
    set10Questions(questions);
    randomDeathImage(DeathImages);
    setShowScore(false);
  }

  return (
    <div className={styles.startModalWrapper}>
      <div className={styles.startModal}>
        <h2 className={styles.sModalHTxt}>Is It Gooch?</h2>
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
          If you play your &lsquo;IT&apos;S GOOCH&lsquo; card, and it IS GOOCH
          you could double your points...
        </p>
        <p className={styles.sModalTxt}>
          Or, in the event the picture IS NOT GOOCH, halve them.
        </p>
        <p className={styles.sModalTxt}>MAKE YOUR CHOICE</p>
        <button className={styles.btn} onClick={() => isGooch()}>
          Yes, it&apos;s Gooch
        </button>
        <button className={styles.btn} onClick={() => isNotGooch()}>
          No, it is not Gooch
        </button>
      </div>
    </div>
  );
};

export default GoochChoiceModal;
