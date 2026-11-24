"use client";
import styles from "@/app/styles/wesley.module.css";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import HomeFooter from "@/app/components/Footer/HomeFooter";

const WesleyFooter = () => {
  const { goToContactForm, goToTab, contact, tabs } = useGlobalState();
  return (
    <footer className={styles.wesleyFooter}>
      <div className={styles.navFooter}>
        <HomeFooter
          goToContactForm={goToContactForm}
          goToTab={goToTab}
          contact={contact}
          tabs={tabs}
        />
      </div>
    </footer>
  );
};

export default WesleyFooter;
