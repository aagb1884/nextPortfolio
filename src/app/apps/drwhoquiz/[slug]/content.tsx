"use client";
import { Question, Round } from "../data/questions";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/app/styles/whoQuiz.module.css";
import QuestionComponent from "../components/Question";
import ShareButton from "../../big-finish-generator/bf_components/ShareButton";
import SocialMediaShare from "../components/SocialMediaShare";
import Header from "../components/header";
import InstructionsModal from "../components/modals/InstructionsModal";
import CreditsModal from "../components/modals/CreditsModal";
import GoodgeChoiceModal from "../components/modals/GoodgeChoiceModal";
import DeathRoundOver from "../components/DeathRoundOver";
import WrongAnswersModal from "../components/modals/WrongAnswersModal";
import { WrongButton } from "../components/buttons/WrongButton";
import { TryAgain } from "../components/buttons/TryAgain";

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
  const [deathRoundScore, setDeathRoundScore] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAnswersModal, setAnswersModal] = useState<boolean>(false);
  // goodge guessing game states
  const [showGoodgeChoiceModal, setShowGoodgeChoiceModal] =
    useState<boolean>(false);
  const [goodgeGuess, setGoodgeGuess] = useState<boolean | null>(null);
  const [isGoodge, setIsGoodge] = useState<boolean | null>(null);
  const [deathImage, setDeathImage] = useState<Question | undefined>();
  const [showInstructionsModal, setShowInstructionsModal] =
    useState<boolean>(false);
  const [showCreditModal, setShowCreditModal] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(60);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [filterType, setFilterType] = useState<string | null>(null);

  // is it goodge game
  const isDeathRound = round.name === "Death!";

  const deathRoundReset = () => {
    setCurrentQuestionIndex(0);
    setIsActive(false);
    setIsAnswerCorrect(null);
    setShowScore(null);
    setRoundOver(false);
    setDeathRoundScore(0);
    setRoundScore(0);
    setIsGoodge(null);
    setDeathImage(undefined);
    setWrongAnswers([]);
    if (isDeathRound) {
      setShowGoodgeChoiceModal(true);
    }
  };

  const randomDeathImage = (array: Question[]) => {
    const one = [...array].sort(() => Math.random() - 0.5).slice(0, 1);
    const selected = one[0];
    setDeathImage(selected);
    if (selected?.answers.includes("Terror of the Autons")) {
      setIsGoodge(true);
    } else {
      setIsGoodge(false);
    }
  };
  // question and answer handling

  const set10Questions = (array: Question[]) => {
    if (isDeathRound && goodgeGuess === null) {
      setShowGoodgeChoiceModal(true);
    } else {
      const ten = [...array].sort(() => Math.random() - 0.5).slice(0, 10);

      if (ten[0]?.audio) {
        const newAudio = new Audio(ten[0].audio);
        audioRef.current = newAudio;
      }

      setQuizRound(ten);
      setShowQuiz(true);
      setTimeLeft(60);
    }
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

  function addWrongAnswer(question: Question) {
    setWrongAnswers([...wrongAnswers, question]);
  }

  function checkAnswer(answer: string) {
    const lowercaseAnswers = quizRound[currentQuestionIndex].answers.map((e) =>
      e.toLowerCase()
    );
    const correctAnswers = quizRound[currentQuestionIndex].answers;

    if (
      correctAnswers.includes(answer.trim()) ||
      lowercaseAnswers.includes(answer.toLowerCase().trim())
    ) {
      setRoundScore(roundScore + timeLeft);
      if (isDeathRound) {
        setDeathRoundScore((prev) => prev + 1);
      }
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

  const filterQuestions = (x: string) => {
    const filtered: Question[] = round?.questions.filter((question) =>
      question.tags?.includes(x)
    );
    return filtered;
  };

  const enoughNewQuestions = filterQuestions("New").length >= 10;
  const enoughClassicQuestions = filterQuestions("Classic").length >= 10;

  const setNewQuestions = () => {
    const newQuestions = filterQuestions("New");
    set10Questions(newQuestions);
    setFilterType("New");
  };
  const setClassicQuestions = () => {
    const newQuestions = filterQuestions("Classic");
    set10Questions(newQuestions);
    setFilterType("Classic");
  };

  const renderQuiz = () => {
    const currentQuestion = quizRound[currentQuestionIndex];
    return (
      <div className={`${name}_question`}>
        <QuestionComponent
          timeLeft={timeLeft}
          handleAnswer={handleAnswer}
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
          addWrongAnswer={addWrongAnswer}
        />
      </div>
    );
  };

  const reset = () => {
    if (filterType === "New") {
      setCurrentQuestionIndex(0);
      const newQuestions = filterQuestions("New");
      set10Questions(newQuestions);
      setIsActive(false);
      setWrongAnswers([]);
    } else if (filterType === "Classic") {
      setCurrentQuestionIndex(0);
      const newQuestions = filterQuestions("Classic");
      set10Questions(newQuestions);
      setIsActive(false);
      setWrongAnswers([]);
    } else {
      setCurrentQuestionIndex(0);
      set10Questions(round.questions);
      setIsActive(false);
      setWrongAnswers([]);
    }
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
      addWrongAnswer(quizRound[currentQuestionIndex]);
    }
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [currentQuestionIndex]);

  //audio

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAudio = !!quizRound?.[currentQuestionIndex]?.audio;

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      quizRound.length === 10 &&
      !isDeathRound &&
      hasAudio
    ) {
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
        {showGoodgeChoiceModal && (
          <GoodgeChoiceModal
            setModalOpen={setShowGoodgeChoiceModal}
            setGoodgeGuess={setGoodgeGuess}
            randomDeathImage={randomDeathImage}
            setShowScore={setShowScore}
          />
        )}
        {showAnswersModal && (
          <WrongAnswersModal
            setModalOpen={setAnswersModal}
            wrongAnswers={wrongAnswers}
          />
        )}
        <h1 className={styles.roundName}>{round.name}</h1>
        {round.copy && <p className={styles.copy}>{round.copy}</p>}
        {round.hint && <aside className={styles.aside}>{round.hint}</aside>}
        {!showQuiz && !roundOver && (
          <>
            <button
              className={styles.btn}
              onClick={() => {
                set10Questions(round.questions);
              }}
            >
              Start Quiz
            </button>
            <div className={styles.btnRow}>
              {enoughNewQuestions && (
                <button
                  className={styles.newBtn}
                  onClick={() => {
                    setNewQuestions();
                  }}
                >
                  New Series Questions Only
                </button>
              )}
              {enoughClassicQuestions && (
                <button
                  className={styles.classicBtn}
                  onClick={() => {
                    setClassicQuestions();
                  }}
                >
                  Classic Series Questions Only
                </button>
              )}
            </div>
          </>
        )}

        <div>
          {showQuiz && renderQuiz()}
          {!showQuiz && roundOver && !isDeathRound && (
            <div className={styles.quizOver}>
              <p style={{ margin: "2px" }}>
                Round Completed! You scored {roundScore}
              </p>
              <ShareButton setShowModal={setShowModal} showModal={showModal} />
              {wrongAnswers.length !== 0 && (
                <WrongButton setModalOpen={setAnswersModal} />
              )}
              <TryAgain reset={reset} />
            </div>
          )}

          {isDeathRound && roundOver && (
            <DeathRoundOver
              deathRoundReset={deathRoundReset}
              isGoodge={isGoodge}
              goodgeGuess={goodgeGuess}
              roundScore={roundScore}
              setRoundScore={setRoundScore}
              showModal={showModal}
              setShowModal={setShowModal}
              deathImage={deathImage}
              setShowScore={setShowScore}
              showScore={showScore}
              deathRoundScore={deathRoundScore}
              setIsAnswerCorrect={setIsAnswerCorrect}
              isAnswerCorrect={isAnswerCorrect}
              setModalOpen={setAnswersModal}
            />
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
