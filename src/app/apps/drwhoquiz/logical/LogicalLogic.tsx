"use client";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import styles from "@/app/styles/whoQuiz.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CyberQuestion, CyberRound, plotPoint } from "../data/questions";
import SocialMediaShare from "../components/SocialMediaShare";
import InstructionsModal from "../components/InstructionsModal";
import CreditsModal from "../components/CreditsModal";
import Header from "../components/header";
import SortablePlotPoint from "./SortablePlotPoint";
import Countdown from "@/app/ui/Countdown";
import ShareButton from "../../big-finish-generator/bf_components/ShareButton";
import { useGlobalState } from "@/app/context/GlobalStateContext";

interface LogicProps {
  round: CyberRound;
}

const LogicalLogic = ({ round }: LogicProps) => {
  const [currentStory, setCurrentStory] = useState<CyberQuestion[]>([]);
  const [plotPoints, setPlotPoints] = useState<plotPoint[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showInstructionsModal, setShowInstructionsModal] =
    useState<boolean>(false);
  const [showCreditModal, setShowCreditModal] = useState<boolean>(false);
  const [roundScore, setRoundScore] = useState<number>(0);
  const [score, setScore] = useState<number>(1);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [roundOver, setRoundOver] = useState<boolean>(false);
  const [correctStates, setCorrectStates] = useState<Record<number, boolean>>(
    {}
  );
  const [duration, setDuration] = useState<number>(120);
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const { executeScroll } = useGlobalState();
   const questionRef = useRef(null);
  
    useEffect(() => {
      if (showQuiz) {
        executeScroll(questionRef);
      }
    }, [showQuiz]);

  function randomisePlotPoints(array: plotPoint[]) {
    setPlotPoints(
      [...array]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }

  const shuffleArray = (array: CyberQuestion[]) => {
    const shuffPlot = [...array].sort(() => Math.random() - 0.5).slice(0, 1);
    setCurrentStory(shuffPlot);
  };

  useEffect(() => {
    if (round?.questions?.length) {
      shuffleArray(round.questions);
    }
  }, [round]);

  useEffect(() => {
    if (currentStory.length > 0 && currentStory[0]?.plot) {
      randomisePlotPoints(currentStory[0].plot);
    }
  }, [currentStory]);

  //dnd functions
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
    const { active, over } = event;
    //handles item replacing itself
    if (active.id === over?.id) {
      return;
    }
    setPlotPoints((stories) => {
      const itemOriginalPos = stories.findIndex(
        (item) => item.id === active.id
      );
      const itemNewPos = stories.findIndex((item) => item.id === over?.id);

      return arrayMove(stories, itemOriginalPos, itemNewPos);
    });
  }

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
      setRoundOver(true);
      setShowQuiz(false);
    }
  }, [timeLeft]);

  // button functions

  useEffect(() => {
    if (score === plotPoints.length) {
      setRoundScore(timeLeft);
      setRoundOver(true);
      setShowQuiz(false);
    }
  }, [score, plotPoints]);

  function checkAnswers() {
    const correctOrder = [...plotPoints].sort((a, b) => a.id - b.id);
    const newCorrectStates: Record<number, boolean> = {};

    plotPoints.forEach((point, index) => {
      newCorrectStates[point.id] = point === correctOrder[index];
    });
    setCorrectStates(newCorrectStates);
    const score = Object.values(newCorrectStates).filter(
      (isCorrect) => isCorrect
    ).length;
    setScore(score);
    setTimeout(() => {
      setScore(0);
      setCorrectStates({});
    }, 1700);
  }

  const reset = () => {
    shuffleArray(round.questions);
    randomisePlotPoints(currentStory[0].plot);
    setTimeLeft(120);
    setRoundOver(false);
    setShowQuiz(true);
  };

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
        <h1 className={styles.logicHeader}>{round.name}</h1>

        {!showQuiz && !roundOver && (
          <>
            <p className={styles.copy}>{round.copy}</p>
            <aside className={styles.aside}>{round.hint}</aside>
            <button
              className={styles.btn}
              onClick={() => {
                setShowQuiz(true);
              }}
            >
              Start Quiz
            </button>
          </>
        )}

        {showQuiz && (
          <>
            <div className={styles.infoRow} ref={questionRef}>
              <h2>{currentStory[0].story}</h2>
              <Countdown timeLeft={timeLeft} />
            </div>
            <ul className={styles.dndContextUl}>
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                sensors={sensors}
              >
                <SortableContext items={plotPoints}>
                  {plotPoints.map((plotPoint: plotPoint) => (
                    <SortablePlotPoint
                      plotPoint={plotPoint}
                      key={plotPoint.id}
                      isCorrect={correctStates[plotPoint.id] || false}
                    />
                  ))}
                </SortableContext>
              </DndContext>
            </ul>
            <button className={styles.btn} onClick={checkAnswers}>
              Check Answers
            </button>
          </>
        )}
        {!showQuiz && roundOver && (
          <div className={styles.quizOver}>
            <h2>ALL DONE</h2>
            <p>You scored {roundScore}</p>
            <ShareButton setShowModal={setShowModal} showModal={showModal} />
            <button className={styles.btn} onClick={() => reset()}>
              Try Again?
            </button>
          </div>
        )}
        <Link className={styles.link} href={"/apps/drwhoquiz"}>
          Back to Quizzes
        </Link>
      </div>
      <input
        type="hidden"
        onSubmit={() => {
          setDuration(120);
        }}
      />
    </>
  );
};

export default LogicalLogic;
