import { StateProps } from "./types";
import styles from "@/app/styles/whoTitle.module.css";

export function Toolbar(props: StateProps) {
  const { state, setState } = props;

  return (
    <div className={styles.toolbar}>
      <div className={styles.btnRow}>
        Font Size:
        <input
          type="number"
          id="font-size-input"
          maxLength={3}
          max={200}
          defaultValue={state.fontSize}
          className={styles.fontSizeInput}
          onChange={(e) =>
            setState({ ...state, fontSize: Number(e.target.value) })
          }
        />
        <label className={styles.label}>
          <input
            type="radio"
            name="caps"
            value="uppercase"
            onChange={() => setState({ ...state, textAllCaps: "uppercase" })}
          />
          All Caps
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="caps"
            value="none"
            onChange={() => setState({ ...state, textAllCaps: "none" })}
          />
          Caps Optional
        </label>
      </div>
      <div className={styles.sliders}>
        Move Up/Down:
        <input
          type="range"
          id="height-input"
          min={0}
          max={100}
          className={styles.heightInput}
          defaultValue={state.top}
          onChange={(e) => setState({ ...state, top: `${e.target.value}%` })}
        />
        Move Left/Right:
        <input
          type="range"
          id="height-input"
          min={0}
          max={100}
          className={styles.heightInput}
          defaultValue={state.left}
          onChange={(e) => setState({ ...state, left: `${e.target.value}%` })}
        />
      </div>
    </div>
  );
}
