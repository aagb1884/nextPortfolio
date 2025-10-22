"use client";
import { Question, Round } from "../data/questions";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/app/styles/whoQuiz.module.css";
import QuestionComponent from "../components/Question";
import ShareButton from "../../big-finish-generator/bf_components/ShareButton";
import SocialMediaShare from "../components/SocialMediaShare";
import Header from "../components/header";
import InstructionsModal from "../components/InstructionsModal";
import CreditsModal from "../components/CreditsModal";

interface PageContentProps {
  round: Round;
  name: string;
}

const PageContent = ({ round, name }: PageContentProps) => {
  const [quizRound, setQuizRound] = useState<Question[]>([]);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [roundOver, setRoundOver] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [roundScore, setRoundScore] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showInstructionsModal, setShowInstructionsModal] =
    useState<boolean>(false);
  const [showCreditModal, setShowCreditModal] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(60);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  // question and answer handling

  const set10Questions = (array: Question[]) => {
    const ten = [...array].sort(() => Math.random() - 0.5).slice(0, 10);

    if (ten[0]?.audio) {
      const newAudio = new Audio(ten[0].audio);
      audioRef.current = newAudio;
    }

    setQuizRound(ten);
    setShowQuiz(true);
  };

  const handleAnswer = () => {
    // Logic to handle the user's answer and move to the next question
    if (currentQuestionIndex < quizRound.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsActive(false);
      setProgress(0);
      setCurrentTime(0);
    } else {
      setShowQuiz(false);
      setRoundOver(true);
    }
  };

  function checkAnswer(answer: string) {
    const lowercaseAnswers = quizRound[currentQuestionIndex].answers.map((e) =>
      e.toLowerCase()
    );
    const correctAnswers = quizRound[currentQuestionIndex].answers;

    if (
      (correctAnswers.includes(answer) || lowercaseAnswers.includes(answer)) &&
      answer.trim() !== ""
    ) {
      setRoundScore(roundScore + timeLeft);
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 5000);
      setIsAnswerCorrect(true);
      handleAnswer();
    } else {
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 5000);
      setIsAnswerCorrect(false);
    }
  }

  const renderQuiz = () => {
    const currentQuestion = quizRound[currentQuestionIndex];
    return (
      <div className={`${name}_question`}>
        <QuestionComponent
          timeLeft={timeLeft}
          skip={handleAnswer}
          index={currentQuestionIndex}
          question={currentQuestion}
          checkAnswer={checkAnswer}
          isAnswerCorrect={isAnswerCorrect}
          setIsActive={setIsActive}
          isActive={isActive}
          roundScore={roundScore}
          progress={progress}
          currentTime={currentTime}
          showQuiz={showQuiz}
        />
      </div>
    );
  };

  const reset = () => {
    setCurrentQuestionIndex(0);
    set10Questions(round.questions);
    setIsActive(false);
  };

  //timer
  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
    }
  };

  useEffect(() => {
    handleSetDuration();
  }, [duration]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(duration);
    }
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [currentQuestionIndex]);

  //audio

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && quizRound.length === 10) {
      const newAudio = new Audio(quizRound[currentQuestionIndex].audio);
      audioRef.current = newAudio;

      const handleTimeUpdate = () => {
        setCurrentTime(newAudio.currentTime);
        setProgress((newAudio.currentTime / newAudio.duration) * 100);
      };
      newAudio.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        newAudio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentQuestionIndex, quizRound]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isActive) {
      audio.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    } else if (audio && !isActive) {
      audio.pause();
      audio.currentTime = 0;
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [isActive]);

  const result = `I played the "${round.name}" round and scored ${roundScore}`;

  return (
    <>
      <Header
        setShowCredit={setShowCreditModal}
        setShowInstructions={setShowInstructionsModal}
      />
      <div className={styles.quizCopy}>
        {showModal && (
          <SocialMediaShare result={result} setShowModal={setShowModal} />
        )}
        {showInstructionsModal && (
          <InstructionsModal setModalOpen={setShowInstructionsModal} />
        )}
        {showCreditModal && <CreditsModal setModalOpen={setShowCreditModal} />}
        <h1 className={styles.roundName}>{round.name}</h1>
        {round.copy && <p className={styles.copy}>{round.copy}</p>}
        {round.hint && <aside className={styles.aside}>{round.hint}</aside>}
        {!showQuiz && !roundOver && (
          <button
            className={styles.btn}
            onClick={() => {
              set10Questions(round.questions);
            }}
          >
            Start Quiz
          </button>
        )}
        <div>
          {showQuiz && renderQuiz()}
          {!showQuiz && roundOver && (
            <div className={styles.quizOver}>
              <p>Round Completed! You scored {roundScore}</p>
              <ShareButton setShowModal={setShowModal} showModal={showModal} />
              <button className={styles.btn} onClick={() => reset()}>
                Try Again?
              </button>
            </div>
          )}
        </div>
        <Link className={styles.link} href={"/apps/drwhoquiz"}>
          Back to Quizzes
        </Link>
      </div>
      <input
        type="hidden"
        onSubmit={() => {
          setDuration(60);
        }}
      />
    </>
  );
};

export default PageContent;
