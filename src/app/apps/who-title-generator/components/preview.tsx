import { EditorState } from "./types";
import Image from "next/image";
import styles from "@/app/styles/whoTitle.module.css";

export function Preview(props: { state: EditorState }) {
  const { state } = props;

  return (
    <>
      <div className={styles.titlePreview}>
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
          }}
        >
          {state.text}
        </p>
      </div>
    </>
  );
}
