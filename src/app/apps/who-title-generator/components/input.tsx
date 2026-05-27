import { EditorState } from "./types";
import styles from "@/app/styles/whoTitle.module.css";

type InputProps = {
  state: EditorState;
  setState: (state: EditorState) => void;
};

export function Input(props: InputProps) {
  const { state, setState } = props;
  return (
    <input
      type="text"
      value={state.text}
      id="input"
      placeholder="Type your answer here..."
      className={styles.textbox}
      onChange={(e) =>
        setState({
          text: e.target.value,
          color: state.color,
          background: state.background,
          font: state.font,
          fontSize: state.fontSize,
          textShadow: state.textShadow,
          subtitleOffset: state.subtitleOffset,
          effect: state.effect,
          generating: state.generating,
        })
      }
    />
  );
}
