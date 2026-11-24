"use client";

import styles from "./styles/page.module.css";
import { useRef } from "react";
import HeaderLinks from "@/app/components/Header/HeaderLinks";
import ContactForm from "@/app/components/home/ContactForm";
import TabNavItem from "@/app/components/V2/TabNavItem";
import TabContent from "@/app/components/V2/TabContent";
import HomeFooter from "@/app/components/Footer/HomeFooter";
import FirstTab from "@/app/components/home/tabs/FirstTab";
import SecondTab from "@/app/components/home/tabs/SecondTab";
import ThirdTab from "@/app/components/home/tabs/ThirdTab";
import { useGlobalState } from "@/app/context/GlobalStateContext";

export default function Home() {
  const {
    showForm,
    setShowForm,
    activeTab,
    setActiveTab,
    goToContactForm,
    goToTab,
  } = useGlobalState();

  const contact = useRef(null);
  const tabs = useRef(null);

  return (
    <div className={styles.Tabs}>
      <main className={styles.main}>
        <HeaderLinks showForm={showForm} setShowForm={setShowForm} />

        <div className={styles.form} ref={contact}>
          {showForm && <ContactForm setShowForm={setShowForm} />}
        </div>
        <ul className={styles.nav} ref={tabs}>
          <TabNavItem
            title="Software Development"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Freelance Writing"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Poetry/Spoken Word"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className="tab-content-wrapper">
          <div className="outlet">
            <TabContent id="tab1" activeTab={activeTab}>
              <FirstTab />
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <SecondTab />
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
              <ThirdTab />
            </TabContent>
          </div>
        </div>
      </main>
      <footer>
        <HomeFooter
          contact={contact}
          tabs={tabs}
          goToTab={goToTab}
          goToContactForm={goToContactForm}
        />
      </footer>
    </div>
  );
}
