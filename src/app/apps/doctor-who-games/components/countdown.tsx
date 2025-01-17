import styles from "../../../styles/drwho.module.css";

const Countdown = ({timeLeft}) => {
 

    return ( 
        <div className={styles.coundown}>
          {timeLeft}
        </div>
     );
}
 
export default Countdown;