import Link from "next/link";
import styles from '../../styles/appPages.module.css';
import Image from "next/image";

const EuroBingoAppLinks = () => {
    return ( 
        <div className={styles.appStoreDiv}>
        <br />
        <h3>App Stores</h3>
                <p>Eurovision Bingo is available as a mobile/tablet app via the iOS App Store and Google Play.</p>
        <div className={styles.appStoreLinks}>
        <Link href="https://apps.apple.com/gb/app/eurovision-bingo/id6479647899">
        <Image    src="/images/App_Store_(iOS)_2017.svg"
                alt="iOS app store logo"
                className={styles.iosAppStoreLogo}
                width={40} height={40}
        /></Link>
        <Link href="https://play.google.com/store/apps/details?id=com.aagb1884.eurovision_bingo">
        <Image    src="/images/Google_Play.png"
                alt="google play logo"
                className={styles.googlePlayLogo}
                width={40} height={40}
        />
        </Link>
        </div>
        </div>
     );
}
 
export default EuroBingoAppLinks;