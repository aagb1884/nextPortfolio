import Link from "next/link";
import Image from "next/image";
import kofiImg from '../../../public/images/kofi.png';
import styles from '../styles/page.module.css';

const KoFiLink = () => {
    return ( 
        <div className={styles.koFi}>             
                 <Link href='https://ko-fi.com/W7W1URM7B' target='_blank' title='external ko-fi-link' rel="noopener noreferrer"><Image width={150} height={36} src={kofiImg} alt='Buy Me a Coffee at ko-fi.com' /></Link>
            </div>
     );
}
 
export default KoFiLink;