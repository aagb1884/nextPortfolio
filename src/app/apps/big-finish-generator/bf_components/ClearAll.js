import styles from '../../../styles/BFApp.module.css';

const ClearAll = ({clearAll}) => {

    return ( 
<button className={styles.clearAllButton} data-testid="clear-all-button" onClick={clearAll}>Clear All</button>
     );
}
 
export default ClearAll;