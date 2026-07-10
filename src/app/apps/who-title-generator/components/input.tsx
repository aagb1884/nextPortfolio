import { StateProps } from "./types";
import styles from "@/app/styles/whoTitle.module.css";

export function Input(props: StateProps) {
  const { state, setState } = props;

  return (
    <>
      <textarea
        id="title-input"
        maxLength={200}
        placeholder="Type story title here...(200 characters max)"
        className={styles.textbox}
        onChange={(e) => setState({ ...state, text: e.target.value })}
      />
      {state.writerCredit && (
        <div className={styles.writerInputDiv}>
          Writer Credit (optional):
          <input
            type="text"
            maxLength={200}
            placeholder="Add writer name"
            className={styles.writerInput}
            onChange={(e) => setState({ ...state, writer: e.target.value })}
          />
          Font Size:
          <input
            type="number"
            id="font-size-input"
            maxLength={3}
            min={1}
            max={200}
            value={state.writerFont}
            className={styles.writerFontSizeInput}
            onChange={(e) =>
              setState({ ...state, writerFont: Number(e.target.value) })
            }
          />
          Move Up/Down:
          <input
            type="range"
            id="height-input"
            min={15}
            max={85}
            className={styles.heightInput}
            defaultValue={state.writerTop}
            onChange={(e) =>
              setState({ ...state, writerTop: `${e.target.value}%` })
            }
          />
        </div>
      )}
    </>
  );
}
