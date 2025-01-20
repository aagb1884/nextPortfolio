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
import WinModal from "./Win";
import LoseModal from "./Lose";
import FilterEra from "./FilterByEra";

export default function StoryList() {
  const [filter, setFilter] = useState<string>('All');
  const [filterEra, setFilterEra] = useState<string>('All');
  const [storyList, setStoryList] = useState<Story[]>([]);
  const [score, setScore] = useState<number>(0);
  const [timeVisible, setTimeVisible] = useState<boolean>(false);
  const [scoreVisible, setScoreVisible] = useState<boolean>(false);
  const [duration, setDuration] = useState<number | string>(120);
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false)
  const [showWin, setShowWin] = useState<boolean>(false)
  const [showLose, setShowLose] = useState<boolean>(false)

  //timer
  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
    }
  };

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
  if (isActive && timeLeft > 0 && score !== 8) {
    setTimeVisible(true);
    const timerId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
    
    return () => clearInterval(timerId);
  } else if (isActive && timeLeft === 0) {
    setShowInstructions(false);
    setShowLose(!showLose)
  }
  }, [isActive, timeLeft]);
  
  // filter
  const handleFilter = (filterTerm: string) => {
    setFilter(filterTerm);
    setFilterEra('All');
    if (isActive) {
      reset();
    }
  }

  const handleFilterEra = (filterTerm: string) => {
    setFilterEra(filterTerm);
    setFilter('All');
    if (isActive) {
      reset();
    }
  }

  let filteredStories = stories;
  if (filter !== 'All' || filterEra !== 'All'){
    filteredStories = stories.filter((story) => {
      const doctorMatch = story.doctor === filter || filter === 'All';
      const eraMatch = story.era === filterEra || filterEra === 'All';

      return (
        doctorMatch && eraMatch
      )
    })
  }

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
  }, [filter, filterEra])

 
  useEffect(() => {
    if (score === 8) {
      setShowWin(!showWin)
    }
  }, [score])

// button functions
  function checkAnswers(){
    let i = 0;
    const correctOrder = [...storyList].sort((a, b) => a.id - b.id);
    while (i < storyList.length) {
      if (storyList[i] === correctOrder[i]){
        setScore((prevScore) => prevScore + 1)
      }
      i++;  
    }
    setScoreVisible(true)
    setTimeout(() => {
      setScoreVisible(false)
      setScore(0)
    }, 4000);
  }

  const reset = () => {
    setShowLose(false);
    setShowWin(false);
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 2000)
    setTimeLeft(typeof duration === "number" ? duration : 0);
    setStoryList(getRandomStories());
    setTimeVisible(false);
    setScore(0);
  }

  const clearAll = () => {
    setFilter('All');
    setFilterEra('All');
    setShowLose(false);
    setShowWin(false);
    setIsActive(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    setTimeVisible(false);
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
    setTimeVisible(false);
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
      <div className={styles.dropdownMenus}>
      <Difficulty 
      duration={duration}
      setTimer={setTimer} />
      <div className={styles.filters}>
      <Filter 
      filter={filter}
      handleFilter={handleFilter}
      />
      <FilterEra 
      filterEra={filterEra}
      handleFilterEra={handleFilterEra}
      />
      </div>
      </div>
      <div className={styles.buttonRow}>
      <button
      onClick={() => {setShowInstructions(!showInstructions)}}
      className={styles.dndBtn}
      >How to play</button>
        {timeVisible && (
       <Countdown 
       timeLeft={timeLeft}
      />
     )}
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
      {showWin && (
        <WinModal
        reset={reset}
        />
      )}
      {showLose && (
        <LoseModal
        reset={reset}
        />
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
      {scoreVisible && (
       <p>You have {score}/8 corrrect answer(s).</p>
     )}
      <div className={styles.dndButtonDiv}>
      <button onClick={checkAnswers}
      disabled={!timeVisible}
      className={styles.checkScoreBtn}>Have I the right (answers)?</button>
     <button onClick={reset}
     className={styles.resetBtn}>Try again</button>
     <button onClick={clearAll}
     className={styles.clearBtn}>Clear all</button>
     </div>
     <div>
     </div>

     </>
    )}
    </div>
  );
}
