import styles from '../../../styles/wesley.module.css';
import smugLight from '../../../../../public/images/curious-light.jpeg';
import Image from 'next/image';

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
            <Image src={smugLight} alt='Light looking pleased'
            width={300} />
        </section>
        <button className={styles.hideModalBtn} 
        onClick={reset}>Again?</button>
        </div>
    
        </div>
    )
};

export default WinModal;