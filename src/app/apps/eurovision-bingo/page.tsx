import EuroBingoAppLinks from "../components/eBingoAppLinks";
import BingoCard from '../eurovision-bingo/ebingo_components/BingoCard';
import styles from '../../styles/euroBingo.module.css';
import AppsFooter from "../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";

export const metadata = {
  title: 'Eurovision Bingo',
  openGraph: {
    title: 'Eurovision Bingo',
  },
}

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
        <div className={styles.bingoNav}>
        <AppsFooter />
        </div>
        <KoFiLink />
        </div>
        </div>
     );
}
 
export default EurovisionBingo;