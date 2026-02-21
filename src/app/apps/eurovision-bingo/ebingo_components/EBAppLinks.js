import Link from "next/link";
import Image from "next/image";
import appStore from "@/images/App_Store_(iOS)_2017.png";
import googleplay from "@/images/google_play.png";
import styles from "@/app/styles/barlow.module.css";
const EBAppLinks = () => {
  return (
    <div className={styles.appStoreLinks}>
      <Link
        href="https://apps.apple.com/gb/app/eurovision-bingo/id6479647899"
        className={styles.barlowLink}
      >
        <Image
          src={appStore}
          alt="iOS app store logo"
          className={styles.iosAppStoreLogo}
          width={40}
          height={40}
        />{" "}
        <p>Apple/iOS</p>
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.aagb1884.eurovision_bingo"
        className={styles.barlowLink}
      >
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
export default EBAppLinks;
