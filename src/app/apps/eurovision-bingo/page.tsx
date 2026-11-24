import EBAppLinks from "../eurovision-bingo/ebingo_components/EBAppLinks";
import BingoCard from "../eurovision-bingo/ebingo_components/BingoCard";
import styles from "@/app/styles/euroBingo.module.css";
import AppsFooter from "../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eurovision Bingo",
  openGraph: {
    title: "Eurovision Bingo",
    description:
      "Let the clichés stack up with this Eurovision themed bingo game.",
  },
};

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
        <EBAppLinks />
        <div className={styles.bingoNav}>
          <AppsFooter />
        </div>
        <KoFiLink />
      </div>
    </div>
  );
};

export default EurovisionBingo;
