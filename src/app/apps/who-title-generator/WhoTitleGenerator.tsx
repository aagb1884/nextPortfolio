"use client";
import { useState, useRef } from "react";
import { EditorState } from "./components/types";
import { Preview } from "./components/preview";
import styles from "@/app/styles/whoTitle.module.css";
import background from "@/app/images/fourth_title_card.png";
import { Input } from "./components/input";

const options = {
  allowTaint: true,
  useCORS: true,
  backgroundColor: "rgba(0,0,0,0)",
  removeContainer: true,
};

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
  const cardRef = useRef<HTMLElement>(null);

  const prepareURL = async () => {
    const cardElement = cardRef.current;

    if (!cardElement) return;

    try {
      // lazy load this package
      const html2canvas = await import(
        /* webpackPrefetch: true */ "html2canvas"
      );

      const result = await html2canvas.default(cardElement, options);

      const asURL = result.toDataURL("image/jpeg");
      // as far as I know this is a quick and dirty solution
      const anchor = document.createElement("a");
      anchor.href = asURL;
      anchor.download = "your-card.jpeg";
      anchor.click();
      anchor.remove();
      // maybe this part should set state with `setURLData(asURL)`
      // and when that's set to something you show the download button
      // which has `href=URLData`, so that people can click on it
    } catch (reason) {
      console.log(reason);
    }
  };

  return (
    <div className={styles.whoTitleContainer}>
      <h1>Who Generator page</h1>
      <Preview state={state} ref={cardRef} />
      <Input state={state} setState={setState} />
      <button onClick={prepareURL}>Download</button>
    </div>
  );
}
