'use client'

import styles from "@/app/styles/sciFiName.module.css";
import {useState} from 'react';
import Image from "next/image";
import AppsFooter from "../components/AppsFooter";

interface JsonData{
    syllables: {
      single: [
          syllable: string
      ],
      syllables: [
        syllable: string
      ]
      }
  }
  

const SciFiNamePage: React.FC<JsonData> = ({syllables}) => {
    const [name, setName] = useState<string>("");
    const [noOfSyllables, setNumberOfSyllables] = useState(1);
    const [chibnallFilter, setChibnallFilter] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfSyllables(e.target.valueAsNumber);
    } 

    const chibnallFilteredStrings = (array: string[]) => {
        return array.filter((syllable) => syllable.includes("k"))
    } 

    function getRandomName(number: number) {
    const chibnallOne = chibnallFilteredStrings(syllables.single)
    const chibnallLong = chibnallFilteredStrings(syllables.syllables)
    if (chibnallFilter && number === 1) {
        const randomElement = chibnallOne[Math.floor(Math.random() * chibnallOne.length)];
        setName(randomElement)
    }
    else if (chibnallFilter && number > 1) {
        const randomElement = chibnallOne[Math.floor(Math.random() * chibnallOne.length)];
        const scrambled = chibnallLong?.sort((a,b) => 0.5 - Math.random());
        const noSyllablesRequired = noOfSyllables - 1
        const getSyllables = scrambled?.slice(0, noSyllablesRequired);
        const joinSyllables = getSyllables.join("").toLowerCase()
        setName(randomElement + joinSyllables)
    }
    else if (number === 1) {
        const randomElement = syllables.single[Math.floor(Math.random() * syllables.single.length)];
        setName(randomElement)
    }
    else if (number > 1) {
        const randomElement = syllables.single[Math.floor(Math.random() * syllables.single.length)];
        const scrambled = syllables.syllables?.sort((a,b) => 0.5 - Math.random());
        const noSyllablesRequired = noOfSyllables - 1
        const getSyllables = scrambled?.slice(0, noSyllablesRequired);
        const joinSyllables = getSyllables.join("").toLowerCase()
        setName(randomElement + joinSyllables)
    }

    }

    const handleCopyClick = async () => {
        try {
            await window.navigator.clipboard.writeText(name);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
    };


    return ( 
        <main className={styles.sciFiNameMain}>
            <AppsFooter />
            <h1 className={styles.sciFiTitle}>Sci Fi Character Name Generator</h1>
            <div className={styles.noOfSyllablesDiv}>
            Number of Syllables:

            <input 
            value={noOfSyllables}
            onChange={handleChange}
            type='number'
            min={1}
            max={10}
            name='noOfSyllables'
            className={styles.noOfSyllablesInput}
            />
            <button onClick={() => {setChibnallFilter(!chibnallFilter)}}>
                Chibnall Filter
            </button>
            </div>
            <button
            onClick={() => {getRandomName(noOfSyllables)}}
            className={styles.getNameBtn}>
                Get Sci Fi Name
            </button>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.copyClipboard}>
            <button
            onClick={handleCopyClick}
            >
            <Image
            src="/images/icons8-copy-to-clipboard-48.png"
            alt="Copy to Clipboard icon by Icons8"
            title="Copy to Clipboard (icon by Icons8)"
            id="clipboard"
            width={30}
            height={30}
            />
            </button>
        </div>
        </main>
     );
}
 
export default SciFiNamePage;