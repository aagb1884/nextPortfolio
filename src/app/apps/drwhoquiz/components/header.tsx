'use client'
import Image from "next/image";
import drWhoLogo from "../../../../../public/images/drWhoQuiz/Doctor-Who-Logo.png"
import styles from "@/app/styles/whoQuiz.module.css"

interface HeaderProps {
    setShowCredit: (bool: boolean) => void;
    setShowInstructions: (bool: boolean) => void;
}

const Header = ({setShowCredit, setShowInstructions}: HeaderProps) => {
    return (<header className={styles.whoQuizNav}>
        <p onClick={() => {setShowInstructions(true)}}>Instructions</p>
                <Image 
                    src={drWhoLogo} 
                    width={100}
                     alt="dr-who-logo"
                     />
                     <p onClick={() => {setShowCredit(true)}}>Credits</p>
                     </header>
     );
}
 
export default Header;