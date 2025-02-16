import RestartBtn from "./restart";
import Image from "next/image";
import barlowGif from "@/app/images/take-that-gary-barlow.gif";
import styles from '@/app/styles/barlow.module.css';

interface loseProps {
    setLost: (filterTerm: boolean) => void;
    reset: () => void;
    isActive: boolean;
    score: number;
  }
  
  const LoseModal: React.FC<loseProps> = ({setLost, reset, isActive, score}) => {

    return (
        <div className={styles.startModalWrapper}>
        <div className={styles.startModal}>
        <h3 className={styles.barlowModalTitle}>GAME OVER</h3>
        <div className="flex justify-center">
        <Image src={barlowGif} className="flex justify-center"
        alt="Gary Barlow singing live, looking deeply uncomfortable"/>
        </div>
        <p className={styles.score}>You scored {score}</p>
        <button className={styles.barlowBtn}
        onClick={() => setLost(false)}>
        Close</button>
        <RestartBtn
        reset={reset}
        isActive={isActive}
        />
        </div>
        </div>
    
     
        
       
        
    )
};

export default LoseModal;