'use client'
import { Question, Round } from "../data/questions"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import styles from "@/app/styles/whoQuiz.module.css"
import QuestionComponent from "../components/Question";
import ShareButton from "../../big-finish-generator/bf_components/ShareButton";
import SocialMediaShare from "../components/SocialMediaShare";


interface PageContentProps {
  round: Round;
  name: string;
}

const PageContent = ({round, name}: PageContentProps) => {

      const [quizRound, setQuizRound] = useState<Question[]>([])
      const [showQuiz, setShowQuiz] = useState<boolean>(false)
      const [roundOver, setRoundOver] = useState<boolean>(false)
      const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [roundScore, setRoundScore] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
     const [isActive, setIsActive] = useState<boolean>(false);
  
    //audio
  
    const audioRef = useRef<HTMLAudioElement | null>(null);

// When currentQuestionIndex changes, update the audio
useEffect(() => {
  if (typeof window !== 'undefined') {
    const newAudio = new Audio(round.questions[currentQuestionIndex].audio);
    audioRef.current = newAudio;
  }
}, [currentQuestionIndex]);

// Handle playback when isActive changes
useEffect(() => {
  const audio = audioRef.current;
  if (audio && isActive) {
    audio.play();
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

    
      const set10Questions = (array: Question[]) => {
        const ten = [...array].sort(() => Math.random() - 0.5).slice(0, 10)
        setQuizRound(ten)
        setShowQuiz(true)
      }

       const handleAnswer = () => {
        // Logic to handle the user's answer and move to the next question
        if (currentQuestionIndex < quizRound.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setIsActive(false)
        } else {
          setShowQuiz(false);
          setRoundOver(true);
        }
      };

       function checkAnswer(answer: string) {
        const lowercaseAnswers = quizRound[currentQuestionIndex].answers.map(e => e.toLowerCase());
        const correctAnswers = quizRound[currentQuestionIndex].answers;

       if (
            (correctAnswers.includes(answer) ||
            lowercaseAnswers.includes(answer)) && answer.trim() !== ''
          ) {
            setRoundScore(roundScore + 1);
            setIsAnswerCorrect(true);
          } else {
            setIsAnswerCorrect(false);
          }
          handleAnswer();
      };

      

    const renderQuiz = () => {
    const currentQuestion = quizRound[currentQuestionIndex];
    return (
      <div className={`${name}_question`}>
         <QuestionComponent
        index={currentQuestionIndex}
          question={currentQuestion}
          checkAnswer={checkAnswer}
          isAnswerCorrect={isAnswerCorrect}
          setIsActive={setIsActive}
        />
        <br />
        <br />
        {/* <Countdown key={currentQuestionIndex} /> */}
      </div>
    );
  };

  const reset = () => {
    setCurrentQuestionIndex(0)
    set10Questions(round.questions)
    setIsActive(false)
  }

  const result = `I played ${round.name} and scored ${roundScore}/10`


    return ( 
    <div className={styles.quizCopy}>
        {showModal && <SocialMediaShare result={result} setShowModal={setShowModal}/>}
      <h1>{round.name}</h1>
      {round.copy && <p>{round.copy}</p>}
      {round.hint && <aside>{round.hint}</aside>}
      {!showQuiz && !roundOver && <button onClick={() => {set10Questions(round.questions)}}>Start Quiz</button>}
       <div>
        {showQuiz && renderQuiz()}
        {!showQuiz && roundOver && (
        <div className={styles.quizOver}>
          <p>Round Completed! You scored {roundScore}/10</p> 
          <ShareButton setShowModal={setShowModal} showModal={showModal} />
          <button onClick={() => reset()}>Try Again?</button> 
          
        </div>  
        )}
      </div>
      <Link href={"/apps/drwhoquiz"}>Back to Quizzes</Link>
     </div>
     );
}
 
export default PageContent;