import styles from "@/app/styles/whoQuiz.module.css";
import Image from "next/image";
import multiple from "../../../../../../public/images/drWhoQuiz/icons8-multiple-choice-48.png";
interface btnProps {
  mobile: boolean;
  filterRounds: (z: string) => void;
}

export const MultipleChoice: React.FC<btnProps> = ({ mobile, filterRounds }) => {
  return (
    <button
      id="skip"
      className={styles.navBtn}
      onClick={() => {
        filterRounds("Multiple Choice");
      }}
    >
      <p className={styles.navBtnTxt}>{mobile ? "" : "Multiple Choice"}</p>
      <Image
        className={styles.navBtnImg}
        src={multiple}
        height={24}
        width={24}
        alt="Multiple Choice"
        title="Multiple Choice"
      ></Image>
    </button>
  );
};
