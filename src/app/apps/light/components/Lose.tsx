import styles from '../../../styles/wesley.module.css';
import sadLight from '../../../../../public/images/sad-light.png';
import Image from 'next/image';

interface LoseProps {
    reset: () => void;
  }

const LoseModal: React.FC<LoseProps> = ({reset}) => {

    return (
        <div className={styles.modalWrapper}>
        <div
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
        <section className={styles.modalText}>
            <h1>That&apos;s wrong.</h1> 
            <p>Light&apos;s catalogue is still incomplete and they are very unhappy.</p> 
            <Image src={sadLight} alt='Light looking peeved'
            width={300} />
        </section>
        <button className={styles.hideModalBtn} 
        onClick={reset}>Try Again?</button>
        </div>
    
        </div>
    )
};

export default LoseModal;