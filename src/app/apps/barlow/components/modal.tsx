interface modalProps {
    setModalOpen: (filterTerm: boolean) => void;
  }
  
  import styles from '@/app/styles/barlow.module.css';
  
  const Modal: React.FC<modalProps> = ({setModalOpen}) => {
    return (
        <div className={styles.startModalWrapper}>  
        <div className={styles.startModal}>   
        <h2 className={styles.sModalTxt}>How to Play</h2>
        <p className={styles.sModalTxt}>First, correctly name a song written by Gary Barlow.</p>
        <p className={styles.sModalTxt}>Then name another song written by Gary Barlow that had higher or equal position in the UK singles chart.</p>
        <p className={styles.sModalTxt}>You have sixty (60) seconds to name as many Gary Barlow songs as possible.</p>
        <p className={styles.sModalTxt}>You are allowed three wrong answers, then it&apos;s game over.</p>
        <p className={styles.sModalTxt}>You can&apos;t enter the same song twice, or it will count as a wrong answer.</p>
        <button className={styles.barlowBtn}
        onClick={() => setModalOpen(false)}>
        Close</button>
        </div>
        </div>
    
     
        
       
        
    )
};

export default Modal;