import styles from "@/app/styles/whoQuiz.module.css"
import Image from "next/image";
import backgroundVortex from "../../../../../public/images/drWhoQuiz/vortex.jpg"
import AppsFooter from "../../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";
import LogicalLogic from "./LogicalLogic";
import { LogicalRound } from "../data/questions";

const Page = () => {
    return (  
     <div className={styles.mainContainer}>
    <div className={styles.backgroundVortexDiv}>
    <Image src={backgroundVortex} fill={true} alt="Background Vortex" />
    </div>
    <div className={styles.drWhoQuizLanding}>
    <LogicalLogic round={LogicalRound}/>
    </div>
    <footer className={styles.whoQuizFooter}>
    <AppsFooter />
    <KoFiLink />
  </footer>
    </div>
    
  );
}
 
export default Page;