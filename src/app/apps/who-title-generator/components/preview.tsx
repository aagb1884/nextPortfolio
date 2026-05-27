import { EditorState } from "./types";
import styles from "@/app/styles/whoTitle.module.css";
import { RefObject } from "react";

type PreviewProps = {
  state: EditorState;
  ref: RefObject<HTMLElement> | undefined;
};

export function Preview(props: PreviewProps) {
  const { state, ref } = props;

  return (
    <>
      <div className={styles.titlePreview}>
        <article ref={ref}>
          {/* eslint-disable-next-line @next/next-eslint/no-img-element */}
          <img
            className={styles.titleImage}
            src={state.background}
            alt={state.alt}
          ></img>
          <p
            className={styles.titleText}
            style={{
              fontFamily: state.font,
              color: state.color,
              fontSize: state.fontSize,
              textShadow: state.textShadow ?? "",
              width: state.width ?? "80%",
              letterSpacing: state.letterSpacing ?? 0,
              top: state.top ?? "50%",
              fontWeight: state.fontWeight ?? "auto",
              textTransform: state.textAllCaps ?? "",
              WebkitTextStrokeWidth: state.outline ?? "",
              WebkitTextStrokeColor: state.outlineColour ?? "",
            }}
          >
            {state.text}
          </p>
        </article>
      </div>
    </>
  );
}
