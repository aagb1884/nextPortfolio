import styles from '../../app/styles/tabs.module.css';

const Minimise = ({toggleVisibility}) => {
    return ( 
        <div className={styles.minimise}>
        <p 
        onClick={toggleVisibility}>
            ↑ Minimise ↑</p>
        </div>
     );
}
 
export default Minimise;