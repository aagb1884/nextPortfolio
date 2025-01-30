import React from "react";
import styles from "@/app/styles/drwho.module.css";

const WhoTabNavItem = ({ id, title, activeWhoTab, setActiveWhoTab }) => {
 
 const handleClick = () => {
   setActiveWhoTab(id);
 };

 
return (
   <li onClick={handleClick} className={`${styles.whoTab} ${activeWhoTab === id ? styles.whoTabActive : ""}`}>
     { title }
   </li>
 );
};
export default WhoTabNavItem;