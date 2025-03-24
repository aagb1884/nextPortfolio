"use client";

import styles from "@/app/styles/sciFiName.module.css";
import { useState } from "react";
import Image from "next/image";
import AppsFooter from "../components/AppsFooter";
import Cursor from "./cursor";
import InstructionsModal from "./InstructionsModal";

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfSyllables(e.target.valueAsNumber);
  }

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
    } else if (chibnallFilter && number > 1) {
      const randomElement = getRandomFirstSyllable(chibnallOne);
      const joinSyllables = getRandomSyllables(chibnallLong);
      setName(randomElement + joinSyllables);
    } else if (number === 1) {
      const randomElement = getRandomFirstSyllable(syllables.single);
      setName(randomElement);
    } else if (number > 1) {
      const randomElement = getRandomFirstSyllable(syllables.single);
      const joinSyllables = getRandomSyllables(syllables.syllables);
      setName(randomElement + joinSyllables);
    }
  }

  function addPunctuation(punctuation: string) {
    if (name.length === 0) {
      return "";
    } else {
      const l = name.length + 1;
      const randomIndex = Math.floor(Math.random() * l);
      const newArray = name.split("")
      newArray.splice(randomIndex, 0, punctuation)
      setName(newArray.join(""))
    }
  }



  const handleCopyClick = async () => {
    try {
      await window.navigator.clipboard.writeText(name);
      setCopyMessage("Copied to clipboard.");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      setCopyMessage("Copy to clipboard failed.");
    }
    setTimeout(() => {
      setCopyMessage("");
    }, 10000);
  };

  const handleChibnallFilter = () => {
    setChibnallFilter(!chibnallFilter);
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
        <p className={styles.nonComputerText}>
          Number of Syllables:&nbsp;&nbsp;
        </p>

        <input
          value={noOfSyllables}
          onChange={handleChange}
          type="number"
          min={1}
          max={10}
          name="noOfSyllables"
          className={styles.noOfSyllablesInput}
        />
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
        <button onClick={() => {addPunctuation(" ")}}
            className={styles.btn4}>
            Add Space
        </button>
        <button onClick={() => {addPunctuation("-")}}
            className={styles.btn5}>
            Add Hyphen
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
          className={styles.Btn3}
        >
          Clear
        </button>
      </div>
      <div className={styles.name}>
        {name}
        <Cursor />
      </div>

      <div className={styles.copyClipboard}>
        <button onClick={handleCopyClick} className={styles.btn6}>
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
