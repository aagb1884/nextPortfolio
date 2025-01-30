import Image from "next/image";
import styles from "../../../styles/drwho.module.css";
import light from "../../../../../public/images/light.png";
import seven from "../../../../../public/images/seven.png";

const LightHeader = () => {
    return ( 
        <div className={styles.headerContainer}>
        <div className={styles.lightHeader}>
        <Image src={light} width={200} height={123} className={styles.Light}
        alt="Light, an glowing angel, reaching out their arm"/>
        <h2 className={styles.dndHeader}>I Don&apos;t Think Much of Your Catalogue</h2>
        <Image src={seven} width={170} height={123}
        alt="The Seventh Doctor" className={styles.Seven}/>
        </div>
        <div className={styles.lightSubtitle}>
        <p>Oh no! There are gaps in Light&apos;s massive database of everything!</p>
        </div>
        </div>
     );
}
 
export default LightHeader;