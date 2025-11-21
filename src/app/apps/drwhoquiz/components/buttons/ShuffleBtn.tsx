import styles from "@/app/styles/whoQuiz.module.css";
import Image from "next/image";
import shuffle from "../../../../../../public/images/drWhoQuiz/icons8-shuffle-48.png";
import { roundBtn } from "../../data/round-btns";

interface btnProps {
  mobile: boolean;
  roundButtons: roundBtn[] | undefined;
  setRoundButtons: (x: roundBtn[]) => void;
}

export const Shuffle: React.FC<btnProps> = ({
  mobile,
  roundButtons,
  setRoundButtons,
}) => {
  const shuffleRounds = () => {
    if (roundButtons !== undefined) {
      const shuffle = [...roundButtons].sort(() => Math.random() - 0.5);
      setRoundButtons(shuffle);
    }
  };

  return (
    <button
      id="skip"
      className={styles.navBtn}
      onClick={() => {
        shuffleRounds();
      }}
    >
      <p className={styles.navBtnTxt}>{mobile ? "" : "Shuffle Rounds"}</p>
      <Image
        className={styles.navBtnImgSq}
        src={shuffle}
        alt="Shuffle Button"
        title="Shuffle Rounds"
      ></Image>
    </button>
  );
};
