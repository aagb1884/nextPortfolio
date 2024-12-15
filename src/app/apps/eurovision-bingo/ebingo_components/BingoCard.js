'use client'
import Winning from "./Winning";
import ActiveButtons from '../ebingo_components/ActiveButtons';
import styles from '../../../styles/euroBingo.module.css';
import {useState} from 'react';

const BingoCard = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isBingoButtonActive, setIsBingoButtonActive] = useState(false);
    const [buttonStates, setButtonStates] = useState([false, false, false, false, false, false]);

    const handleClick = (index) => {
         const updatedButtonStates = [...buttonStates];
        updatedButtonStates[index] = !updatedButtonStates[index];
        setButtonStates(updatedButtonStates);
        
        if (updatedButtonStates.every(state => state === true)) {
            setIsBingoButtonActive(true);
        } else {
            setIsBingoButtonActive(false);
        }
    };

    const EurovisionClicheArray = [
        'ciabatta smelling hipster\'s folksy simpering',
        'power ballad delivered by woman nailed to the floor',
        'nul points',
        'the singer has made a tiktok for the IDF',
        'simple staging',
        'jerky stop-motion dancing',
        'heavily symbolic tree',
        'former winner does a song',
        'former winner does some banter',
        'abba',
        'graham norton gives up',
        'graham norton is genuinely surprised',
        'graham norton mentions the staging',
        'KEY CHANGE',
        'this song\'s message is simply that the singer is incredibly horny',
        'gratuitous wind machine',
        'weird-shaped piano',
        'the hosts\' banter makes everyone clench',
        'the international jury rep tries to announce their points just as the host interrupts them by asking for their points',
        'the international jury representative sings while everyone waits for them to stop',
        'the international jury representative is drunk',
        'here\'s the esteemed old man who does the admin',
        'costume change',
        'Terry Wogan sardonic bitchiness compilation',
        'interpretive dance',
        'winking occurs',
        'fiddle playing intensifies',
        'running along the stage high-fiving the audience',
        'mullet',
        'big ass drums',
        'holding a note',
        'backing singer really going for it',
        'singer in green room notices they\'re on camera and pleads for votes',
        'actual tears',
        'parping',
        'traditional instrument',
        'singer looks into the camera',
        'singer brings in clenched fist',
        'dress is bigger than person wearing it',
        '12 points to our neighbours',
        'fire',
        'someone expresses the sentiment that war is bad',
        'someone expresses the sentiment that racism is bad',
        'topless men',
        'oiled topless men',
        'banging techno',
        'plausible incel',
        'hot pants',
        'mime',
        'liberties taken with folklore',
        'the italian entry not doing drugs',
        'green room despair enclave',
        'stilts',
        'rhyming "fire" with "higher"',
        'monochrome (aesthetics)',
        'monochrome (point about society)',
        'puffy sleeves',
        'sexy folklore',
        'ska',
        'gymnasts from the ceiling',
        'riverdance (mention of)',
        'riverdance (actual dance)',
        'ANOTHER KEY CHANGE',
        'dubstep breakdown',
        'band are related to each other',
        'lyrics like "bingy bongy boogy bongy"',
        'matching outfits',
        'running on the spot',
        'booing',
        'dancers hiding behind the singer',
        'fetish gear',
        'former junior eurovision contestant',
        "ooh you'll have someone's eye out with that",
        "saxophone",
        'goth in the matrix',
        'dance track about being possessed by the spirit of Edgar Allen Poe',
        "we're not so different, you and i",
        'surprise eye of sauron',
        'song with faintly threatening aura',
        'niche kinks being catered to',
        'human centipede',
        'incredibly localised old ladies',
        'ice skating',
        'who is this childman?',
        "everybody's talking about those kinky boots",
        "well that's not in Europe",
        "audience face paint",
        "METAL",
        "tonal whiplash",
        "bit that goes CLAPCLAPCLAPCLAP (CLAPCLAPCLAPCLAP)",
        "pleather",
        "water feature",
        "floor screaming",
        "i am reminded of the nineties and thus my own mortality",
        'hot pants',
        'regional variation on yodelling',
        
    ]

    function getCliches(EurovisionClicheArray, num) {
        const shuffled = [...EurovisionClicheArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const [cardArray, setCardArray] = useState(getCliches(EurovisionClicheArray, 6));

    const handleGetNewCards = () => {
        setCardArray(getCliches(EurovisionClicheArray, 6));
        setButtonStates(Array(6).fill(false));
        setIsBingoButtonActive(false);
        }

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }

      return (
        <section className={styles.cardWrapper}>
          
                    <section className={styles.howToUseApp}>
                
                    <header
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    >
                    <h2>How does this work then?</h2>
                    </header>

                    {isHovering && (
                    <div className={styles.instructionsUl}>
                <ul>
                    <li>Every time you click "Get New Card" or refresh the page, you get six new Eurovision cliches.</li>
                    <li>Every time you see or hear one of your cliches on screen during Eurovision, click it.</li>
                    <li>The aim is to click all six.</li>
                    <li>When you have got all six, make sure the sound is on on your device and click "Bingo".</li>
                    <li>Play as many times as you want.</li>
                    <li>To remove this message either move or click away from it.</li>
                </ul>
                
                        </div>
                    )}
                
                    </section>

           <br />
            <button type="button" className={styles.getCards} data-testid="get-cards-button" id="getCards" onClick={handleGetNewCards}>Get New Card</button>
            <ActiveButtons 
            handleClick={handleClick}
            buttonStates={buttonStates}
            cardArray={cardArray} 
            setIsBingoButtonActive={setIsBingoButtonActive}
            />
            <Winning  
            isBingoButtonActive={isBingoButtonActive}
            />
        </section>
    );
}

export default BingoCard;