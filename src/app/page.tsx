'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import HeaderLinks from '../components/HomePage/Header/HeaderLinks';
import ContactForm from '../components/HomePage/ContactForm';
import TabNavItem from '../components/V2/TabNavItem';
import TabContent from '../components/V2/TabContent';
import HomeFooter from '../components/HomePage/Footer/HomeFooter';
import FirstTab from '../components/HomePage/AllTabs/FirstTab';
import SecondTab from '../components/HomePage/AllTabs/SecondTab';
import ThirdTab from '../components/HomePage/AllTabs/ThirdTab';

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.Tabs}>
      <main className={styles.main}>
      <HeaderLinks 
      showForm={showForm}
      setShowForm={setShowForm} 
      />
      <div className="form" 
            // ref={contact}
            >
            {showForm && <ContactForm setShowForm={setShowForm} />}
          </div>
      <ul className="nav" 
      // ref={tabs}
      >
          <TabNavItem title="Software Development" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Freelance Writing" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Poetry/Spoken Word" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
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
        <HomeFooter />
      </footer>
    </div>
  );
}
