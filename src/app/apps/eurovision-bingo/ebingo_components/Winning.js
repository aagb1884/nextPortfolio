'use client'
import { useState } from "react";
import styles from '../../../euroBingo.module.css';
import tickerTape from '../../../../../public/images/ticker_tape.gif'
import Image from "next/image";

const Winning = ({isBingoButtonActive}) => {
   const [showGif, setShowGif] = useState(false);
   const [audio] = useState(typeof window !== 'undefined' ? new Audio('/audio/euphoria_excerpt.mp3') : null);

    function play() {
                if (audio) {
                    audio.play();
                }
                setShowGif(true);
                setTimeout(()=> {
                    if (audio) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                    setShowGif(false);
                }, 7300)
              }

              

    return ( 
        <section className={styles.bingoWin}>
            <button type="button" 
                    data-testid="audio-button" 
                    id="bingo" 
                    className={`${styles.bingo} ${isBingoButtonActive ? '' : styles.bingoDisabled}`}
                    disabled={!isBingoButtonActive}
                    onClick={play} 
                    >BINGO</button>
                     {showGif && <Image className={styles.tickerTape} src={tickerTape} alt="Ticker Tape gif" 
                     width={100} height={100}/>} 
             </section>
    );
    }


export default Winning;