import styles from "@/app/styles/whoQuiz.module.css";

interface btnProps {
  handleAnswerSubmit: () => void;
}

export const Submit: React.FC<btnProps> = ({ handleAnswerSubmit }) => {
  return (
    <button id="submit" className={styles.btn} onClick={handleAnswerSubmit}>
      Submit
    </button>
  );
};
