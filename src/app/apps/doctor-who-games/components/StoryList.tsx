'use client'
import { Story, stories } from "../data/stories";
import React from "react";
import { useState, useEffect } from "react";
import SortableStory from "./SortableStory";
import Countdown from "./countdown";
import Filter from "./Filter";
import LightHeader from "./LightHeader";
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import styles from "../../../styles/drwho.module.css";
import Difficulty from "./DifficultySelect";
import InstructionsModal from "./InstructionsModal";

export default function StoryList() {
  const [filter, setFilter] = useState('All');
  const [storyList, setStoryList] = useState<Story[]>([]);
  const [score, setScore] = useState(0);
  const [scoreVisible, setScoreVisible] = useState(false);
  const [duration, setDuration] = useState<number | string>(120);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState(false)
  // const [showWin, setShowWin] = useState(false)
  // const [showLose, setShowLose] = useState(false)

  //timer
  const handleSetDuration = (): void => {
      if (typeof duration === "number" && duration > 0) {
        setTimeLeft(duration);
        setIsActive(false);
      }
    };

    // const handleStart = (): void => {
    //   if (timeLeft > 0) {
    //     setIsActive(true);
    //   }
    // };

    // const handleReset = (): void => {
    //   setIsActive(false);
    //   setTimeLeft(typeof duration === "number" ? duration : 0);
    // };

  useEffect(() => {
    handleSetDuration();
  }, [duration])

  const setTimer = (time: number) => {
    setDuration(time);
    handleSetDuration();
    if (isActive) {
      reset();
    }
  }

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      
      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    }, [isActive, timeLeft]);
  
  // filter
  const handleFilter = (filterTerm: string) => {
    setFilter(filterTerm)
    if (isActive) {
      reset();
    }
  }

  const filteredStories = 
  filter === 'All' ? stories : stories.filter((story) => story.doctor === filter);

  //get stories
  function getRandomStories(){
    return [...filteredStories]
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0,8)
  } 

  useEffect(() => {
    const newRandomStories = getRandomStories();
    setStoryList(newRandomStories)
  }, [filter])

 
  function checkAnswers(){
    let i = 0;
    const correctOrder = [...storyList].sort((a, b) => a.id - b.id);
    while (i < storyList.length) {
      if (storyList[i] === correctOrder[i]){
        setScore((prevScore) => prevScore + 1)
      }
      i++;  
    }
  }
 

  const checkScore = () => {
    console.log('score checked')
    checkAnswers()
    setScoreVisible(!scoreVisible)
  }

  const reset = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 2000)
    setTimeLeft(typeof duration === "number" ? duration : 0);
    setStoryList(getRandomStories());
    setScoreVisible(false);
    setScore(0);
  }

//dnd functions
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter: sortableKeyboardCoordinates
    }) 
  )

  function handleDragEnd(event: DragEndEvent){
    setScoreVisible(false);
    setScore(0);
    console.log(event)
    const {active, over}=event;
    //handles item replacing itself
    if (active.id===over?.id){
      return
    }
    setStoryList(stories=>{
      const itemOriginalPos = stories.findIndex((item)=>item.id===active.id)
      const itemNewPos = stories.findIndex((item)=>item.id===over?.id)

      return arrayMove(stories, itemOriginalPos, itemNewPos)
    })
  }


  return (
    <div className={styles.drWhoDndContainer}>
      <LightHeader />
      {/* <button onClick={handleStart}>Start timer</button> */}
      <div className={styles.dropdownMenus}>
      <Difficulty 
      duration={duration}
      setTimer={setTimer} />
      <Filter 
      stories={stories}
      filter={filter}
      handleFilter={handleFilter} />
      </div>
      <div className={styles.buttonRow}>
      <button
      onClick={() => {setShowInstructions(!showInstructions)}}
      className={styles.dndBtn}
      >How to play</button>
      <button 
      onClick={() => {setIsActive(true)}}
      className={styles.dndBtn}
        >BEGIN</button>
      </div>
      {showInstructions && (
        <InstructionsModal 
        showInstructions={showInstructions}
        setShowInstructions={setShowInstructions}/>
      )}
      {isActive && (
        <>
      <ul className={styles.dndContextUl}>
        <DndContext 
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        sensors={sensors}
        >
        <SortableContext items={stories}>
        {storyList.map((story: Story) => (
          <SortableStory story={story} key={story.id} />
        ))}
        </SortableContext>
        </DndContext>
      </ul>
      <div className={styles.dndButtonDiv}>
      <button onClick={checkScore}
      disabled={scoreVisible}
      className={styles.checkScoreBtn}>Have I the right (answers)?</button>
     <button onClick={reset}
     className={styles.resetBtn}>Try again</button>
     </div>
     <div>
     {scoreVisible && (
      <p>{score}</p>
     )}
     </div>
     <Countdown 
      timeLeft={timeLeft}
     />
     </>
    )}
    </div>
  );
}
