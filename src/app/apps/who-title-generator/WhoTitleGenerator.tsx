"use client";
import { useState, useRef } from "react";
import { EditorState } from "./components/types";
import { Preview } from "./components/preview";
import styles from "@/app/styles/whoTitle.module.css";
import background from "@/app/images/fourth_title_card.png";
import { Input } from "./components/input";
import html2canvas from "html2canvas";

const options = {
  allowTaint: true,
  useCORS: true,
  backgroundColor: "rgba(0,0,0,0)",
  removeContainer: true,
};

export default function WhoTitleGenerator() {
  const [state, setState] = useState<EditorState>({
    text: "Your Title Here",
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

  const imageFileName = state.text.toLowerCase().split(" ").join("_");

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
      anchor.download = `${imageFileName}.jpeg`;
      anchor.click();
      anchor.remove();
      // maybe this part should set state with `setURLData(asURL)`
      // and when that's set to something you show the download button
      // which has `href=URLData`, so that people can click on it
    } catch (reason) {
      console.log(reason);
    }
  };

  const copyArticleToClipboard = async (
    element: HTMLElement
  ): Promise<void> => {
    const canvas = await html2canvas(element);

    canvas.toBlob(async (blob) => {
      if (!blob) throw new Error("Failed to capture screenshot");

      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
    }, "image/png");
  };

  return (
    <div className={styles.whoTitleContainer}>
      <h1>Who Generator page</h1>
      <Preview state={state} ref={cardRef} />
      <Input state={state} setState={setState} />
      <button onClick={prepareURL}>Download</button>
      <button
        onClick={async () => {
          if (!cardRef.current) return;
          await copyArticleToClipboard(cardRef.current);
        }}
      >
        Copy
      </button>
    </div>
  );
}
