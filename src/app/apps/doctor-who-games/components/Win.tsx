import styles from '../../../styles/wesley.module.css';

interface WinProps {
    reset: () => void;
  }

const WinModal: React.FC<WinProps> =({reset}) => {

    return (
        <div className={styles.modalWrapper}>
        <div
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
        <section className={styles.modalText}>
            <h1>CORRECT</h1> 
            <p>You got the order right and now Light can destroy all life on Earth!</p> 
            
        </section>
        <button onClick={reset}>Again?</button>
        </div>
    
        </div>
    )
};

export default WinModal;