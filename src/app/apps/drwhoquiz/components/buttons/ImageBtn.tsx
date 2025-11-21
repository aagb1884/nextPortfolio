import styles from "@/app/styles/whoQuiz.module.css";
import Image from "next/image";
import picture from "../../../../../../public/images/drWhoQuiz/icons8-image-48.png";
interface btnProps {
  mobile: boolean;
  filterRounds: (z: string) => void;
}

export const PictureRounds: React.FC<btnProps> = ({ mobile, filterRounds }) => {
  return (
    <button
      id="pictures"
      className={styles.navBtn}
      onClick={() => {
        filterRounds("Picture");
      }}
    >
      <p className={styles.navBtnTxt}>{mobile ? "" : "Picture Rounds"}</p>
      <Image
        className={styles.navBtnImgSq}
        src={picture}
        alt="Picture Rounds Button"
        title="Picture Rounds"
      ></Image>
    </button>
  );
};
