import styles from "@/app/styles/whoQuiz.module.css";
import Image from "next/image";
import classicLogo from "../../../../../../public/images/drWhoQuiz/classic_logo.svg";
interface btnProps {
  mobile: boolean;
  filterRounds: (z: string) => void;
}

export const ClassicBtn: React.FC<btnProps> = ({ mobile, filterRounds }) => {
  return (
    <button
      id="skip"
      className={styles.navBtn}
      onClick={() => {
        filterRounds("Classic");
      }}
    >
      <p className={styles.navBtnTxt}>{mobile ? "" : "1963 - 1989"}</p>
      <Image
        className={styles.navBtnImg}
        src={classicLogo}
        alt="Doctor Who Logo 1963 - 67"
        title="Classic Who Only"
      ></Image>
    </button>
  );
};
