import Link from "next/link";
import Image from "next/image";
import PithyFooterQuotes from "./lists/PithyFooterQuotes";
import styles from '../../../styles/BFApp.module.css';
import appleLogo from '../../../../../public/images/App-Store-Logo-700x394.png'

const BFFooter = () => {
    return (  
        <footer className={styles.bigFinishFooter}>
        
        <div className={styles.FooterAppStoreLink}>
        <p>Available as a mobile/tablet app on the iOS App Store</p> 
        <Link href="https://apps.apple.com/gb/app/big-finish-boxset-generator/id6497484877">
        <Image  src={appleLogo}
                alt="iOS app store logo"
                className={styles.footerIosAppStoreLogo}
        /></Link>
        </div>
        <div className={styles.line}> | </div>
        <div className={styles.fitton}> 
            <h4><PithyFooterQuotes /></h4>
        </div>
        </footer>
    );
}

export default BFFooter;