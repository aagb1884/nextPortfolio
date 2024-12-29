'use client'
import styles from '../../../styles/wesley.module.css';
import { useGlobalState } from '@/app/context/GlobalStateContext';

const WesleyHeader = () => {
    const { showModal, setShowModal } = useGlobalState();
    return ( 
        <header className={styles.wesleyHeader}>
        <div className={styles.headerWrapper}>
        <div className={styles.bg}> WESLEY SNOPES </div>
        <div className={styles.fg}> WESLEY SNOPES </div>
        </div>
        <div className={styles.sh}>A fact-checking service</div>
        <button id={styles.instructionBtn} onClick={() => {setShowModal(!showModal)}}>How does this work?</button>
        </header>
     );
}
 
export default WesleyHeader;

