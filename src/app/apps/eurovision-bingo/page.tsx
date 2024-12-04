import EuroBingoAppLinks from "../components/eBingoAppLinks";
import BingoCard from '../eurovision-bingo/ebingo_components/BingoCard';
import styles from '../../euroBingo.module.css';

const EurovisionBingo = () => {
    return ( 
        <div className={styles.eurovisionBingoLanding}>
        <header className={styles.animateCharacter}>
          <div className={styles.animatedHeader}>EUROVISION BINGO</div>
        </header>
        <main>
            <BingoCard />
        </main>
        <div className={styles.euroBingoLinks}>
        <EuroBingoAppLinks />
        </div>
        </div>
     );
}
 
export default EurovisionBingo;