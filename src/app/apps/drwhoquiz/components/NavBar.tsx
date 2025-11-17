import styles from "@/app/styles/whoQuiz.module.css";
import { Shuffle } from "./buttons/ShuffleBtn";
import { ClassicBtn } from "./buttons/ClassicBtn";
import { NewWhoBtn } from "./buttons/NewWhoBtn";
import { AudioRounds } from "./buttons/AudioBtn";
import { PictureRounds } from "./buttons/ImageBtn";
import { roundBtn } from "../data/round-btns";

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
          filterRounds("");
        }}
      >
        <p className={styles.reset}>Reset</p>
      </button>
    </div>
  );
};

export default NavBar;
