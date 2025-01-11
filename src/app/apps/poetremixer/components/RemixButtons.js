import styles from "../../../styles/poetremix.module.css";

function RemixButtons({handleCopyClick, clearRemix, shuffleArray, sortAtoZ, 
  sortZtoA, remixedText, poeticRedundancy, randomiseWords,
  reverseWords, removeWords, verbValues, nounValues, adjValues, makePalindrome, 
  mappedTaggedRemixedText, showRemixButtons, setShowRemixButtons, handleClick}) {
 
    const showHide = !showRemixButtons ? `Show Buttons ↑` : `Hide Buttons ↓`;

  return (
    <div className={styles.remixButtons}>   
    <p className={styles.hideShowBtn} 
    onClick={() => handleClick(showRemixButtons, setShowRemixButtons)}>
    {showHide}</p> 
    {showRemixButtons && (     
      <>      
      <div className={styles.miscBtns}>
      <button
      disabled={remixedText ? false : true}
      id="copy-btn"
      className={styles.copyBtn}
      onClick={() => {handleCopyClick()}}>
      Copy Text
      </button> 
      <button
      disabled={remixedText ? false : true}
      id="randomise-btn"
      className={styles.randomiseBtn}
      onClick={() => {shuffleArray(remixedText)}}>
      Randomise
      </button>
      <button
      disabled={remixedText ? false : true}
      id="palindrome-btn"
      className={styles.palindromeBtn}
      onClick={() => {makePalindrome(remixedText)}}>
      Palindrome
      </button>
      <button
      disabled={remixedText ? false : true}
      id="redundancy-btn"
      className={styles.redundancyBtn}
      onClick={() => {poeticRedundancy(remixedText)}}>
      Poetic Redundancy
      </button>
      </div>
      <div className={styles.sortBtns}>
      <button
      disabled={remixedText ? false : true}
      id="sort-btn"
      className={styles.sortBtn}
      onClick={() => {sortAtoZ()}}>
      Sort A-Z
      </button>
      <button
      disabled={remixedText ? false : true}
      id="sort-btn"
      className={styles.sortBtn}
      onClick={() => {sortZtoA()}}>
      Sort Z-A
      </button>   
      </div>
      <div className={styles.wordTypes}>
      <div className={styles.verbs}>
      <button 
      disabled={remixedText ? false : true}
      id="randomise-verbs-btn"
      className={styles.randomiseVerbsBtn}
      onClick={() => {randomiseWords(verbValues, mappedTaggedRemixedText)}}>
      Randomise Verbs
      </button>  
      <button 
      disabled={remixedText ? false : true}
      id="reverse-verbs-btn"
      className={styles.reverseVerbsBtn}
      onClick={() => {reverseWords(verbValues, mappedTaggedRemixedText)}}>
      Reverse Verbs
      </button>  
      <button 
      disabled={remixedText ? false : true}
      id="remove-verbs-btn"
      className={styles.removeVerbsBtn}
      onClick={() => {removeWords(verbValues, mappedTaggedRemixedText)}}>
      Remove Verbs
      </button>  
      </div>

      <div className={styles.nouns}>
      <button 
      disabled={remixedText ? false : true}
      id="randomise-nouns-btn"
      className={styles.randomiseNounsBtn}
      onClick={() => {randomiseWords(nounValues, mappedTaggedRemixedText)}}>
      Randomise Nouns
      </button>  
      <button 
      disabled={remixedText ? false : true}
      id="reverse-nouns-btn"
      className={styles.reverseNounsBtn}
      onClick={() => {reverseWords(nounValues, mappedTaggedRemixedText)}}>
      Reverse Nouns
      </button>  
      <button 
      disabled={remixedText ? false : true}
      id="remove-nouns-btn"
      className={styles.removeNounsBtn}
      onClick={() => {removeWords(nounValues, mappedTaggedRemixedText)}}>
      Remove Nouns
      </button>  
      </div>

      <div className={styles.adj}>
      <button 
      disabled={remixedText ? false : true}
      id="randomise-adj-btn"
      className={styles.randomiseAdjBtn}
      onClick={() => {randomiseWords(adjValues, mappedTaggedRemixedText)}}>
      Randomise Adjectives
      </button>  
      <button 
      disabled={remixedText ? false : true}
      id="reverse-adj-btn"
      className={styles.reverseAdjBtn}
      onClick={() => {reverseWords(adjValues, mappedTaggedRemixedText)}}>
      Reverse Adjectives
      </button>  
      <button 
      disabled={remixedText ? false : true}
      id="remove-adj-btn"
      className={styles.removeAdjBtn}
      onClick={() => {removeWords(adjValues, mappedTaggedRemixedText)}}>
      Remove Adjectives
      </button>  
      </div>
      </div>
      <br />
      <button
      disabled={remixedText ? false : true}
      id="clear-remix-btn"
      className={styles.clearRemixBtn}
      onClick={() => {clearRemix()}}>
      Clear Remix
      </button>
      </>
      )} 
    </div>
  );
}

export default RemixButtons;
