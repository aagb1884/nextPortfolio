import React, { useRef, useState } from 'react';
import styles from '../../../../styles/BFApp.module.css';

const MainCharacter = ({setMainCharacter, setShowGif, setGif}) => {
    const [audio] = useState(typeof window !== 'undefined' ? new Audio('/audio/BigFinish/thalia_1.mp3') : null);
    const previousCharacter = useRef(null);

    const mainCharacters = [
        'the Tenth Doctor',
        'the Tenth Doctor but its the Fourteenth Doctor pretending to be the Tenth Doctor',
        "the Tenth Doctor but it's Jackie Tyler pretending to be the Tenth Doctor",
        'River Song',
        'Dalek Caan',
        'The Morbius Doctors',
        'Captain Archibald Hamish Lethbridge-Stewart',
        'an unassuming writer/director/producer (plus actor) in his sixties',
        'Pigbin Josh',
        "the Companions' Rebound Support Group", 
        'Young Soldeed',
        "the painting of the Third Doctor from 'Timelash'",  
        'Elton Pope',
        'Lucy Saxon',
        'the Kerblam HR team',
        "someone Jacob Dudman can't quite do the voice for",
        "the Arabella Weir Doctor",
        'Nardole',
        'Morton Dill',
        'Tallulah and Laszlo',
        "an Unbound Doctor where he's played as Mr Pastry",
        'Bessie',
        'the Shadow Proclamation',
        'Doom',
        "that big Irish cat from 'Gridlock'",
        'Tecteun',
        'a sentient caravan that turns out to be Dodo',
        'K9 trapped in the body of a small girl',
        'Alpha Centauri',
        'the Solitract',
        'Jackson Lake'
    ];

    function get_random_main_character() {
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * mainCharacters.length);
        } while (randomIndex === previousCharacter.current)

        previousCharacter.current = randomIndex;
        const selectedCharacter = mainCharacters[randomIndex];
        setMainCharacter(selectedCharacter);
    }

    function handleButtonClick() {
        setShowGif(true);
        if (audio) {
            audio.play();
        }
        setGif("/images/bigFinish/untempered_schism.gif")
        setTimeout(() => {
            get_random_main_character();
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
            setShowGif(false);
        }, 3000); 
    }

    return ( 
        <div className={styles.bfbuttonContainer}>
            <button type="bfbutton" data-testid="main-character-button" className={styles.bfbutton} onClick={handleButtonClick}>Get Main Character</button>
        </div>
    );
}

export default MainCharacter;
