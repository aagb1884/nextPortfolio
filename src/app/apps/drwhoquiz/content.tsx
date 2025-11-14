"use client";
import Header from "./components/header";
import RoundButtons from "./components/buttons/RoundButtons";
import InstructionsModal from "./components/modals/InstructionsModal";
import CreditsModal from "./components/modals/CreditsModal";
import styles from "../../styles/whoQuiz.module.css";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "./data/functions";
import { roundBtn, roundBtns } from "./data/round-btns";

const MainQuizPageContent = () => {
  const [showInstructionsModal, setShowInstructionsModal] =
    useState<boolean>(false);
  const [showCreditModal, setShowCreditModal] = useState<boolean>(false);
  const [roundButtons, setRoundButtons] = useState<roundBtn[]>(roundBtns)
  const { width } = useWindowDimensions();
  const mobile = width !== undefined && width < 451;

  useEffect(() => {
    if (mobile) {
      const sliced = roundBtns.slice(0,10)
      setRoundButtons(sliced)
    }
  }, [width])

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
      <RoundButtons roundButtons={roundButtons}/>
    </div>
  );
};

export default MainQuizPageContent;
