"use client";
import { useState, useRef } from "react";
import { EditorState } from "./components/types";
import { openImageInNewTab } from "./functions";
import { Preview } from "./components/preview";
import { Input } from "./components/input";
import { titleData } from "./data";
import { Toolbar } from "./components/toolbar";
import styles from "@/app/styles/whoTitle.module.css";
import AppsFooter from "../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";

export default function WhoTitleGenerator() {
  const [state, setState] = useState<EditorState>(titleData[0]);
  const [stateObject, setStateObject] = useState(0);
  const cardRef = useRef<HTMLElement>(null);

  // const options = {
  //   allowTaint: true,
  //   logging: false,
  //   useCORS: true,
  //   backgroundColor: null,
  //   removeContainer: true,
  // };

  // const imageFileName = state.text?.toLowerCase().split(" ").join("_");

  const handleFilter = (filterTerm: EditorState) => {
    setState({
      ...filterTerm,
      text: state.text,
      fontWeight: state.fontWeight,
      writer: state.writer,
    });
  };

  const clearState = () => {
    setState({ ...titleData[stateObject], text: "Doctor Who Title Generator" });
  };

  return (
    <div className={styles.whoTitleContainer}>
      <h1 className={styles.titleTitle}>Doctor Who Title Card Generator</h1>
      <select
        onChange={(e) => {
          const selected = titleData.find((ele) => ele.name === e.target.value);
          const selectedIndex = titleData.findIndex(
            (ele) => ele.name === e.target.value
          );
          if (selected) {
            handleFilter(selected);
            setStateObject(selectedIndex);
          }
        }}
        aria-label="Filter Title Card"
      >
        {titleData.map((ele, key) => (
          <option value={ele.name} key={key}>
            {ele.name}
          </option>
        ))}
      </select>
      <Toolbar state={state} setState={setState} />
      <Preview state={state} ref={cardRef} />
      <Input state={state} setState={setState} />
      <div className={styles.btns}>
        <div className={styles.btnRow}>
          {/* <button
          className={styles.titleBtn}
          onClick={() => {
            prepareURL(cardRef, imageFileName, options);
          }}
        >
          Download
        </button> */}

          <button
            className={styles.titleBtn}
            title="Opens in a new tab"
            onClick={async () => {
              if (!cardRef.current) return;
              await openImageInNewTab(cardRef.current);
            }}
          >
            Create Image
          </button>
          <button
            className={styles.clrBtn}
            onClick={() => {
              clearState();
            }}
          >
            Reset
          </button>
        </div>
        <p
          style={{
            fontSize: "smaller",
            marginBottom: 10,
          }}
        >
          Image will open in a new tab for copying/downloading.
        </p>
      </div>
      <footer className={styles.whoTitleFooter}>
        <AppsFooter />
        <KoFiLink />
      </footer>
    </div>
  );
}
