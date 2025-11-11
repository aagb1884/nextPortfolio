import styles from "@/app/styles/whoQuiz.module.css";

interface btnProps {
  skip: () => void;
}

export const Skip: React.FC<btnProps> = ({ skip }) => {
  return (
    <button id="skip" className={styles.skipBtn} onClick={skip}>
      Skip
    </button>
  );
};
