"use client";
import { useState } from "react";
import { EditorState } from "./components/types";
import { Preview } from "./components/preview";
import background from "@/app/images/fourth_title_card.png";

export default async function WhoTitleGenerator() {
  const [state, setState] = useState<EditorState>({
    text: "Invincible",
    color: "#ebed00",
    showCredits: true,
    showWatermark: true,
    background: background,
    fontSize: 24,
    outline: 0,
    subtitleOffset: 0,
    outlineColor: "black",
    effect: null,
    generating: false,
  });

  return (
    <div>
      <p>Who Generator page</p>
      <Preview state={state} />
    </div>
  );
}
