'use client'
import { Story, stories } from "@/data/stories";
import React from "react";
import { useState, useEffect } from "react";
import SortableStory from "./SortableStory";
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function StoryList() {

  function getRandomStories(){
    const randomStories = [...stories]
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0,6)
    return randomStories
  } 

  useEffect(() => {
    getRandomStories()
  }, [])

  const [storyList, setStoryList] = useState(getRandomStories());
  const [score, setScore] = useState(0);
  const [scoreVisible, setScoreVisible] = useState(false)
 
  function checkAnswers(){
    let i = 0;
    let correctOrder = [...storyList].sort((a, b) => a.id - b.id);
    while (i < storyList.length) {
      if (storyList[i] === correctOrder[i]){
        setScore((prevScore) => prevScore + 1)
      }
      i++;
      
    }
  }
 
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

  const checkScore = () => {
    console.log('score checked')
    checkAnswers()
    setScoreVisible(!scoreVisible)
  }

  const reset = () => {
    setStoryList(getRandomStories());
    setScoreVisible(false);
    setScore(0);
  }


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter: sortableKeyboardCoordinates
    }) 
  )

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Story List</h2>
      <ul className="bg-white shadow-md rounded-lg">
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
      <div>
      <button onClick={checkScore}
      disabled={scoreVisible}>Am I Right?</button>
     {scoreVisible && (
      <p>{score}</p>
     )}
     <button onClick={reset}>Try again</button>
     </div>
    </div>
  );
}
