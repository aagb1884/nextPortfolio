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
    textShadow: "1px 1px 2px black",
    subtitleOffset: 0,
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
