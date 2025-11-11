'use client'
import styles from "@/app/styles/whoQuiz.module.css";
import { Question } from "../data/questions";

interface modalProps {
    setModalOpen: (filterTerm: boolean) => void;
    wrongAnswers: Question[]
  }

const WrongAnswersModal: React.FC<modalProps> = ({ setModalOpen, wrongAnswers }) => {
  
    return (
      <div
        className={styles.startModalWrapper}
        onClick={() => setModalOpen(false)}
      >
        <div className={styles.startModal}>
          <h2 className={styles.sModalHTxt}>Wrong Answers</h2>
          <ul>
            {wrongAnswers.map((question, index) => (
              <li key={index}>
                <p className={styles.sModalTxt}>{question.question}</p>
                <p className={styles.sModalTxt}>
                  {question.officialAnswer
                    ? question.officialAnswer
                    : question.answers[0]}
                </p>
              </li>
            ))}
          </ul>
          <button className={styles.btn} onClick={() => setModalOpen(false)}>
            Close
          </button>
        </div>
      </div>
    );
}
 
export default WrongAnswersModal;