import styles from "@/app/styles/whoQuiz.module.css";

interface btnProps {
  setModalOpen: (filterTerm: boolean) => void;
}

export const WrongButton: React.FC<btnProps> = ({ setModalOpen }) => {
  return (
    <button className={styles.btnAlt} onClick={() => setModalOpen(true)}>
      See Missed Answers
    </button>
  );
};
