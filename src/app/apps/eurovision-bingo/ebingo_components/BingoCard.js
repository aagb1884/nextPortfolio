"use client";
import Winning from "./Winning";
import ActiveButtons from "../ebingo_components/ActiveButtons";
import styles from "@/app/styles/euroBingo.module.css";
import { useState } from "react";
import { EurovisionClicheArray } from "@/data/euroCliches";

const BingoCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isBingoButtonActive, setIsBingoButtonActive] = useState(false);
  const [buttonStates, setButtonStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = !updatedButtonStates[index];
    setButtonStates(updatedButtonStates);

    if (updatedButtonStates.every((state) => state === true)) {
      setIsBingoButtonActive(true);
    } else {
      setIsBingoButtonActive(false);
    }
  };

  function getCliches(EurovisionClicheArray, num) {
    const shuffled = [...EurovisionClicheArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const [cardArray, setCardArray] = useState(
    getCliches(EurovisionClicheArray, 6)
  );

  const handleGetNewCards = () => {
    setCardArray(getCliches(EurovisionClicheArray, 6));
    setButtonStates(Array(6).fill(false));
    setIsBingoButtonActive(false);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className={styles.cardWrapper}>
      <section className={styles.howToUseApp}>
        <header onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h2>How does this work then?</h2>
        </header>

        {isHovering && (
          <div className={styles.instructionsUl}>
            <ul>
              <li>
                Every time you click &quot;Get New Card&quot; or refresh the
                page, you get six new Eurovision cliches.
              </li>
              <li>
                Every time you see or hear one of your cliches on screen during
                Eurovision, click it.
              </li>
              <li>The aim is to click all six.</li>
              <li>
                When you have got all six, make sure the sound is on on your
                device and click &quot;Bingo&quot;.
              </li>
              <li>Play as many times as you want.</li>
              <li>To remove this message either move or click away from it.</li>
            </ul>
          </div>
        )}
      </section>

      <br />
      <button
        type="button"
        className={styles.getCards}
        data-testid="get-cards-button"
        id="getCards"
        onClick={handleGetNewCards}
      >
        Get New Card
      </button>
      <ActiveButtons
        handleClick={handleClick}
        buttonStates={buttonStates}
        cardArray={cardArray}
        setIsBingoButtonActive={setIsBingoButtonActive}
      />
      <Winning isBingoButtonActive={isBingoButtonActive} />
    </section>
  );
};

export default BingoCard;
