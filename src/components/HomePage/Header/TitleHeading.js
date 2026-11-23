"use client";
import { usePathname } from "next/navigation";
import styles from "../../../app/styles/Header.module.css";

const Header = () => {
  const params = usePathname();
  const headingWord = params.includes("shop") ? `Shop` : `Portfolio`;

  return (
    <div className={styles.Heading}>
      <h1>
        <span className={styles.fancy}>Andrew Blair&apos;s {headingWord}</span>
      </h1>
    </div>
  );
};

export default Header;
