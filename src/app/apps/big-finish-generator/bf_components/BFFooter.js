import Link from "next/link";
import Image from "next/image";
import PithyFooterQuotes from "./lists/PithyFooterQuotes";
import styles from '../../../styles/BFApp.module.css';
import appleLogo from '../../../../../public/images/App_Store_(iOS)_2017.png';
import googleplay from '@/images/google_play.png';

const BFFooter = () => {
    return (  
        <footer className={styles.bigFinishFooter}>
        
        <div className={styles.FooterAppStoreLink}>
        <p>Available from App stores</p> 
        <div className={styles.appIcons}>
        <Link href="https://apps.apple.com/gb/app/big-finish-boxset-generator/id6497484877">
        <Image  src={appleLogo}
                alt="iOS app store logo"
                className={styles.footerAppStoreLogo}
        /></Link>
        <Link href="https://play.google.com/store/apps/details?id=com.aagb1884.BigFinishGeneratorApp">
        <Image    src={googleplay}
                alt="google play logo"
                className={styles.footerAppStoreLogo}
        />
        </Link>
        </div>
        </div>
        <div className={styles.line}> | </div>
        <div className={styles.fitton}> 
            <h4><PithyFooterQuotes /></h4>
        </div>
        </footer>
    );
}

export default BFFooter;