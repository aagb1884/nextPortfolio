"use client";

import styles from "@/app/styles/sciFiName.module.css";
import { useState, useRef } from "react";
import AppsFooter from "../components/AppsFooter";
import Cursor from "./components/cursor";
import InstructionsModal from "./components/InstructionsModal";

interface JsonData {
  syllables: {
    single: [syllable: string];
    syllables: [syllable: string];
  };
}

const SciFiNamePage: React.FC<JsonData> = ({ syllables }) => {
  const [name, setName] = useState<string>("");
  const [noOfSyllables, setNumberOfSyllables] = useState(1);
  const [showInstructions, setShowInstructions] = useState(false);
  const [chibnallFilter, setChibnallFilter] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string>("");
  const [inputArray, setInputArray] = useState([name]);
  const index = useRef(0);

  // undo redo functions

  const undo = () => {
    if (index.current > 0) {
      index.current = index.current - 1;
      setName(inputArray[index.current]);
    }
  };

  const redo = () => {
    if (index.current < inputArray.length - 1) {
      index.current = index.current + 1;
      setName(inputArray[index.current]);
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfSyllables(e.target.valueAsNumber);
  }

  const handleChibnallFilter = () => {
    setChibnallFilter(!chibnallFilter);
  };

  const chibnallFilteredStrings = (array: string[]) => {
    return array.filter((syllable) => syllable.includes("k"));
  };

  const getRandomFirstSyllable = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getRandomSyllables = (array: string[]) => {
    const scrambled = array.sort(() => 0.5 - Math.random());
    const noSyllablesRequired = noOfSyllables - 1;
    const getSyllables = scrambled?.slice(0, noSyllablesRequired);
    return getSyllables.join("").toLowerCase();
  };

  function getRandomName(number: number) {
    const chibnallOne = chibnallFilteredStrings(syllables.single);
    const chibnallLong = chibnallFilteredStrings(syllables.syllables);
    if (chibnallFilter && number === 1) {
      const randomElement = getRandomFirstSyllable(chibnallOne);
      setName(randomElement);
      index.current = index.current + 1;
      setInputArray([...inputArray.slice(0, index.current), randomElement]);
    } else if (chibnallFilter && number > 1) {
      const randomElement = getRandomFirstSyllable(chibnallOne);
      const joinSyllables = getRandomSyllables(chibnallLong);
      setName(randomElement + joinSyllables);
      index.current = index.current + 1;
      setInputArray([
        ...inputArray.slice(0, index.current),
        randomElement + joinSyllables,
      ]);
    } else if (number === 1) {
      const randomElement = getRandomFirstSyllable(syllables.single);
      setName(randomElement);
      index.current = index.current + 1;
      setInputArray([...inputArray.slice(0, index.current), randomElement]);
    } else if (number > 1) {
      const randomElement = getRandomFirstSyllable(syllables.single);
      const joinSyllables = getRandomSyllables(syllables.syllables);
      setName(randomElement + joinSyllables);
      index.current = index.current + 1;
      setInputArray([
        ...inputArray.slice(0, index.current),
        randomElement + joinSyllables,
      ]);
    }
  }

  function capitalise(array: string[]) {
    for (let num: number = 0; num < array.length; num++) {
      if (array[num] === "-" || array[num] === " ") {
        array[num + 1] = array[num + 1].toUpperCase();
      }
    }
    return array;
  }

  function addPunctuation(punctuation: string) {
    if (name.length === 0) {
      return "";
    } else {
      const l = name.length - 1;
      const randomIndex = Math.floor(Math.random() * (l - 1) + 1);
      const newArray = name.split("");
      newArray.splice(randomIndex, 0, punctuation);
      capitalise(newArray);
      setName(newArray.join(""));
      index.current = index.current + 1;
      setInputArray([...inputArray.slice(0, index.current), newArray.join("")]);
    }
  }

  const handleCopyClick = async () => {
    try {
      await window.navigator.clipboard.writeText(name);
      setCopyMessage(`"${name}" copied to clipboard.`);
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      setCopyMessage("Copy to clipboard failed.");
    }
    setTimeout(() => {
      setCopyMessage("");
    }, 10000);
  };

  const handleReset = () => {
    setName("");
    setChibnallFilter(false);
    setNumberOfSyllables(1);
  };

  return (
    <main className={styles.sciFiNameMain}>
      <div className={styles.sciFiLinks}>
        <AppsFooter />
      </div>

      <h1 className={styles.sciFiTitle}>Sci Fi Character Name Generator</h1>
      <button
        onClick={() => {
          setShowInstructions(!showInstructions);
        }}
        className={styles.Btn1}
      >
        How Does This Work?
      </button>
      {showInstructions && (
        <InstructionsModal
          setShowInstructions={setShowInstructions}
          showInstructions={showInstructions}
        />
      )}
      <div className={styles.noOfSyllablesDiv}>
        <div className={styles.syllableRange}>
          <p className={styles.nonComputerText}>Number of Syllables:&nbsp;</p>
          <input
            value={noOfSyllables}
            onChange={handleChange}
            type="range"
            min="1"
            max="15"
            name="noOfSyllables"
            className={styles.range}
          />
        </div>
        <p className={styles.noOfSyllablesInput}>{noOfSyllables}</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.chibnallToggle}>
          <p className={styles.nonComputerText}>Chibnall Filter:&nbsp;</p>
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={chibnallFilter}
              onChange={handleChibnallFilter}
            />
            <span className={styles.slider}></span>
          </label>
          <p className={styles.digitalReadout}>
            {chibnallFilter ? " Active" : " Inactive"}
          </p>
        </div>
        <div className={styles.btnRow}>
          <button
            onClick={() => {
              addPunctuation(" ");
            }}
            className={styles.btn4}
          >
            Add Space
          </button>

          <button
            onClick={() => {
              addPunctuation("'");
            }}
            className={styles.btn4}
          >
            Add Apostrophe
          </button>

          <button
            onClick={() => {
              addPunctuation("-");
            }}
            className={styles.btn4}
          >
            Add Hyphen
          </button>

          <button
            onClick={undo}
            disabled={index.current === 0}
            className={styles.btn4}
          >
            Undo
          </button>
          <button
            onClick={redo}
            disabled={index.current === inputArray.length - 1}
            className={styles.btn4}
          >
            Redo
          </button>
        </div>
      </div>
      <div className={styles.btnRow}>
        <button
          onClick={() => {
            getRandomName(noOfSyllables);
          }}
          className={styles.Btn2}
        >
          Get Sci Fi Name
        </button>
        <button
          onClick={() => {
            setName("");
          }}
          disabled={name.length === 0}
          className={styles.Btn3}
        >
          Clear Name
        </button>
        <button
          onClick={handleReset}
          disabled={name.length === 0}
          className={styles.Btn3}
        >
          Reset
        </button>
      </div>
      <div className={styles.name}>
        {name}
        <Cursor />
      </div>

      <div className={styles.copyClipboard}>
        <button
          onClick={handleCopyClick}
          disabled={name.length === 0}
          className={styles.btn6}
        >
          Copy to clipboard
        </button>
        <p className={styles.digitalReadout}>
          {copyMessage}
          <Cursor />
        </p>
      </div>
    </main>
  );
};

export default SciFiNamePage;
