import { useState } from "react";
import RemixFunctions from "./RemixFunctions";
import ButtonsColumn from "./Buttons";
import RemixButtons from "./RemixButtons";
import styles from "../../../styles/poetremix.module.css";
import * as posTagger from 'wink-pos-tagger'; 

function MainContainer() {
const [poem, setPoem] = useState('');
const [wordArray, setWordArray] = useState([]);
const [letterArray, setLetterArray] = useState([]);
const [remixedText, setRemixedText] = useState('');
const [showButtons, setShowButtons] = useState(true);
const [showRemixButtons, setShowRemixButtons] = useState(true);

const handleClick = (state, setState) => {
    setState(!state)
}

// /* tslint:disable no-var-requires */
// const posTagger = require('wink-pos-tagger');
const tagger = posTagger();

const taggedText = (str) => {
  return tagger.tagSentence(str)
}

const mappedTaggedText = taggedText(poem).map((word) => word)
const mappedTaggedRemixedText = remixedText.length > 1 ? taggedText(remixedText).map((word) => word) : [];

const verbValues = ['VB', 'VBN', 'VBG', 'VBZ', 'VBD'];
const nounValues = ['NN', 'NNP', 'NNS', 'MD'];
const adjValues = ['JJ'];

function getWords(wordTypeArray, textArray) {
  return textArray
    .filter((word) => wordTypeArray.includes(word.pos)) 
    .map((word) => word.value);  
}

const wordIndexArr =[];

function getWordIndexes(wordTypeArray, textArray) {
 
  textArray.forEach((word, index) => {
      if (wordTypeArray.includes(word.pos)) {
        wordIndexArr.push(index);
      }
    });
return wordIndexArr;
}

const shuffleWords = (wordTypeArray, textArray) => {
  const shuffled = [...getWords(wordTypeArray, textArray)].sort(() => 0.5 - Math.random()); 
  return shuffled; 
};

const randomiseWords = (wordTypeArray, textArray) => {
  getWordIndexes(wordTypeArray, textArray);
  const shuffledWords = shuffleWords(wordTypeArray, textArray);
  wordIndexArr.forEach((index, i) => {
    textArray.splice(index, 1, shuffledWords[i]); 
  });
const joinedText = textArray
      .map(item => typeof item === 'string' ? item : item.value)
      .join(' '); 
    setRemixedText(joinedText)
};

const reverseWords = (wordTypeArray, textArray) => {
  getWordIndexes(wordTypeArray, textArray)
  const reversedWords = getWords(wordTypeArray, textArray).reverse()
  wordIndexArr.forEach((index, i) => {
    textArray.splice(index, 1, reversedWords[i]); 
  });

const joinedText = textArray
      .map(item => typeof item === 'string' ? item : item.value)
      .join(' '); 
    setRemixedText(joinedText)
}

const removeWords = (wordTypeArray, textArray) => {
  getWordIndexes(wordTypeArray, textArray)
for (var i = wordIndexArr.length -1; i >= 0; i--)
textArray.splice(wordIndexArr[i],1);
const joinedText = textArray
.map(item => item.value)
.join(' '); 
setRemixedText(joinedText)
}

const handlePoemChange = (e) => {
    setPoem(e.target.value);
  };

  const clearRemix = () => {
    setRemixedText('');
    setWordArray([]);
    setLetterArray([]);
  }

  const handleCopyClick = async () => {
    try {
        await window.navigator.clipboard.writeText(remixedText);
        alert("Copied to clipboard!");
    } catch (err) {
        console.error(
            "Unable to copy to clipboard.",
            err
        );
        alert("Copy to clipboard failed.");
    }
};

const shuffleArray = (text) => {
  // Ensure remixedText is converted to a string before splitting
  const tempArray = Array.isArray(text) ? text : text.split(' ');
  tempArray.sort(() => 0.5 - Math.random()); 
  const mappedString = tempArray.join(' ');
  setRemixedText(mappedString);
};

const sortAtoZ = () => {
    const tempArray = remixedText.split(' ').sort()
    setRemixedText(tempArray.join(' '))
}
const sortZtoA = () => {
  const tempArray = remixedText.split(' ').sort().reverse()
    setRemixedText(tempArray.join(' '))
}

const punctuationWord = /[-\.,?!—();:]/g;


const reverseAllWords = (text) => {
    const reversedWords = text.toLowerCase().
    replace(punctuationWord, "").
    split("\n").
    reverse().
    map(word => word.split(" ").reverse().join(" ")).
    join("\n")
    setRemixedText(reversedWords)
  }

const reverseLines = (text) => {
  setRemixedText(text.split("\n").reverse().join("\n"))
}

// const reversedPoem = text.split("\n").
// map(line => line.split(" ").reverse().join(" ")).
// reverse().join("\n")

const sentenceEndings = /[.?!]/g;
const reverseSentences = (text) => {
  setRemixedText(text.replace(/^\s+|\s+$/gm,'').
  split(sentenceEndings).
  reverse().
  join("\n"))
}

const randomiseLines = (text) => {
  const makeArray = text.split("\n");
  makeArray.sort(() => 0.5 - Math.random()); 
  const mappedString = makeArray.join('\n').replace(/^\s+|\s+$/gm,'');
  setRemixedText(mappedString);
}

const randomiseSentences = (text) => {
  const makeArray = text.replace(/^\s+|\s+$/gm,'').split(sentenceEndings)
  makeArray.sort(() => 0.5 - Math.random()); 
  const mappedString = makeArray.join(' ')
  setRemixedText(mappedString);
}

const redundancyPunctuation = /[,;.!?]/g;
const poeticRedundancy = (string) => {
  const newArray = string.replace(redundancyPunctuation, "").split("\n");
  const removeEmptyLines = newArray.filter(line => line.trim() !== "")
  const n = removeEmptyLines.map(line => line.split(" "))
  const listEndWords = n.map(word => `${word[word.length - 1]} `)
  setRemixedText(listEndWords.join("\n"))
 }

const makePalindrome = (text) => {
   const reversedPoem = text.split("\n").
   map(line => line.split(" ").reverse().join(" ")).
   reverse().join("\n")
  setRemixedText(`${text}\n\n${reversedPoem}`)
}

const clearAll = () => {
  setPoem('');
  setWordArray([]);
  setLetterArray([]);
  setRemixedText('');
}

    return (
      <section className={styles.mainContainer}>
        <div className={styles.column1}>
        <textarea id="poem-input" name="poem-input" 
        className={styles.poemInput}
        value={poem} onChange={handlePoemChange}
        placeholder="Copy and paste a poem here"/>
               </div>
        <div className={styles.column2}>
        <ButtonsColumn 
        poem={poem} 
        wordArray={wordArray}
        setWordArray={setWordArray} 
        letterArray={letterArray}
        setLetterArray={setLetterArray}
        clearAll={clearAll} 
        reverseLines={reverseLines}
        reverseAllWords={reverseAllWords}
        punctuationWord={punctuationWord}
        reverseSentences={reverseSentences} 
        poeticRedundancy={poeticRedundancy}
        makePalindrome={makePalindrome}
        randomiseLines={randomiseLines}
        randomiseSentences={randomiseSentences}
        randomiseWords={randomiseWords}
        reverseWords={reverseWords}
        removeWords={removeWords}
        verbValues={verbValues}
        nounValues={nounValues}
        adjValues={adjValues}
        mappedTaggedText={mappedTaggedText}
        handleClick={handleClick}
        showButtons={showButtons}
        setShowButtons={setShowButtons}
        />
        </div>
        <div className={styles.column3}>
          <RemixFunctions 
          wordArray={wordArray}
          letterArray={letterArray}
          remixedText={remixedText}
          setRemixedText={setRemixedText}
         />
        </div>
        <div className={styles.column4}>
          <RemixButtons 
          remixedText={remixedText}
          clearRemix={clearRemix}
          handleCopyClick={handleCopyClick}
          shuffleArray={shuffleArray}
          sortAtoZ={sortAtoZ}
          sortZtoA={sortZtoA}
          poeticRedundancy={poeticRedundancy}
          randomiseWords={randomiseWords}
          reverseWords={reverseWords}
          removeWords={removeWords}
          verbValues={verbValues}
          nounValues={nounValues}
          adjValues={adjValues}
          makePalindrome={makePalindrome}
          mappedTaggedRemixedText={mappedTaggedRemixedText}
          handleClick={handleClick}
          showRemixButtons={showRemixButtons}
          setShowRemixButtons={setShowRemixButtons}
          />
        </div>
      </section>
    );
  }
  
  export default MainContainer;