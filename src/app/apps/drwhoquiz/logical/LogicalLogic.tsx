'use client'
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import styles from "@/app/styles/whoQuiz.module.css"
import { useState } from "react";
import { CyberQuestion, CyberRound, plotPoint } from "../data/questions";
import SocialMediaShare from "../components/SocialMediaShare";
import InstructionsModal from "../components/InstructionsModal";
import CreditsModal from "../components/CreditsModal";
import Header from "../components/header";
import SortablePlotPoint from "./SortablePlotPoint"

interface LogicProps {
    round: CyberRound;
}

const LogicalLogic = ({round}:LogicProps) => {
    const [currentStory, setCurrentStory] = useState<CyberQuestion[]>([]);
    const [plotPoints, setPlotPoints] = useState<plotPoint[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showInstructionsModal, setShowInstructionsModal] = useState<boolean>(false);
    const [showCreditModal, setShowCreditModal] = useState<boolean>(false);
    const [roundScore, setRoundScore] = useState<number>(0);
    const [showQuiz, setShowQuiz] = useState<boolean>(false)
    const [roundOver, setRoundOver] = useState<boolean>(false)
    const [correctStates, setCorrectStates] = useState<Record<number, boolean>>({});

    function randomisePlotPoints(array: plotPoint[]){
    setPlotPoints([...array]
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value))
  } 

      const shuffleArray = (array: CyberQuestion[]) => {
              const shuffPlot = [...array].sort(() => Math.random() - 0.5).slice(0, 1)
              setCurrentStory(shuffPlot)
              randomisePlotPoints(currentStory[0].plot)
              setShowQuiz(true)
            }

      console.log(plotPoints.map((point) => point))


    //dnd functions
      const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor,{
          coordinateGetter: sortableKeyboardCoordinates
        }) 
      )
    
      function handleDragEnd(event: DragEndEvent){
        console.log(event)
        const {active, over}=event;
        //handles item replacing itself
        if (active.id===over?.id){
          return
        }
        setPlotPoints(stories=>{
          const itemOriginalPos = stories.findIndex((item)=>item.order===active.id)
          const itemNewPos = stories.findIndex((item)=>item.order===over?.id)
    
          return arrayMove(stories, itemOriginalPos, itemNewPos)
        })
      }


    

  const result = `I played the "${round.name}" round and scored ${roundScore}`

    return ( 
        <>
        <Header setShowCredit={setShowCreditModal} setShowInstructions={setShowInstructionsModal} />
         <div className={styles.quizCopy}>
             {showModal && <SocialMediaShare result={result} setShowModal={setShowModal}/>}
        {showInstructionsModal && <InstructionsModal setModalOpen={setShowInstructionsModal}/>}
        {showCreditModal && <CreditsModal setModalOpen={setShowCreditModal}/>}
        <h1>{round.name}</h1>
            <p>{round.copy}</p>
            <aside className={styles.aside}>{round.hint}</aside>
            {!showQuiz && !roundOver && <button onClick={() => {shuffleArray(round.questions)}}>Start Quiz</button>}
       
        <p>Logic</p>
           {showQuiz && (
        <>
      <ul className={styles.dndContextUl}>
        <DndContext 
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        sensors={sensors}
        >
        <SortableContext items={plotPoints}>
        {plotPoints.map((plotPoint: plotPoint) => (
          <SortablePlotPoint 
          plotPoint={plotPoint} key={plotPoint.id} 
          isCorrect={correctStates[plotPoint.id] || false}/>
        ))}
        </SortableContext>
        </DndContext>
      </ul>
      </>
      )}
        </div>
        </>
     );
}
 
export default LogicalLogic;