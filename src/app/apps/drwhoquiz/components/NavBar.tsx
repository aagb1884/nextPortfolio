import styles from "@/app/styles/whoQuiz.module.css";
import { Shuffle } from "./buttons/ShuffleBtn";
import { ClassicBtn } from "./buttons/ClassicBtn";
import { NewWhoBtn } from "./buttons/NewWhoBtn";
import { AudioRounds } from "./buttons/AudioBtn";
import { PictureRounds } from "./buttons/ImageBtn";
import { roundBtn, roundBtns } from "../data/round-btns";
import { MultipleChoice } from "./buttons/MultipleChoice";

type navBarProps = {
  mobile: boolean;
  roundButtons: roundBtn[] | undefined;
  setRoundButtons: (z: roundBtn[]) => void;
  filterRounds: (z: string) => void;
};

const NavBar = ({
  mobile,
  roundButtons,
  setRoundButtons,
  filterRounds,
}: navBarProps) => {
  return (
    <div className={styles.navBar}>
      <AudioRounds mobile={mobile} filterRounds={filterRounds} />
      <PictureRounds mobile={mobile} filterRounds={filterRounds} />
      <MultipleChoice mobile={mobile} filterRounds={filterRounds} />
      <Shuffle
        mobile={mobile}
        roundButtons={roundButtons}
        setRoundButtons={setRoundButtons}
      />
      <ClassicBtn mobile={mobile} filterRounds={filterRounds} />
      <NewWhoBtn mobile={mobile} filterRounds={filterRounds} />
      <button
        className={styles.resetBtn}
        onClick={() => {
          setRoundButtons(roundBtns);
        }}
      >
        <p className={styles.reset}>Reset</p>
      </button>
    </div>
  );
};

export default NavBar;
