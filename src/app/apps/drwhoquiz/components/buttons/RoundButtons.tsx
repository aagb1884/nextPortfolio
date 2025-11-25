import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/whoQuiz.module.css";
import { roundBtn } from "../../data/round-btns";
import NavBar from "../NavBar";

type rndBtnProps = {
  roundButtons: roundBtn[] | undefined;
  setRoundButtons: (x: roundBtn[]) => void;
  setVisibleQuizzes: (x: any) => void;
  mobile: boolean;
  needButton: boolean;
  filterRounds: (z: string) => void;
};
const RoundButtons = ({
  roundButtons,
  setRoundButtons,
  setVisibleQuizzes,
  mobile,
  needButton,
  filterRounds,
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
    <div className={styles.seeMore}>
      <NavBar
        mobile={mobile}
        roundButtons={roundButtons}
        setRoundButtons={setRoundButtons}
        filterRounds={filterRounds}
      />
      <section className={styles.roundButtonsComponent}>{btnMap}</section>
      {mobile && needButton && (
        <button
          id="visible"
          className={styles.skipBtn}
          onClick={() => {
            setVisibleQuizzes((prev: number) => prev + 10);
          }}
        >
          See More Quizzes
        </button>
      )}
    </div>
  );
};

export default RoundButtons;
