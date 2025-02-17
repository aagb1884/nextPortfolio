import Link from "next/link";
import styles from '../../styles/appPages.module.css';
import Image from "next/image";

const BFGeneratorAppLinks = () => {
    return ( 
        <div className={styles.appStoreDiv}>
                <p>The Big Finish Boxset Generator is available as a mobile/tablet app on the iOS App Store.</p>
                <div className={styles.appStoreLinks}>
        <Link href="https://apps.apple.com/gb/app/big-finish-boxset-generator/id6497484877">
        <Image   src="/images/App_Store_(iOS)_2017.svg"
                alt="iOS app store logo"
                className={styles.iosAppStoreLogo}
                width={40} height={40}
        /></Link>
        <Link href="https://play.google.com/store/apps/details?id=com.aagb1884.BigFinishGeneratorApp">
        <img    src="/images/Google_Play.png"
                alt="google play logo"
                className={styles.googlePlayLogo}
        />
        </Link>
        </div>
        </div>
     );
}
 
export default BFGeneratorAppLinks;