import Link from "next/link";
import Image from "next/image";
import appStore from "@/images/App_Store_(iOS)_2017.png";
import googleplay from "@/images/google_play.png";
import styles from "@/app/styles/barlow.module.css";
const BarlowAppLinks = () => {
  return (
    <div className={styles.appStoreLinks}>
      <Link href="#" className={styles.barlowLink}>
        <Image
          src={appStore}
          alt="iOS app store logo"
          className={styles.iosAppStoreLogo}
          width={40}
          height={40}
        />{" "}
        <p>Apple/iOS</p>
      </Link>
      <Link href="#" className={styles.barlowLink}>
        <Image
          src={googleplay}
          alt="google play logo"
          className={styles.googlePlayLogo}
          width={40}
          height={40}
        />
        <p>Android</p>
      </Link>
    </div>
  );
};
export default BarlowAppLinks;
