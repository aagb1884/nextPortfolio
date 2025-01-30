import Image from "next/image";
import bluebox from "../../../../../public/images/bluebox.png"
import styles from "../../../styles/drwho.module.css";

const WhoLoading = () => {
    return ( 
        <>
        <Image 
        src={bluebox}
        height={300}
        alt="TARDIS materialising"
        className={styles.blueBoxLogo}/>
        <p>Loading...</p>
        </>
     );
}
 
export default WhoLoading;