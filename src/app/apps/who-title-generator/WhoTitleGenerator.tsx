"use client";
import { useState, useRef } from "react";
import { EditorState } from "./components/types";
import { Preview } from "./components/preview";
import styles from "@/app/styles/whoTitle.module.css";
import { Input } from "./components/input";
import html2canvas from "html2canvas";
import { titleData } from "./data";
import { Toolbar } from "./components/toolbar";
import AppsFooter from "../components/AppsFooter";
import KoFiLink from "@/app/ui/KoFi";

const options = {
  allowTaint: false,
  logging: false,
  useCORS: true,
  backgroundColor: null,
  removeContainer: true,
};

export default function WhoTitleGenerator() {
  const [state, setState] = useState<EditorState>(titleData[0]);
  const [stateObject, setStateObject] = useState(0);
  const cardRef = useRef<HTMLElement>(null);

  const imageFileName = state.text?.toLowerCase().split(" ").join("_");

  const prepareURL = async () => {
    const cardElement = cardRef.current;

    if (!cardElement) return;

    try {
      // lazy load this package
      const html2canvas = await import(
        /* webpackPrefetch: true */ "html2canvas"
      );

      const result = await html2canvas.default(cardElement, options);

      const asURL = result.toDataURL("image/png");
      // as far as I know this is a quick and dirty solution
      const anchor = document.createElement("a");
      anchor.href = asURL;
      anchor.download = `${imageFileName}.png`;
      anchor.click();
      anchor.remove();
      // maybe this part should set state with `setURLData(asURL)`
      // and when that's set to something you show the download button
      // which has `href=URLData`, so that people can click on it
    } catch (reason) {
      console.log(reason);
    }
  };

  const copyArticleToClipboard = async (
    element: HTMLElement
  ): Promise<void> => {
    try {
      const canvas = await html2canvas(element);

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) reject(new Error("Failed to capture screenshot"));
          else resolve(blob);
        }, "image/png");
      });

      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (err) {
      console.error("Unable to create image.", err);
      alert(`Image creation failed.`);
    }
  };

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
        className={styles.titleSelect}
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
        <button className={styles.titleBtn} onClick={prepareURL}>
          Download
        </button>
        <button
          className={styles.clrBtn}
          onClick={() => {
            clearState();
          }}
        >
          Reset
        </button>
        <button
          className={styles.titleBtn}
          onClick={async () => {
            if (!cardRef.current) return;
            await copyArticleToClipboard(cardRef.current);
          }}
        >
          Open Image in New Tab
        </button>
      </div>
      <footer className={styles.whoTitleFooter}>
        <AppsFooter />
        <KoFiLink />
      </footer>
    </div>
  );
}
