import AppsFooter from '../../components/AppsFooter';
import styles from '../../../BFApp.module.css';

const BFHeader = () => {
    return ( 
        <div className={styles.headerWithNav}>
        <div className={styles.bfAppLinks}><AppsFooter /></div> 
        <header className={styles.bigFinishHeader}>
            <div className={styles.the}>The </div> 
            <h1>   <div className={styles.big}>BIG</div> 
            <div className={styles.finish}> FINISH</div> </h1>
            <div className={styles.boxsetGenerator}> Boxset Generator </div>
            <div className={styles.line}> | </div>
            <h3 className={styles.ideasAreHard}><i>Because we have hundreds of these to make and ideas are hard.</i></h3>
        </header>
    </div>
     );
}
 
export default BFHeader;