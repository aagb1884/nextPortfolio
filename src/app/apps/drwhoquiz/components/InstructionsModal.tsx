'use client'
import { modalProps } from "../../barlow/components/modal";
import styles from "@/app/styles/whoQuiz.module.css"

const InstructionsModal: React.FC<modalProps> = ({setModalOpen}) => {
    return ( 
        <div className={styles.startModalWrapper} onClick={() => setModalOpen(false)}>  
        <div className={styles.startModal}>   
        <h2 className={styles.sModalHTxt}>How to Play</h2>
        <p className={styles.sModalTxt}>Pick a quiz on the main page.</p>
        <p className={styles.sModalTxt}>When you start a quiz you will be shown a question. You have sixty (60) seconds to answer it.</p>
        <p className={styles.sModalTxt}>You can try as many answers as you want within the 60 seconds until you get it right.</p>
        <p className={styles.sModalTxt}>Your points for that question will be based on the time remaining when you answer correctly.</p>
        <p className={styles.sModalTxt}>If you don&apos;t get it right within the sixty seconds the quiz will move onto the next questions.</p>
        <p className={styles.sModalTxt}>There are ten questions per quiz, except the 'You Know, Our Ways' round. There you have 2 minutes to sort a Cyberman plot into order.</p>
      <button className={styles.btn}
        onClick={() => setModalOpen(false)}>
        Close</button>
        </div>
        </div>
     );
}
 
export default InstructionsModal;