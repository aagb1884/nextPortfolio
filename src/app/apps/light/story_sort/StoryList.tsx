'use client'
import { Story, stories } from "../data/stories";
import React from "react";
import { useState, useEffect } from "react";
import SortableStory from "../components/SortableStory";
import Countdown from "../components/countdown";
import Filter from "../components/Filter";
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import styles from "../../../styles/drwho.module.css";
import Difficulty from "../components/DifficultySelect";
import InstructionsModal from "./InstructionsModal";
import WinModal from "../components/Win";
import LoseModal from "../components/Lose";
import FilterEra from "../components/FilterByEra";
import WhoLoading from "../components/Loading";

interface FilterProps {
  activeWhoTab: string;
}

const StoryList: React.FC<FilterProps> = ({activeWhoTab}) => {
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
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const [correctStates, setCorrectStates] = useState<Record<number, boolean>>({});
  
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
    const correctOrder = [...storyList].sort((a, b) => a.id - b.id);
    const newCorrectStates: Record<number, boolean> = {};
 
    storyList.forEach((story, index) => {
        newCorrectStates[story.id] = story === correctOrder[index];
      });
  
    setCorrectStates(newCorrectStates);
    const score = Object.values(newCorrectStates).filter((isCorrect) => isCorrect).length;
    setScore(score);

    setScoreVisible(true)
    setTimeout(() => {
      setScoreVisible(false)
      setScore(0)
    }, 1700);
  }

  const reset = () => {
    setShowLose(false);
    setShowWin(false);
    setIsActive(false);
    setCorrectStates({});
    setShowLoading(true);
    setTimeout(() => {
      setIsActive(true);
      setShowLoading(false)
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
      <p>Help them sort these <i>Doctor Who</i> TV stories into order.</p>
      <div className={styles.dropdownMenus}>
      <Difficulty 
      duration={duration}
      setTimer={setTimer} />
      <div className={styles.filters}>
      <Filter 
      filter={filter}
      handleFilter={handleFilter}
      activeWhoTab={activeWhoTab}
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
      {showLoading && (
        <WhoLoading />
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
          <SortableStory story={story} key={story.id} 
          isCorrect={correctStates[story.id] || false}
          />
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

export default StoryList;