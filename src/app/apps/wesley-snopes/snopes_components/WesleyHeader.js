import styles from '../../../styles/wesley.module.css'

const WesleyHeader = () => {
    return ( 
        <header className={styles.wesleyHeader}>
        <div className={styles.headerWrapper}>
        <div className={styles.bg}> WESLEY SNOPES </div>
        <div className={styles.fg}> WESLEY SNOPES </div>
        </div>
        <div className={styles.sh}>A fact-checking service</div>
        </header>
     );
}
 
export default WesleyHeader;

