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
          min={1}
          max={200}
          value={state.fontSize}
          className={styles.fontSizeInput}
          onChange={(e) =>
            setState({ ...state, fontSize: Number(e.target.value) })
          }
        />
        <label className={styles.label}>
          <input
            type="radio"
            name="caps"
            onChange={() => setState({ ...state, textAllCaps: "uppercase" })}
          />
          All Caps
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="caps"
            onChange={() => setState({ ...state, textAllCaps: "none" })}
          />
          Caps Optional
        </label>
        <select
          onChange={(e) => {
            setState({ ...state, fontWeight: e.target.value });
          }}
          value={state.fontWeight ?? "auto"}
        >
          <option value="auto" disabled>
            Font Weight
          </option>
          <option value="100">Lighter</option>
          <option value="lighter">Light</option>
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="bolder">Bolder</option>
        </select>
      </div>
      <div className={styles.sliders}>
        Move Up/Down:
        <input
          type="range"
          id="height-input"
          min={25}
          max={75}
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
