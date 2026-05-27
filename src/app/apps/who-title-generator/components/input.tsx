import { EditorState } from "./types";
import styles from "@/app/styles/whoTitle.module.css";

type InputProps = {
  state: EditorState;
  setState: (state: EditorState) => void;
};

export function Input(props: InputProps) {
  const { state, setState } = props;
  return (
    <textarea
      id="title-input"
      maxLength={80}
      placeholder="Type story title here...(80 characters max)"
      className={styles.textbox}
      onChange={(e) =>
        setState({
          name: state.name,
          text: e.target.value,
          color: state.color,
          writerCredit: state.writerCredit,
          background: state.background,
          alt: state.alt,
          font: state.font,
          fontSize: state.fontSize,
          subtitleOffset: state.subtitleOffset,
          effect: state.effect,
          generating: state.generating,
        })
      }
    />
  );
}
