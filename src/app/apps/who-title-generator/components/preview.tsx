import { EditorState } from "./types";
import Image from "next/image";
import styles from "@/app/styles/whoTitle.module.css";

type PreviewProps = {
  state: EditorState;
  ref: HTMLElement
};

export function Preview(props: PreviewProps) {
  const { state, ref } = props;

  return (
    <>
      <div className={styles.titlePreview} ref={ref}>
        <Image
          className={styles.titleImage}
          src={state.background}
          alt="Doctor Who title card"
          width={500}
          height={500}
        ></Image>
        <p
          className={styles.titleText}
          style={{
            fontFamily: state.font,
            color: state.color,
            fontSize: state.fontSize,
            textShadow: state.textShadow,
          }}
        >
          {state.text}
        </p>
      </div>
    </>
  );
}
