import { Story } from "../data/stories";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import styles from "../../../styles/drwho.module.css";

interface StoryProps {
  story: Story;
  isCorrect: boolean;
}

const SortableStory: React.FC<StoryProps> = ({ story, isCorrect }) => {
  const { listeners, transform, transition, attributes, setNodeRef } = 
  useSortable({id: story.id})

  const style = {
    transition,
    transform:CSS.Transform.toString(transform)
  }
  
  return (
    <li ref={setNodeRef} {...listeners} {...attributes}
    style={style}
    className={isCorrect ? styles.storyInfoCorrect : styles.storyInfo}>
        {story.name}
    </li>
  );
}

export default SortableStory
