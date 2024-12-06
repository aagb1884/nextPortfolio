import { useState, useRef } from 'react';
import styles from '../../../../styles/BFApp.module.css';


const SupportingCharacter = ({setSupportingCharacter, setShowGif, setGif}) => {
    const [audio] = useState(typeof window !== 'undefined' ? new Audio('/audio/BigFinish/thalia_2.mp3') : null);
    const previousCharacter = useRef(null);

    const supportingCharacters = [
    'Pigbin Josh',
        "Choking on an Olive woman from 'The Lazarus Experiment'",
        "that pirate who disappears for ages",
        'Angie and Artie Maitland',
        "Richard Nixon",
        "the 'Eat My Salad' guy",
        "Commander Maxil's hat",
        "Baby Sergeant Benton",
        'Pete the Morgue Attendant',
        "Daniel Barton's mum",
        "Noor Inayat Khan",
        'any of the Class cast who are available',
        'Gilbert M',
        'Courtney Pine',
        'the Ogron-Eater',
        "Commodore 'Tonker' Travers",
        'CyberBrig',
        'the Afghan kid Danny Pink killed',
        'the cow the Doctor asked about time scanners',
        "Maria's Dad",
        "Nerys",
        "Bill's Foster Mum",
        "Boss Baby",
        "an increasingly wounded Davina McCall",
        'Gerry Adams',
        'a cat called Clive Owen',
        "characters similar to - but legally distinct from - ones in 'Thunderbirds' called Jaff Treacy and Broins",
        'Wolsey',
        "the Brigadier's Italian Uncle, Mario,"
    ];

    function get_random_supporting_character() {
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * supportingCharacters.length)
        } while (randomIndex === previousCharacter.current)

        previousCharacter.current = randomIndex;
        const selectedCharacter = supportingCharacters[randomIndex];
        setSupportingCharacter(selectedCharacter);
    }

    function handleButtonClick() {
        setShowGif(true);
        if (audio) {
            audio.play();
        }
        setGif("/images/bigFinish/capaldi_clocks.gif");
        setTimeout(() => {
            get_random_supporting_character();
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
            setShowGif(false);
        }, 3000); 
    }

    return ( 
        <div className={styles.bfbuttonContainer}>
            <button type="button" data-testid="supporting-character-button" className={styles.bfbutton} onClick={handleButtonClick}>Get Supporting Character</button>
        </div>
    );
}
 
export default SupportingCharacter;
