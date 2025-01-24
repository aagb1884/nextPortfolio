import React from "react";
const WhoTabNavItem = ({ id, title, activeWhoTab, setActiveWhoTab }) => {
 
 const handleClick = () => {
   setActiveWhoTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeWhoTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default WhoTabNavItem;