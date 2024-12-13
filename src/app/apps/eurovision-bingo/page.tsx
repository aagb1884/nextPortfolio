import EuroBingoAppLinks from "../components/eBingoAppLinks";
import BingoCard from '../eurovision-bingo/ebingo_components/BingoCard';
import styles from '../../styles/euroBingo.module.css';
import AppsFooter from "../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";
import type { Metadata } from 'next';

const EurovisionBingo = () => {

  const metadata: Metadata = {
    title: "Eurovision Bingo",
    description: "A browser-based Bingo app for playing while watching any Eurovision Song Contest.",
  };

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