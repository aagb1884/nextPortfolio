"use client";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import HomeFooter from "@/components/HomePage/Footer/HomeFooter";
import AppLinks from "../apps/components/appLinks";
import Header from "@/components/HomePage/Header/TitleHeading";
import styles from "@/app/styles/shopPage.module.css";
import { shopData } from "@/data/shopdata";
import Image from "next/image";
import Link from "next/link";
import ExternalLinkImage from "../ui/ExternalLink";

const ShopPage = () => {
  const { goToContactForm, goToTab, contact, tabs } = useGlobalState();

  const mappedShopInfo = shopData.map((item, index) => {
    return (
      <li key={index} className={styles.shopItem}>
        <div className={styles.itemInfo}>
          <h2>
            {item.name} - {item.price} ({item.format})
          </h2>
          <p>{item.desc}</p>
          <div className={styles.itemLink}>
            <Link href={item.url} className={styles.buyBtn}>
              <p>Buy Here</p>
            </Link>
            <ExternalLinkImage />
          </div>
        </div>
        <Image
          className={styles.itemImg}
          src={item.img}
          alt={`${item.name} Cover`}
          width={145}
          height={250}
        />
      </li>
    );
  });
  return (
    <div className={styles.shopPage}>
      <header className={styles.headerSection}>
        <Header />
      </header>
      <main className={styles.itemList}>
        <ul>{mappedShopInfo} </ul>
        <p>* Items available on a 'Pay What You Want' basis.</p>
      </main>
      <p>
        I also have free apps available to download, please leave a review if
        you have time.
      </p>
      <AppLinks />
      <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
    </div>
  );
};

export default ShopPage;
