import styles from "../../../styles/drwho.module.css";

interface CountdownProps {
  timeLeft: number;
}

const Countdown: React.FC<CountdownProps>= ({timeLeft}) => {
 

    return ( 
        <div className={styles.coundown}>
          {timeLeft}
        </div>
     );
}
 
export default Countdown;