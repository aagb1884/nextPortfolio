import { Story } from "../data/stories";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import styles from "../../../styles/drwho.module.css";

export default function SortableStory({ story }: { story: Story }) {
  const { listeners, transform, transition, attributes, setNodeRef } = 
  useSortable({id: story.id})

  const style = {
    transition,
    transform:CSS.Transform.toString(transform)
  }
  
  return (
    <li ref={setNodeRef} {...listeners} {...attributes}
    style={style}
    className={styles.storyInfo}>
        {story.name}
    </li>
  );
}
