"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/app/styles/whoQuiz.module.css";
import { Question } from "../data/questions";
import Image from "next/image";
import Countdown from "@/app/ui/Countdown";
import { useGlobalState } from "@/app/context/GlobalStateContext";

interface QuestionProps {
  index: number;
  handleAnswer: () => void;
  question: Question;
  checkAnswer: (string: string) => void;
  isAnswerCorrect: boolean | null;
  setIsActive: (bool: boolean) => void;
  isActive: boolean;
  timeLeft: number;
  roundScore: number;
  progress: number;
  currentTime: number;
  showQuiz: boolean;
}

const QuestionComponent = ({
  index,
  handleAnswer,
  question,
  checkAnswer,
  isAnswerCorrect,
  setIsActive,
  isActive,
  timeLeft,
  roundScore,
  progress,
  currentTime,
  showQuiz,
}: QuestionProps) => {
  const [userAnswer, setUserAnswer] = useState<string>("");
  const { executeScroll } = useGlobalState();

  const skip = () => {
    handleAnswer()
    setUserAnswer("")
  }

  const handleAnswerSubmit = () => {
    checkAnswer(userAnswer);
    setUserAnswer("");
    setIsActive(false);
  };

  const handleAudio = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 11000);
    setIsActive(true);
  };

  const questionRef = useRef(null);

  useEffect(() => {
    if (showQuiz) {
      executeScroll(questionRef);
    }
  }, [showQuiz]);

  return (
    <section className={styles.quizQuestion} ref={questionRef}>
      <div className={styles.infoRow}>
        <Countdown timeLeft={timeLeft} />
        <p style={{ fontWeight: "bold" }}>Question {index + 1}.</p>
        <p>Score: {roundScore}</p>
      </div>
      <div>
        {question.question && (
          <p className={styles.questionText}>{question.question}</p>
        )}

        {question.image && (
          <div className={styles.qImageDiv}>
            <Image
              className={styles.quizImage}
              src={question.image.url}
              alt={question.image.alt}
              width={300}
              height={250}
            />
          </div>
        )}

        {question.audio && (
          <>
            <button
              disabled={isActive}
              className={styles.btn}
              onClick={() => {
                handleAudio();
              }}
            >
              Play Audio
            </button>
            <div>
              <progress value={progress} max="100" />
              <div>
                {Math.floor(currentTime) < 10
                  ? `0:0${Math.floor(currentTime)}`
                  : `0:${Math.floor(currentTime)}`}
              </div>
            </div>
          </>
        )}

        <div className={styles.questionInput}>
          {!question.options && (
            <input
              type="text"
              value={userAnswer}
              id="input"
              placeholder="Type your answer here..."
              className={styles.textbox}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          )}
          {question.options && (
            <div className={styles.multipleChoice}>
              {question.options.map((option, index) => (
                <label className={styles.radio} key={index}>
                  <input
                    id="multiple-choice"
                    type="radio"
                    name="answer"
                    className={styles.radioInput}
                    value={option}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    checked={userAnswer === option}
                  />
                  {option}
                </label>
              ))}{" "}
            </div>
          )}

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
        </div>
      </div>
      <div className={styles.isCorrect}>
        {isAnswerCorrect === true && <p className={styles.correct}>Correct!</p>}
        {isAnswerCorrect === false && (
          <p className={styles.wrong}>Incorrect, sorry.</p>
        )}
        {isAnswerCorrect === null && (
          <p className={styles.placeholder}>&nbsp;</p>
        )}
      </div>
    </section>
  );
};

export default QuestionComponent;
