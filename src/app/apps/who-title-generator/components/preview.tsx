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
              left: state.left ?? "50%",
              fontWeight: state.fontWeight,
              // filter: state.brightness ?? "none",
              textTransform: state.textAllCaps ?? "none",
              WebkitTextStrokeWidth: state.outline ?? "",
              WebkitTextStrokeColor: state.outlineColour ?? "",
              whiteSpace: "pre-wrap",
            }}
          >
            {state.text}
          </p>
          {state.writerCredit && (
            <>
              <p
                className={styles.titleText}
                style={{
                  color: state.color,
                  fontFamily: state.font,
                  top: state.writerTop,
                  left: state.left,
                  fontSize: state.writerFont,
                  fontWeight: state.fontWeight,
                  textShadow: state.textShadow,
                  letterSpacing: state.letterSpacing,
                  textTransform: state.textAllCaps ?? "none",
                }}
              >
                {state.writer !== undefined ? state.writtenBy : ""}{" "}
                {state.writer}
              </p>
            </>
          )}
        </article>
      </div>
    </>
  );
}
