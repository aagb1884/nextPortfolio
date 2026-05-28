import { StateProps } from "./types";
import styles from "@/app/styles/whoTitle.module.css";

export function Input(props: StateProps) {
  const { state, setState } = props;
  return (
    <textarea
      id="title-input"
      maxLength={80}
      // rows={5}
      placeholder="Type story title here...(80 characters max)"
      className={styles.textbox}
      onChange={(e) => setState({ ...state, text: e.target.value })}
    />
  );
}
