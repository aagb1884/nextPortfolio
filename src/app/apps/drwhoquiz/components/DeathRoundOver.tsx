"use client";
import { useState } from "react";
import styles from "@/app/styles/whoQuiz.module.css";
import ShareButton from "../../big-finish-generator/bf_components/ShareButton";
import { Question } from "../data/questions";
import Image from "next/image";
import diamond_wall from "../../../../../public/images/drWhoQuiz/diamond_wall.png";

interface DeathRoundOverProps {
  deathRoundReset: () => void;
  isGoodge: boolean;
  goodgeGuess: boolean | null;
  roundScore: number;
  showModal: boolean;
  setShowModal: (b: boolean) => void;
  deathImage: Question | undefined;
  setRoundScore: (n: number) => void;
  setShowScore: (show: boolean) => void;
  showScore: boolean | null;
  deathRoundScore: number;
  setIsAnswerCorrect: (b: boolean) => void;
  isAnswerCorrect: boolean | null;
}
const DeathRoundOver: React.FC<DeathRoundOverProps> = ({
  deathRoundReset,
  isGoodge,
  goodgeGuess,
  roundScore,
  showModal,
  setShowModal,
  deathImage,
  setRoundScore,
  setShowScore,
  showScore,
  deathRoundScore,
  setIsAnswerCorrect,
  isAnswerCorrect,
}) => {
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [goodgeReady, setGoodgeReady] = useState<boolean>(false);
  const win =
    typeof window !== "undefined"
      ? new Audio("/audio/DrWhoQuiz/isGoodge.mp3")
      : null;
  const lose =
    typeof window !== "undefined"
      ? new Audio("/audio/DrWhoQuiz/notGoodge.mp3")
      : null;

  const playSoundEffect = (audio: HTMLAudioElement | null) => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const doublePoints = isGoodge && goodgeGuess;
  const halfPoints = !isGoodge && goodgeGuess;
  const noGoodgeRight = !isGoodge && !goodgeGuess;
  const goodgeWrong = isGoodge && !goodgeGuess;

  const goodgeReveal = () => {
    if (doublePoints || (goodgeWrong && win !== null)) {
      playSoundEffect(win);
    } else if (halfPoints || (noGoodgeRight && lose !== null)) {
      playSoundEffect(lose);
    }
    updateScore();
    setShowScore(true);
  };

  function checkAnswer(answer: string) {
    const lowercaseAnswers = deathImage?.answers.map((e) => e.toLowerCase());
    const correctAnswers = deathImage?.answers;

    if (
      (correctAnswers?.includes(answer.toLowerCase()) ||
        lowercaseAnswers?.includes(answer.toLowerCase())) &&
      answer.trim() !== ""
    ) {
      setRoundScore(roundScore + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  }

  const updateScore = () => {
    if (doublePoints) {
      setRoundScore(roundScore * 2);
    } else if (halfPoints) {
      setRoundScore(Math.round(roundScore / 2));
    } else return;
  };

  const handleAnswerSubmit = () => {
    checkAnswer(userAnswer);
    setUserAnswer("");
    setGoodgeReady(true);
  };

  const skip = () => {
    setUserAnswer("");
    setGoodgeReady(true)
  };

  return (
    <div className={styles.quizOver}>
      {!showScore && deathImage?.question && deathImage.image && (
        <>
          {!goodgeReady && <p>Round Completed! You scored {roundScore}</p>}
          <p>But, for a bonus point...</p>
          <p className={styles.questionText}>{deathImage.question}</p>
          <div className={styles.qImageDiv}>
            <Image
              className={styles.diamondWall}
              src={deathImage.image.url}
              alt={deathImage.image.alt}
              width={0}
              height={0}
              layout="fill"
              objectFit="contain"
            />
            <Image
              className={styles.diamondWall}
              src={diamond_wall}
              alt="A wall made of diamond"
              width={300}
              height={250}
              style={{
                opacity: deathRoundScore > 0 ? 1 - deathRoundScore * 0.1 : 10,
              }}
            />
          </div>
          {!goodgeReady && (
            <>
              <div className={styles.questionInput}>
                <input
                  type="text"
                  value={userAnswer}
                  id="input"
                  placeholder="Type your answer here..."
                  className={styles.textbox}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </div>
              <button
                id="submit"
                className={styles.btn}
                onClick={handleAnswerSubmit}
              >
                Submit
              </button>
              <button id="skip" className={styles.skipBtn} onClick={skip}>
                Skip
              </button>{" "}
            </>
          )}
          <div className={styles.isCorrect}>
            {isAnswerCorrect === true && (
              <p className={styles.correct}>Correct!</p>
            )}
            {isAnswerCorrect === false && (
              <p className={styles.wrong}>Incorrect, sorry.</p>
            )}
            {isAnswerCorrect === null && (
              <p className={styles.placeholder}>&nbsp;</p>
            )}
          </div>
        </>
      )}
      {goodgeReady && !showScore && (
        <>
          <p>You have now scored {roundScore} points.</p>
          <button onClick={goodgeReveal}>Is it Goodge?</button>
        </>
      )}
      {showScore && (
        <>
          {doublePoints && (
            <p>
              It&apos;s Goodge! You were right. You&apos;ve doubled your points.
            </p>
          )}
          {halfPoints && (
            <div className={styles.deathRoundOver}>
              <p>
                It&apos;s <b>not</b> Goodge.
              </p>
              <p>You were wrong.</p>
              <p>Your points are halved.</p>
            </div>
          )}
          {noGoodgeRight && <p>You were wise not to choose Goodge.</p>}
          {goodgeWrong && <p>You were fooolish not to choose Goodge.</p>}
          <p>You have scored {roundScore} points.</p>
          <ShareButton setShowModal={setShowModal} showModal={showModal} />
          <button className={styles.btn} onClick={() => deathRoundReset()}>
            Try Again?
          </button>
        </>
      )}
    </div>
  );
};

export default DeathRoundOver;
