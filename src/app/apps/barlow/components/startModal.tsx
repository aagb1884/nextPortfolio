interface modalProps {
    setStartModal: (filterTerm: boolean) => void;
    setIsActive: (filterTerm: boolean) => void;
   }

import styles from '@/app/styles/barlow.module.css';
  
  const StartModal: React.FC<modalProps> = ({setStartModal, setIsActive}) => {

    const begin = () => {
        setStartModal(false);
        setIsActive(true)
    }

    return (
        <div className={styles.startModalWrapper}>
        <div className={styles.startModal}>
        <h1 className={styles.barlowModalTitle}>SETTING THE GARY BARLOW</h1>
        <h3 className="font-bold text-lg">How to Play</h3>
        <p className="py-4">First, correctly name a song written by Gary Barlow.</p>
        <p className="py-4">Then name another song written by Gary Barlow that had higher or equal position in the UK singles chart.</p>
        <p className="py-4">You are allowed three wrong answers, then it's game over.</p>
        <p className="py-4">You can't enter the same song twice, or it will count as a wrong answer.</p>
        <button className={styles.barlowBtn}
        onClick={begin}>
        BEGIN</button>
        </div>
        </div>
    
     
        
       
        
    )
};

export default StartModal;