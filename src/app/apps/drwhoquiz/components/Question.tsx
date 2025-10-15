'use client'
import React, { useState } from "react";
import styles from "@/app/styles/whoQuiz.module.css"
import { Question } from "../data/questions";
import Image from "next/image";
import Countdown from "@/app/ui/Countdown";

interface QuestionProps {
  index: number;
  skip: () => void;
  question: Question;
  checkAnswer: (string: string) => void;
  isAnswerCorrect: boolean | null;
  setIsActive: (bool: boolean) =>  void;
  timeLeft: number;
  roundScore: number;
}

const QuestionComponent = ({index, skip, question, checkAnswer, isAnswerCorrect, setIsActive, timeLeft, roundScore}: QuestionProps) => {
      const [userAnswer, setUserAnswer] = useState<string>("");

       const handleAnswerSubmit = () => {
        checkAnswer(userAnswer);
        setUserAnswer("");
        setIsActive(false)
    }

   

    return ( <section className={styles.quizQuestion}>
        <div className={styles.infoRow}>
            <Countdown timeLeft={timeLeft}/>
              <p style={{fontWeight: "bold"}}>Question {index + 1}.</p>
            <p>Score: {roundScore}</p>
        </div>
        {question.question && <p className={styles.questionText}>{question.question}</p>}
        
        {question.image && <div className={styles.qImageDiv}>
          <Image className={styles.quizImage} src={question.image.url} alt={question.image.alt} width={400} height={300} 
        /> </div>}
        
        {question.audio && <button className={styles.btn}  onClick={() => {setIsActive(true)}}>Play Audio</button>}

        <div className={styles.questionInput}>
        {!question.options && (
            <input type="text" 
            value={userAnswer} 
            id="input" 
            placeholder="Type your answer here..." 
            className={styles.textbox}
            onChange={(e) => setUserAnswer(e.target.value)}/> 
        )}
        {question.options && 
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
       
      ))} </div>}

    <button id="submit" 
    className={styles.btn} 
    onClick={handleAnswerSubmit}
    >Submit</button>
    <button id="submit" 
    className={styles.skipBtn} 
    onClick={skip}
    >Skip</button>
    </div>
    <div className={styles.isCorrect}>
    {isAnswerCorrect === true && (
            <p className={styles.correct}>Correct!</p>
        )}
        {isAnswerCorrect === false && (
            <p className={styles.wrong} >Incorrect, sorry.</p>
        )}
         {isAnswerCorrect === null && (
    <p className={styles.placeholder}>&nbsp;</p> 
  )}
    </div>
      
</section>
     );
}
 
export default QuestionComponent;