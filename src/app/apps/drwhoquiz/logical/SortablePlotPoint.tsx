
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import styles from "@/app/styles/whoQuiz.module.css";
import { plotPoint } from "../data/questions";

interface StoryProps {
  plotPoint: plotPoint;
  isCorrect: boolean;
}

const SortableStory: React.FC<StoryProps> = ({ plotPoint, isCorrect }) => {
  const { listeners, transform, transition, attributes, setNodeRef } = 
  useSortable({id: plotPoint.id})

  const style = {
    transition,
    transform:CSS.Transform.toString(transform)
  }
  
  return (
    <li ref={setNodeRef} {...listeners} {...attributes}
    style={style}
    className={isCorrect ? styles.storyInfoCorrect : styles.storyInfo}>
        {plotPoint.point}
    </li>
  );
}

export default SortableStory