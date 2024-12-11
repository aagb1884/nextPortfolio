'use client'

import styles from "./styles/page.module.css";
import { useRef} from "react";
import HeaderLinks from '../components/HomePage/Header/HeaderLinks';
import ContactForm from '../components/HomePage/ContactForm';
import TabNavItem from '../components/V2/TabNavItem';
import TabContent from '../components/V2/TabContent';
import HomeFooter from '../components/HomePage/Footer/HomeFooter';
import FirstTab from '../components/HomePage/AllTabs/FirstTab';
import SecondTab from '../components/HomePage/AllTabs/SecondTab';
import ThirdTab from '../components/HomePage/AllTabs/ThirdTab';
import { useGlobalState } from '@/app/context/GlobalStateContext';

export default function Home() {
  const { showForm, setShowForm, activeTab, setActiveTab, goToContactForm, goToTab} = useGlobalState();

  const contact = useRef(null);
  const tabs = useRef(null); 

  return (
    <div className={styles.Tabs}>
      <main className={styles.main}>
      <HeaderLinks 
      showForm={showForm}
      setShowForm={setShowForm} 
      />
      <div className={styles.form} ref={contact}>
            {showForm && <ContactForm setShowForm={setShowForm} />}
      </div>
      <ul className={styles.nav} ref={tabs}>
          <TabNavItem title="Software Development" id="tab1" 
          activeTab={activeTab} setActiveTab={setActiveTab}
           />
          <TabNavItem title="Freelance Writing" id="tab2" 
          activeTab={activeTab} setActiveTab={setActiveTab}
         />
          <TabNavItem title="Poetry/Spoken Word" id="tab3" 
          activeTab={activeTab} setActiveTab={setActiveTab}/>
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
        goToContactForm={goToContactForm} />
      </footer>
    </div>
  );
}
