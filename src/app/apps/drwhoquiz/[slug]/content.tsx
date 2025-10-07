'use client'
import { Question, Round } from "../data/questions"
import { useState } from 'react';
import styles from "@/app/styles/whoQuiz.module.css"
import Image from "next/image";

interface PageContentProps {
  round: Round;
}

const PageContent = ({round}: PageContentProps) => {

      const [quizRound, setQuizRound] = useState<Question[]>([])
      const [showQuiz, setShowQuiz] = useState<boolean>(false)
    
    
      const set10Questions = (array: Question[]) => {
        const ten = [...array].sort(() => Math.random() - 0.5).slice(0, 10)
        setQuizRound(ten)
        setShowQuiz(true)
      }


    return ( 
    <div className={styles.quizCopy}>
      <h1>{round.name}</h1>
      {round.copy && <p>{round.copy}</p>}
      {round.hint && <aside>{round.hint}</aside>}
      <button onClick={() => {set10Questions(round.questions)}}>Start Quiz</button>
      {showQuiz && (
        <div key={round.name}>
        {quizRound.map((question, index) => (
        <>
        <div>{index + 1}. {question.question} </div>
        {question.image && <Image src={question.image.url} alt={question.image.alt} width={600} height={400} />}
        {question.options && 
          <div className={styles.multipleChoice}>
      { question.options.map((option, index) => (
        <label className="radio" key={index}>
          <input
            id="multiple-choice"
            type="radio"
            name="answer"
            value={option}
            // onChange={(e) => setUserAnswer(e.target.value)}
            // checked={userAnswer === option}
          />
          {option}
        </label>
       
      ))} </div>}
        </>
      ))}
      </div>
      )}
      </div>
     );
}
 
export default PageContent;