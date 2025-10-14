'use client'
import Header from "./components/header";
import RoundButtons from "./components/RoundButtons";
import InstructionsModal from "./components/InstructionsModal";
import CreditsModal from "./components/CreditsModal";
import styles from "../../styles/whoQuiz.module.css";
import { useState } from "react";

const MainQuizPageContent = () => {
     const [showInstructionsModal, setShowInstructionsModal] = useState<boolean>(false);
        const [showCreditModal, setShowCreditModal] = useState<boolean>(false);

    return ( 
    <div className={styles.drWhoQuizLanding}>
    <Header setShowCredit={setShowCreditModal} setShowInstructions={setShowInstructionsModal}/>
    {showInstructionsModal && <InstructionsModal setModalOpen={setShowInstructionsModal}/>}
    {showCreditModal && <CreditsModal setModalOpen={setShowCreditModal}/>}
    <RoundButtons />
    </div>
     );
}
 
export default MainQuizPageContent;