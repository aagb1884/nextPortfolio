"use client";
import Header from "./components/header";
import RoundButtons from "./components/buttons/RoundButtons";
import InstructionsModal from "./components/modals/InstructionsModal";
import CreditsModal from "./components/modals/CreditsModal";
import styles from "../../styles/whoQuiz.module.css";
import { useState } from "react";

const MainQuizPageContent = () => {
  const [showInstructionsModal, setShowInstructionsModal] =
    useState<boolean>(false);
  const [showCreditModal, setShowCreditModal] = useState<boolean>(false);

  return (
    <div className={styles.drWhoQuizLanding}>
      <Header
        setShowCredit={setShowCreditModal}
        setShowInstructions={setShowInstructionsModal}
      />
      {showInstructionsModal && (
        <InstructionsModal setModalOpen={setShowInstructionsModal} />
      )}
      {showCreditModal && <CreditsModal setModalOpen={setShowCreditModal} />}
      <RoundButtons />
    </div>
  );
};

export default MainQuizPageContent;
