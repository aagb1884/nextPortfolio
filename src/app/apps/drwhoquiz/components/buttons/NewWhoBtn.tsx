import styles from "@/app/styles/whoQuiz.module.css";
import Image from "next/image";
import lozenge from "../../../../../../public/images/drWhoQuiz/lozenge_logo.png";
interface btnProps {
  mobile: boolean;
  filterRounds: (z: string) => void;
}

export const NewWhoBtn: React.FC<btnProps> = ({ mobile, filterRounds }) => {
  return (
    <button
      id="skip"
      className={styles.navBtn}
      onClick={() => {
        filterRounds("New Who");
      }}
    >
      <p className={styles.navBtnTxt}>{mobile ? "" : "2005 - Present Day"}</p>
      <Image
        className={styles.navBtnImg}
        src={lozenge}
        alt="Doctor Who Logo 2005"
        title="New Who Only"
      ></Image>
    </button>
  );
};
