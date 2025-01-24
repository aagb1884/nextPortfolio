import React from "react";
import styles from "@/app/styles/drwho.module.css";
 
const WhoTabContent = ({id, activeWhoTab, children}) => {
 return (
   activeWhoTab === id ? <div className={styles.WhoTabContent}>
     { children }
   </div>
   : null
 );
};
 
export default WhoTabContent;