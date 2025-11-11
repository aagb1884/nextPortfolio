"use client";
import styles from "@/app/styles/whoQuiz.module.css";
import { Question } from "../../data/questions";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface modalProps {
  setModalOpen: (filterTerm: boolean) => void;
  wrongAnswers: Question[];
}

const WrongAnswersModal: React.FC<modalProps> = ({
  setModalOpen,
  wrongAnswers,
}) => {
  const [answerIndex, setAnswerIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wrongAnswer: Question = wrongAnswers[answerIndex];

  useEffect(() => {
    // Clean up previous audio when switching questions
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (wrongAnswer?.audio) {
      audioRef.current = new Audio(wrongAnswer.audio);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [wrongAnswer]);

  const handlePlayAudio = () => {
    if (!audioRef.current) return;
    setIsPlaying(true);
    audioRef.current.play().catch((err) => {
      console.warn("Audio playback failed:", err);
    });
    audioRef.current.onended = () => setIsPlaying(false);
  };

  function forward() {
    setAnswerIndex((prev) => prev + 1);
    setIsPlaying(false);
  }
  function backward() {
    setAnswerIndex((prev) => prev - 1);
    setIsPlaying(false);
  }

  const fwd = answerIndex >= wrongAnswers.length - 1;
  const back = answerIndex <= 0;
  const styleFwd = fwd ? styles.disabled : styles.btn;
  const styleBck = back ? styles.disabled : styles.btn;

  return (
    <>
      <div
        className={styles.startModalWrapper}
        onClick={() => setModalOpen(false)}
      />
      <div className={styles.startModal}>
        <h2 className={styles.sModalHTxt}>Missed Answers</h2>
        {wrongAnswer.audio && (
          <>
            <button className={styles.btn} onClick={handlePlayAudio}>
              {isPlaying ? "Playing..." : "Play Audio"}
            </button>
          </>
        )}
        {wrongAnswer?.image && (
          <div className={styles.qImageDiv}>
            <Image
              className={styles.quizImage}
              src={wrongAnswer.image.url}
              alt={wrongAnswer.image.alt}
              width={300}
              height={250}
            />
          </div>
        )}
        {wrongAnswer?.question && (
          <p className={styles.wrongText}>{wrongAnswer?.question}</p>
        )}
        <p className={styles.wrongAnswer}>
          <i>
            {wrongAnswer?.officialAnswer
              ? wrongAnswer?.officialAnswer
              : wrongAnswer?.answers[0]}
          </i>
        </p>
        <div className={styles.buttonRow}>
          <button
            className={`${styleBck}`}
            disabled={back}
            onClick={() => {
              backward();
            }}
          >
            Previous
          </button>
          <button
            disabled={fwd}
            className={`${styleFwd}`}
            onClick={() => {
              forward();
            }}
          >
            Next
          </button>
        </div>
        <button className={styles.btn} onClick={() => setModalOpen(false)}>
          Close
        </button>
      </div>
    </>
  );
};

export default WrongAnswersModal;
