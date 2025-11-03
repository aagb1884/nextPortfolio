"use client";
import { useState } from "react";
import styles from "@/app/styles/whoQuiz.module.css";
import ShareButton from "../../big-finish-generator/bf_components/ShareButton";
import { Question } from "../data/questions";
import Image from "next/image";
import diamond_wall from "../../../../../public/images/drWhoQuiz/diamond_wall.png";

interface DeathRoundOverProps {
  deathRoundReset: () => void;
  isGooch: boolean;
  goochGuess: boolean | null;
  roundScore: number;
  showModal: boolean;
  setShowModal: (b: boolean) => void;
  deathImage: Question | undefined;
  setRoundScore: (n: number) => void;
  setShowScore: (show: boolean) => void;
  showScore: boolean | null;
  deathRoundScore: number;
  setIsAnswerCorrect: (b: boolean) => void;
  isAnswerCorrect: boolean | null
}
const DeathRoundOver: React.FC<DeathRoundOverProps> = ({
  deathRoundReset,
  isGooch,
  goochGuess,
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
  const [goochReady, setGoochReady] = useState<boolean>(false);
  const win =
    typeof window !== "undefined"
      ? new Audio("/audio/BigFinish/thalia_1.mp3")
      : null;
  const lose =
    typeof window !== "undefined"
      ? new Audio("/audio/BigFinish/thalia_4.mp3")
      : null;

  const playSoundEffect = (audio: HTMLAudioElement | null) => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const doublePoints = isGooch && goochGuess;
  const halfPoints = !isGooch && goochGuess;
  const noGoochRight = !isGooch && !goochGuess;
  const goochWrong = isGooch && !goochGuess;

  const goochReveal = () => {
    if (doublePoints || (goochWrong && win !== null)) {
      playSoundEffect(win);
    } else if (halfPoints || (noGoochRight && lose !== null)) {
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
      setRoundScore(roundScore / 2);
    } else return;
  };

  const handleAnswerSubmit = () => {
    checkAnswer(userAnswer);
    setUserAnswer("");
    setGoochReady(true);
  };

  const skip = () => {
    updateScore();
    setUserAnswer("");
  };

  return (
    <div className={styles.quizOver}>
      {!showScore && deathImage?.question && deathImage.image && (
        <>
          {!goochReady && <p>Round Completed! You scored {roundScore}</p>}
          <p>But, for a bonus point...</p>
          <p className={styles.questionText}>{deathImage.question}</p>
          <div className={styles.qImageDiv}>
            <Image
              className={styles.quizImage}
              src={deathImage.image.url}
              alt={deathImage.image.alt}
              width={300}
              height={250}
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
          </button>
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
      {goochReady && !showScore && (
        <>
          <p>You have now scored {roundScore} points.</p>
          <button onClick={goochReveal}>Is it Gooch?</button>
        </>
      )}
      {showScore && (
        <>
          {doublePoints && (
            <p>
              It was Gooch! You were right. You&apos;ve doubled your points.
            </p>
          )}
          {halfPoints && (
            <p>It wasn&apos;t Gooch. You were wrong. Your points are halved.</p>
          )}
          {noGoochRight && <p>You were wise not to choose Gooch.</p>}
          {goochWrong && <p>You were fooolish not to choose Gooch.</p>}
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
