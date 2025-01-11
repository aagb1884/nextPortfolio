import { useEffect } from "react";
import styles from "../../../styles/poetremix.module.css";

function RemixFunctions({wordArray, letterArray, remixedText, setRemixedText}) {


  useEffect(() => {
    if (wordArray.length > 0 && letterArray.length === 0) {
      const mappedWords = wordArray.map(word => `${word} `);
      setRemixedText(mappedWords.join(''));
    } else if (letterArray.length > 0 && wordArray.length === 0) {
      const mappedLetters = letterArray.map(letter => `${letter} `);
      setRemixedText(mappedLetters.join(''));
    }
  }, [wordArray, letterArray, setRemixedText]);

  const placeholderText = remixedText.length === 0 
  ? <span className={styles.placeholderStyle}>Remixed text will appear here.</span> 
  : remixedText;

  
  return (
    <div className={styles.remixFunctions}>
      <div className={styles.remixedPoem}>
      {placeholderText}
      </div>
    </div>
  );
}

export default RemixFunctions;
