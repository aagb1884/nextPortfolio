import { StateProps } from "./types";
import styles from "@/app/styles/whoTitle.module.css";

export function Input(props: StateProps) {
  const { state, setState } = props;
  return (
    <textarea
      id="title-input"
      maxLength={200}
      placeholder="Type story title here...(200 characters max)"
      className={styles.textbox}
      onChange={(e) => setState({ ...state, text: e.target.value })}
    />
  );
}
