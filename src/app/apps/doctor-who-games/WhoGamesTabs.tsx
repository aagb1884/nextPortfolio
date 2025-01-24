'use client'
import styles from "@/app/styles/drwho.module.css";
import WhoTabNavItem from "./V2/WhoTabNavItem";
import WhoTabContent from "./V2/WhoTabContent";
import { useGlobalState } from '@/app/context/GlobalStateContext';
import { useRef } from "react";
import StoryList from "./components/StoryList";
import Game2 from "./game2/game2";

const WhoGamesTabs = () => {
    const { activeWhoTab, setActiveWhoTab } = useGlobalState();
    const tabs = useRef(null); 
    return ( 
        <div className={styles.Tabs}>
        <main className={styles.main}>
        <ul className={styles.nav} ref={tabs}>
          <WhoTabNavItem title="I Don't Think Much of Your Catalogue" id="whoTab1" 
          activeWhoTab={activeWhoTab} setActiveWhoTab={setActiveWhoTab}
           />
          <WhoTabNavItem title="Second Game" id="whoTab2" 
          activeWhoTab={activeWhoTab} setActiveWhoTab={setActiveWhoTab}
         />
          {/* <WhoTabNavItem title="Poetry/Spoken Word" id="tab3" 
          activeWhoTab={activeWhoTab} setActiveWhoTab={setActiveWhoTab}/> */}
        </ul>   
        <div className={styles.whoTabContentWrapper}>
        <div className={styles.outlet}>
          <WhoTabContent id="whoTab1" activeWhoTab={activeWhoTab}>
          <StoryList />
          </WhoTabContent>
          <WhoTabContent id="whoTab2" activeWhoTab={activeWhoTab}>
          <Game2 />
          </WhoTabContent>
        </div>
        </div>
        </main>
        </div>
     );
}
 
export default WhoGamesTabs;