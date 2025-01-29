'use client'
import styles from "@/app/styles/drwho.module.css";
import WhoTabNavItem from "./V2/WhoTabNavItem";
import WhoTabContent from "./V2/WhoTabContent";
import { useGlobalState } from '@/app/context/GlobalStateContext';
import { useRef } from "react";
import StoryList from "./story_sort/StoryList";
import AppsFooter from "../components/AppsFooter";
import LightHeader from "./story_sort/LightHeader";
import AiList from "./ai_sort/AppreciationIndexGame";
import FanPollList from "./fanpoll_sort/FanPollSortGame";

const WhoGamesTabs = () => {
    const { activeWhoTab, setActiveWhoTab } = useGlobalState();
    const tabs = useRef(null); 

    console.log(activeWhoTab)
    return ( 
        <div className={styles.Tabs}>
            <AppsFooter />
            <LightHeader />
        <main className={styles.main}>
        <ul className={styles.nav} ref={tabs}>
          <WhoTabNavItem title="Story Order" id="whoTab1" 
          activeWhoTab={activeWhoTab} setActiveWhoTab={setActiveWhoTab}
           />
          <WhoTabNavItem title="Appreciation Index" id="whoTab2" 
          activeWhoTab={activeWhoTab} setActiveWhoTab={setActiveWhoTab}
         />
          <WhoTabNavItem title="Fan Poll" id="whoTab3" 
          activeWhoTab={activeWhoTab} setActiveWhoTab={setActiveWhoTab}/>
        </ul>   
        
        <div className={styles.whoTabContentWrapper}>
        <div className={styles.outlet}>
          <WhoTabContent id="whoTab1" activeWhoTab={activeWhoTab}>
          <StoryList activeWhoTab={activeWhoTab}/>
          </WhoTabContent>
          <WhoTabContent id="whoTab2" activeWhoTab={activeWhoTab}>
          <AiList activeWhoTab={activeWhoTab}/>
          </WhoTabContent>
          <WhoTabContent id="whoTab3" activeWhoTab={activeWhoTab}>
          <FanPollList activeWhoTab={activeWhoTab}/>
          </WhoTabContent>
        </div>
        </div>
        </main>
        </div>
     );
}
 
export default WhoGamesTabs;