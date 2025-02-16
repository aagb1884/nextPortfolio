import Image from "next/image";
import barlow from "@/app/images/barlow.png";
import styles from "@/app/styles/barlow.module.css";

interface flickerProps {
    score: number;
   }

const BarlowFlicker: React.FC<flickerProps> =  ({score}) => {
    return ( 
        <>
        <Image 
        src={barlow}
        alt="gary barlow looking on"
        width={200}
        height={200}
        className={styles.animateFlicker}
        />
        {score >= 2 && (
            <Image 
            src={barlow}
            alt="gary barlow looking on"
            width={100}
            height={100}
            className={styles.animateFlicker2}
            />
            )}
        {score >= 4 && (
            <Image 
            src={barlow}
            alt="gary barlow looking on"
            width={175}
            height={175}
            className={styles.animateFlicker3}
            />
            )}
        {score >= 8 && (
            <Image 
            src={barlow}
            alt="gary barlow looking on"
            width={150}
            height={150}
            className={styles.animateFlicker4}
            />
            )}
        {score >= 12 && (
            <Image 
            src={barlow}
            alt="gary barlow looking on"
            width={50}
            height={50}
            className={styles.animateFlicker5}
            />
            )}
        {score >= 20 && (
            <Image 
            src={barlow}
            alt="gary barlow looking on"
            width={200}
            height={200}
            className={styles.animateFlicker}
            />
            )}

        </>
     );
}
 
export default BarlowFlicker;