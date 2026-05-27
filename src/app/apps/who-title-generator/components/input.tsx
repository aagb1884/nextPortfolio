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
      onChange={(e) => setState({ ...state, text: e.target.value })}
    />
  );
}
