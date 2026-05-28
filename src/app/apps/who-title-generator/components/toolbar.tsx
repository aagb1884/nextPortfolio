import { StateProps } from "./types";
import styles from "@/app/styles/whoTitle.module.css";

export function Toolbar(props: StateProps) {
  const { state, setState } = props;

  return (
    <div className={styles.toolbar}>
      Font Size:
      <input
        type="number"
        id="font-size-input"
        maxLength={3}
        max={100}
        defaultValue={state.fontSize}
        className={styles.fontSizeInput}
        onChange={(e) =>
          setState({ ...state, fontSize: Number(e.target.value) })
        }
      />
      Height:
      <input
        type="range"
        id="height-input"
        min={0}
        max={100}
        className={styles.heightInput}
        defaultValue={state.top}
        onChange={(e) => setState({ ...state, top: `${e.target.value}%` })}
      />
    </div>
  );
}
