import Link from "next/link";
import styles from "../../styles/appPages.module.css";
import Image from "next/image";
import appStore from "@/images/App_Store_(iOS)_2017.png";
import googleplay from "@/images/google_play.png";
import { appInfo } from "@/data/appLinkData";

const mappedAppInfo = appInfo.map((app, index) => {
  return (
    <div key={index} className={styles.appStoreLinks}>
      <h3 className={styles.appStoreSection1}>{app.name}</h3>
      {app.iosLink ? (
        <Link href={app.iosLink} className={styles.appStoreSection2}>
          <Image
            src={appStore}
            alt="iOS app store logo"
            className={styles.iosAppStoreLogo}
            width={40}
            height={40}
          />
        </Link>
      ) : (
        <div className={styles.appStoreSection2}>
          <Image
            src={appStore}
            alt="ios app store logo"
            className={styles.disabled}
            width={40}
            height={40}
          />
        </div>
      )}

      {app.androidLink ? (
        <Link href={app.androidLink} className={styles.appStoreSection2}>
          <Image
            src={googleplay}
            alt="google play logo"
            className={styles.googlePlayLogo}
            width={40}
            height={40}
          />
        </Link>
      ) : (
        <div className={styles.appStoreSection2}>
          <Image
            src={googleplay}
            alt="google play logo"
            className={styles.disabled}
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
});

const AppLinks = () => {
  return (
    <div className={styles.appStoreDiv}>
      <br />
      <h2 className={styles.appStoreHeader}>App Stores</h2>
      {mappedAppInfo}
    </div>
  );
};

export default AppLinks;
