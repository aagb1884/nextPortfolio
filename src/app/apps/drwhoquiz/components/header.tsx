"use client";
import Image from "next/image";
import Link from "next/link";
import drWhoLogo from "../../../../../public/images/drWhoQuiz/Doctor-Who-Quiz-Logo.png";
import styles from "@/app/styles/whoQuiz.module.css";

interface HeaderProps {
  setShowCredit: (bool: boolean) => void;
  setShowInstructions: (bool: boolean) => void;
}

const Header = ({ setShowCredit, setShowInstructions }: HeaderProps) => {
  return (
    <header className={styles.whoQuizNav}>
      <p
        onClick={() => {
          setShowInstructions(true);
        }}
      >
        Instructions
      </p>
      <Link href="/apps/drwhoquiz">
        <Image src={drWhoLogo} width={200} alt="dr-who-logo" />
      </Link>
      <p
        onClick={() => {
          setShowCredit(true);
        }}
      >
        Credits
      </p>
    </header>
  );
};

export default Header;
