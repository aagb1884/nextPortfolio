import Link from "next/link";
import styles from "../../styles/appPages.module.css";
import Image from "next/image";
import appStore from "@/images/App_Store_(iOS)_2017.png";
import googleplay from "@/images/google_play.png";

const appInfo = [
  {
    name: "Eurovision Bingo",
    iosLink: "https://apps.apple.com/gb/app/eurovision-bingo/id6479647899",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.aagb1884.eurovision_bingo",
  },
  {
    name: "The Big Finish Boxset Generator",
    iosLink:
      "https://apps.apple.com/gb/app/big-finish-boxset-generator/id6497484877",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.aagb1884.BigFinishGeneratorApp",
  },
  { name: "Setting the Gary Bar Low", iosLink: "#", androidLink: "#" },
];

const mappedAppInfo = appInfo.map((app, index) => {
  return (
    <div key={index} className={styles.appStoreLinks}>
      <h3 className={styles.appStoreSection1}>{app.name}</h3>
      <Link href={app.iosLink} className={styles.appStoreSection2}>
        <Image
          src={appStore}
          alt="iOS app store logo"
          className={styles.iosAppStoreLogo}
          width={40}
          height={40}
        />
      </Link>
      <Link href={app.androidLink} className={styles.appStoreSection2}>
        <Image
          src={googleplay}
          alt="google play logo"
          className={styles.googlePlayLogo}
          width={40}
          height={40}
        />
      </Link>
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
