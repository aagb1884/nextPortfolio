import styles from "@/app/styles/whoQuiz.module.css";

interface btnProps {
  reset: () => void;
}

export const TryAgain: React.FC<btnProps> = ({ reset }) => {
  return (
    <button className={styles.btn} onClick={() => reset()}>
      Try Again?
    </button>
  );
};
