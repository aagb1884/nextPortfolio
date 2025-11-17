import styles from "@/app/styles/whoQuiz.module.css";
import Image from "next/image";
import audioImg from "../../../../../../public/images/drWhoQuiz/icons8-audio-48.png";
interface btnProps {
  mobile: boolean;
  filterRounds: (z: string) => void;
}

export const AudioRounds: React.FC<btnProps> = ({ mobile, filterRounds }) => {
  return (
    <button
      id="skip"
      className={styles.navBtn}
      onClick={() => {
        filterRounds("Music");
      }}
    >
      <p className={styles.navBtnTxt}>{mobile ? "" : "Music Rounds"}</p>
      <Image
        className={styles.navBtnImgSq}
        src={audioImg}
        alt="Music Rounds Button"
        title="Music Rounds"
      ></Image>
    </button>
  );
};
