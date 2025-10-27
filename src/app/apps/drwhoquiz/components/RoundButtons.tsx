import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/whoQuiz.module.css";
import { roundBtns } from "../data/round-btns";

const btnMap = roundBtns.map((round) => {
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

const RoundButtons = () => {
  return <section className={styles.roundButtonsComponent}>{btnMap}</section>;
};

export default RoundButtons;
