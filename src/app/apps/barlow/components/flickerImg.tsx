import Image from "next/image";
import barlow from "@/app/images/barlow.png";
import styles from "@/app/styles/barlow.module.css";

const BarlowFlicker = () => {
    return ( 
        <Image 
        src={barlow}
        alt="gary barlow looking on"
        width={200}
        height={200}
        className={styles.animateFlicker}
        />
     );
}
 
export default BarlowFlicker;