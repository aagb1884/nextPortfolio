import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/whoQuiz.module.css";
import { roundBtn } from "../../data/round-btns";

type rndBtnProps = {
  roundButtons: roundBtn[] | undefined;
  setVisibleQuizzes: (x: any) => void;
  mobile: boolean;
};
const RoundButtons = ({
  roundButtons,
  setVisibleQuizzes,
  mobile,
}: rndBtnProps) => {
  const btnMap = roundButtons?.map((round) => {
    return (
      <div key={round.style} className={`styles.${round.style}`}>
        <Link
          href={`/apps/drwhoquiz/${round.link}`}
          className={styles.roundButton}
        >
          <Image
            src={`${round.src}`}
            alt={`${round.alt}`}
            width={150}
            height={100}
            className={styles.buttonImage}
          />
          <div className={styles.buttonText}>{round.text}</div>
        </Link>
      </div>
    );
  });
  return (
    <section className={styles.roundButtonsComponent}>
      {btnMap}
      {mobile && (
        <div className={styles.seeMore}>
          <button
            id="visible"
            className={styles.skipBtn}
            onClick={() => {
              setVisibleQuizzes((prev: number) => prev + 10);
            }}
          >
            See More Quizzes
          </button>
        </div>
      )}
    </section>
  );
};

export default RoundButtons;
