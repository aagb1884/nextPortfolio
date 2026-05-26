"use client";
import { useState } from "react";
import { EditorState } from "./components/types";
import { Preview } from "./components/preview";
import styles from "@/app/styles/whoTitle.module.css";
import background from "@/app/images/fourth_title_card.png";
import { Input } from "./components/input";

export default function WhoTitleGenerator() {
  const [state, setState] = useState<EditorState>({
    text: "Invincible",
    color: "#ffff",
    background: background,
    font: "var(--font-della-respira)",
    fontSize: 36,
    outline: 0,
    subtitleOffset: 0,
    outlineColor: "black",
    effect: null,
    generating: false,
  });

  return (
    <div className={styles.whoTitleContainer}>
      <p>Who Generator page</p>
      <Preview state={state} />
      <Input state={state} setState={setState} />
    </div>
  );
}
